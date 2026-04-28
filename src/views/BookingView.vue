<template>
  <div class="booking-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="hero-bg"></div>
      <div class="container">
        <div class="page-hero-content">
          <span class="tag">📅 Meeting Scheduler</span>
          <h1 class="page-hero-title">Book a <span>Discovery Call</span></h1>
          <p class="page-hero-sub">Choose a meeting type, pick a date and time that works for you — we'll handle the rest.</p>
        </div>
      </div>
    </section>

    <!-- BOOKING UI -->
    <section class="section">
      <div class="container">
        <Transition name="fade" mode="out-in">
          <!-- CONFIRMED STATE -->
          <div v-if="confirmed" class="confirmation-card" key="confirmed">
            <div class="confirm-icon">🎉</div>
            <h2 class="confirm-title">Meeting Confirmed!</h2>
            <p class="confirm-sub">Your <strong>{{ selectedMeetingType.name }}</strong> has been scheduled for:</p>
            <div class="confirm-details">
              <div class="confirm-detail">
                <span class="cd-icon">📅</span>
                <span>{{ formattedSelectedDate }}, {{ selectedSlot }}</span>
              </div>
              <div class="confirm-detail">
                <span class="cd-icon">⏱</span>
                <span>{{ selectedMeetingType.duration }} minutes</span>
              </div>
              <div class="confirm-detail">
                <span class="cd-icon">📧</span>
                <span>Confirmation sent to {{ bookingForm.email }}</span>
              </div>
              <div class="confirm-detail">
                <span class="cd-icon">🔗</span>
                <span>Zoom link will be emailed 15 minutes before</span>
              </div>
            </div>
            <button class="btn btn-outline" @click="resetBooking" style="margin-top:32px">Book Another Meeting</button>
          </div>

          <!-- BOOKING FORM -->
          <div v-else class="booking-wrap" key="booking">
            <!-- Step indicator -->
            <div class="steps-bar">
              <div
                v-for="(step, idx) in steps" :key="step"
                :class="['step-indicator', { active: currentStep === idx + 1, done: currentStep > idx + 1 }]"
              >
                <div class="step-dot">
                  <span v-if="currentStep > idx + 1">✓</span>
                  <span v-else>{{ idx + 1 }}</span>
                </div>
                <span class="step-label">{{ step }}</span>
              </div>
              <div class="step-line"></div>
            </div>

            <!-- STEP 1: Meeting Type -->
            <div v-if="currentStep === 1" class="step-content">
              <h2 class="step-title">Select Meeting Type</h2>
              <p class="step-sub">Choose the type of conversation you'd like to have.</p>
              <div class="meeting-types">
                <div
                  v-for="mt in meetingTypes" :key="mt.name"
                  :class="['meeting-type-card', { selected: selectedMeetingType.name === mt.name }]"
                  @click="Object.assign(selectedMeetingType, mt)"
                >
                  <div class="mt-icon">{{ mt.icon }}</div>
                  <div class="mt-name">{{ mt.name }}</div>
                  <div class="mt-dur">{{ mt.duration }} min</div>
                  <div class="mt-desc">{{ mt.desc }}</div>
                  <div class="mt-check" v-if="selectedMeetingType.name === mt.name">✓</div>
                </div>
              </div>
              <div class="step-actions">
                <button class="btn btn-primary" @click="currentStep = 2" :disabled="!selectedMeetingType.name">
                  Continue → Pick a Date
                </button>
              </div>
            </div>

            <!-- STEP 2: Date & Time -->
            <div v-if="currentStep === 2" class="step-content">
              <h2 class="step-title">Pick a Date & Time</h2>
              <p class="step-sub">All times shown in your local timezone ({{ timezone }}).</p>

              <div class="calendar-time-grid">
                <!-- Calendar -->
                <div class="calendar-wrap">
                  <div class="calendar-nav">
                    <button class="cal-nav-btn" @click="changeMonth(-1)">‹</button>
                    <span class="cal-month-label">{{ currentMonthLabel }}</span>
                    <button class="cal-nav-btn" @click="changeMonth(1)">›</button>
                  </div>
                  <div class="cal-day-headers">
                    <span v-for="d in ['Su','Mo','Tu','We','Th','Fr','Sa']" :key="d">{{ d }}</span>
                  </div>
                  <div class="cal-cells">
                    <div
                      v-for="cell in calendarCells" :key="cell.key"
                      :class="['cal-cell', {
                        empty: cell.empty,
                        past: cell.past,
                        weekend: cell.weekend,
                        today: cell.today,
                        selected: selectedDate && cell.date && isSameDay(cell.date, selectedDate),
                        available: cell.available,
                      }]"
                      @click="cell.available && selectDate(cell.date)"
                    >
                      {{ cell.empty ? '' : cell.day }}
                    </div>
                  </div>
                </div>

                <!-- Time Slots -->
                <div class="time-wrap">
                  <div class="time-title">
                    {{ selectedDate ? 'Available Times' : 'Select a date first' }}
                  </div>
                  <div v-if="selectedDate" class="slots-grid">
                    <button
                      v-for="slot in timeSlots" :key="slot.time"
                      :class="['slot-btn', { busy: slot.busy, selected: selectedSlot === slot.time }]"
                      :disabled="slot.busy"
                      @click="selectedSlot = slot.time"
                    >
                      {{ slot.time }}
                    </button>
                  </div>
                  <div v-else class="no-date-msg">
                    <div class="no-date-icon">👈</div>
                    <div>Choose a date on the calendar to see available time slots.</div>
                  </div>
                </div>
              </div>

              <div class="step-actions">
                <button class="btn btn-outline" @click="currentStep = 1">← Back</button>
                <button
                  class="btn btn-primary"
                  @click="currentStep = 3"
                  :disabled="!selectedDate || !selectedSlot"
                >
                  Continue → Your Details
                </button>
              </div>
            </div>

            <!-- STEP 3: Your Details -->
            <div v-if="currentStep === 3" class="step-content">
              <h2 class="step-title">Your Details</h2>
              <p class="step-sub">Tell us a bit about yourself so we can make the most of our time together.</p>

              <!-- Summary -->
              <div class="booking-summary">
                <div class="bs-item"><span class="bs-icon">🗓</span> {{ formattedSelectedDate }}</div>
                <div class="bs-item"><span class="bs-icon">🕐</span> {{ selectedSlot }}</div>
                <div class="bs-item"><span class="bs-icon">📋</span> {{ selectedMeetingType.name }} ({{ selectedMeetingType.duration }} min)</div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Full Name *</label>
                  <input v-model="bookingForm.name" type="text" class="form-input" placeholder="Jane Smith" />
                  <span v-if="bookingErrors.name" class="form-error">{{ bookingErrors.name }}</span>
                </div>
                <div class="form-group">
                  <label class="form-label">Email Address *</label>
                  <input v-model="bookingForm.email" type="email" class="form-input" placeholder="jane@company.com" />
                  <span v-if="bookingErrors.email" class="form-error">{{ bookingErrors.email }}</span>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Company / Role</label>
                  <input v-model="bookingForm.company" type="text" class="form-input" placeholder="Acme Corp, Product Manager" />
                </div>
                <div class="form-group">
                  <label class="form-label">What's This About?</label>
                  <select v-model="bookingForm.topic" class="form-select form-input">
                    <option>New project inquiry</option>
                    <option>Technical consultation</option>
                    <option>Partnership opportunity</option>
                    <option>Support or maintenance</option>
                    <option>General chat</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Brief Agenda (optional)</label>
                <textarea
                  v-model="bookingForm.agenda"
                  class="form-textarea"
                  placeholder="What would you like to cover in this meeting? Any questions or topics in mind?"
                  style="min-height:100px"
                ></textarea>
              </div>

              <div class="step-actions">
                <button class="btn btn-outline" @click="currentStep = 2">← Back</button>
                <button
                  class="btn btn-primary"
                  :class="{ loading: isBooking }"
                  @click="confirmBooking"
                >
                  <span v-if="!isBooking">
                    Confirm Booking ✓
                  </span>
                  <span v-else>Booking...</span>
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </section>

    <!-- WHY BOOK -->
    <section class="section why-section">
      <div class="container">
        <div class="section-header">
          <span class="tag">Before We Meet</span>
          <h2 class="section-title">What to <span>Expect</span></h2>
        </div>
        <div class="expect-grid">
          <div v-for="e in expectations" :key="e.title" class="expect-card card">
            <div class="expect-icon">{{ e.icon }}</div>
            <h4 class="expect-title">{{ e.title }}</h4>
            <p class="expect-desc">{{ e.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const confirmed   = ref(false)
const isBooking   = ref(false)
const currentStep = ref(1)

const steps = ['Meeting Type', 'Date & Time', 'Your Details']

const meetingTypes = [
  { icon: '🔍', name: 'Discovery Call',      duration: 30, desc: 'Explore if we\'re a good fit and map out your project.' },
  { icon: '📋', name: 'Project Review',       duration: 60, desc: 'Deep-dive into an existing project or detailed brief.' },
  { icon: '🛠️', name: 'Tech Consultation',   duration: 45, desc: 'Architecture advice, code review, or stack decisions.' },
  { icon: '💼', name: 'Partnership Meeting',  duration: 60, desc: 'Discuss agency partnerships or reseller opportunities.' },
]

const selectedMeetingType = reactive({ name: '', duration: 0, icon: '' })
const selectedDate = ref(null)
const selectedSlot = ref('')
const confirmed_ = ref(false)

const bookingForm = reactive({ name: '', email: '', company: '', topic: 'New project inquiry', agenda: '' })
const bookingErrors = reactive({ name: '', email: '' })

// Calendar
const calendarBase = ref(new Date())
const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']

const currentMonthLabel = computed(() => {
  const d = calendarBase.value
  return `${monthNames[d.getMonth()]} ${d.getFullYear()}`
})

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

function changeMonth(dir) {
  const d = new Date(calendarBase.value)
  d.setMonth(d.getMonth() + dir)
  calendarBase.value = d
}

const calendarCells = computed(() => {
  const year  = calendarBase.value.getFullYear()
  const month = calendarBase.value.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const today = new Date(); today.setHours(0,0,0,0)

  const cells = []
  for (let i = 0; i < firstDay; i++) cells.push({ key: `e${i}`, empty: true })
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d)
    date.setHours(0,0,0,0)
    const isWeekend = date.getDay() === 0 || date.getDay() === 6
    const isPast    = date < today
    cells.push({
      key:       `d${d}`,
      day:       d,
      date,
      empty:     false,
      past:      isPast,
      weekend:   isWeekend,
      today:     date.getTime() === today.getTime(),
      available: !isPast && !isWeekend,
    })
  }
  return cells
})

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth()    === b.getMonth()    &&
         a.getDate()     === b.getDate()
}

function selectDate(date) {
  selectedDate.value = date
  selectedSlot.value = ''
}

const formattedSelectedDate = computed(() => {
  if (!selectedDate.value) return ''
  return selectedDate.value.toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' })
})

// Simulate some busy slots
const busySlots = ['10:00 AM', '2:00 PM', '4:00 PM']
const allSlots  = ['9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM',
                   '1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM']
const timeSlots = computed(() => allSlots.map(t => ({ time: t, busy: busySlots.includes(t) })))

function validateBooking() {
  let valid = true
  bookingErrors.name  = !bookingForm.name  ? 'Full name is required.'  : ''
  bookingErrors.email = !bookingForm.email ? 'Email is required.' : !bookingForm.email.includes('@') ? 'Enter a valid email.' : ''
  if (bookingErrors.name || bookingErrors.email) valid = false
  return valid
}

async function confirmBooking() {
  if (!validateBooking()) return
  isBooking.value = true
  await new Promise(r => setTimeout(r, 1400))
  isBooking.value = false
  confirmed.value = true
}

function resetBooking() {
  confirmed.value = false
  currentStep.value = 1
  selectedDate.value = null
  selectedSlot.value = ''
  Object.assign(selectedMeetingType, { name: '', duration: 0, icon: '' })
  Object.assign(bookingForm, { name:'', email:'', company:'', topic:'New project inquiry', agenda:'' })
}

const expectations = [
  { icon: '🎯', title: 'Come Prepared',       desc: 'Jot down your goals, key challenges, and any questions. The more context you share, the more valuable our call will be.' },
  { icon: '📞', title: 'Video-First',          desc: 'We\'ll send you a Zoom link. Video is preferred, but audio-only works too. No software install needed.' },
  { icon: '🚫', title: 'Zero Sales Pressure',  desc: 'Our discovery calls are genuinely about understanding your needs — we\'ll only propose a project if we\'re confident we can help.' },
  { icon: '📄', title: 'Follow-Up Proposal',   desc: 'Within 48 hours of our call, you\'ll receive a tailored proposal with scope, timeline, and investment ranges.' },
]
</script>

<style scoped>
.page-hero {
  padding: 140px 0 80px; background: var(--bg2);
  position: relative; overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 70% 60% at 50% 0%, rgba(79,142,255,0.1), transparent);
}
.page-hero-content { position: relative; max-width: 700px; }
.page-hero-content .tag { margin-bottom: 20px; }
.page-hero-title {
  font-family: var(--font-display); font-size: clamp(36px, 6vw, 60px);
  font-weight: 800; line-height: 1.1; letter-spacing: -0.03em;
  color: var(--white); margin-bottom: 20px;
}
.page-hero-title span {
  background: var(--grad);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.page-hero-sub { font-size: 18px; color: var(--text2); }

/* Steps bar */
.steps-bar {
  display: flex; align-items: center; justify-content: center;
  gap: 0; margin-bottom: 48px; position: relative;
}
.step-indicator {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  position: relative; z-index: 1; flex: 1; max-width: 160px;
}
.step-dot {
  width: 40px; height: 40px; border-radius: 50%;
  background: var(--surface); border: 2px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 14px; font-weight: 700;
  color: var(--text3); transition: all 0.3s;
}
.step-indicator.active .step-dot { background: var(--accent); border-color: var(--accent); color: white; }
.step-indicator.done .step-dot   { background: var(--accent3); border-color: var(--accent3); color: #000; }
.step-label { font-size: 12px; font-family: var(--font-display); font-weight: 600; color: var(--text3); white-space: nowrap; }
.step-indicator.active .step-label,
.step-indicator.done .step-label { color: var(--text); }
.step-line {
  position: absolute; top: 20px; left: 10%; right: 10%;
  height: 1px; background: var(--border); z-index: 0;
}

/* Booking wrap */
.booking-wrap {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-xl); padding: 48px; max-width: 900px; margin: 0 auto;
}

.step-content { }
.step-title {
  font-family: var(--font-display); font-size: 26px; font-weight: 800;
  color: var(--white); margin-bottom: 8px;
}
.step-sub { color: var(--text2); font-size: 15px; margin-bottom: 32px; }

/* Meeting Types */
.meeting-types {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px; margin-bottom: 36px;
}
.meeting-type-card {
  border: 2px solid var(--border); border-radius: var(--radius-lg);
  padding: 24px 20px; text-align: center; cursor: pointer;
  transition: all 0.2s; position: relative; background: var(--bg);
}
.meeting-type-card.selected { border-color: var(--accent); background: rgba(79,142,255,0.08); }
.meeting-type-card:hover { border-color: rgba(79,142,255,0.4); }
.mt-icon { font-size: 32px; margin-bottom: 10px; }
.mt-name { font-family: var(--font-display); font-size: 14px; font-weight: 700; color: var(--white); margin-bottom: 4px; }
.mt-dur  { font-size: 12px; color: var(--accent); font-family: var(--font-display); margin-bottom: 8px; }
.mt-desc { font-size: 12px; color: var(--text2); line-height: 1.5; }
.mt-check {
  position: absolute; top: 10px; right: 10px;
  width: 22px; height: 22px; border-radius: 50%;
  background: var(--accent); color: white; font-size: 12px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
}

/* Calendar & Time */
.calendar-time-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-bottom: 32px;
}
.calendar-nav {
  display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;
}
.cal-nav-btn {
  width: 34px; height: 34px; border-radius: 50%;
  background: var(--surface2); border: 1px solid var(--border);
  color: var(--text); font-size: 18px; cursor: pointer; transition: var(--transition-fast);
  display: flex; align-items: center; justify-content: center;
}
.cal-nav-btn:hover { border-color: var(--accent); color: var(--accent); }
.cal-month-label {
  font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--white);
}
.cal-day-headers {
  display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; margin-bottom: 6px;
}
.cal-day-headers span {
  text-align: center; font-size: 11px; color: var(--text3);
  font-family: var(--font-display); font-weight: 700; padding: 4px 0;
}
.cal-cells { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
.cal-cell {
  aspect-ratio: 1; display: flex; align-items: center; justify-content: center;
  border-radius: 10px; font-size: 13px; font-family: var(--font-display); font-weight: 600;
  transition: all 0.2s; color: var(--text3);
}
.cal-cell.available { color: var(--text); cursor: pointer; }
.cal-cell.available:hover { background: rgba(79,142,255,0.15); color: var(--accent); }
.cal-cell.selected { background: var(--accent) !important; color: white !important; }
.cal-cell.today { border: 1px solid var(--accent); color: var(--accent); }

/* Time slots */
.time-title {
  font-family: var(--font-display); font-size: 15px; font-weight: 700;
  color: var(--white); margin-bottom: 16px;
}
.slots-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); gap: 10px;
}
.slot-btn {
  padding: 10px 8px; border-radius: 10px; text-align: center;
  font-size: 13px; font-weight: 600; font-family: var(--font-display);
  cursor: pointer; transition: all 0.2s;
  border: 1px solid var(--border); color: var(--text2); background: var(--bg);
}
.slot-btn:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
.slot-btn.selected { background: var(--accent); border-color: var(--accent); color: white; }
.slot-btn.busy { color: var(--text3); cursor: not-allowed; background: var(--surface2); text-decoration: line-through; }
.no-date-msg {
  display: flex; flex-direction: column; align-items: center;
  gap: 12px; padding: 40px 20px; text-align: center;
  color: var(--text2); font-size: 14px;
}
.no-date-icon { font-size: 32px; }

/* Booking Summary */
.booking-summary {
  display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px;
  padding: 16px 20px; background: var(--bg); border: 1px solid var(--border);
  border-radius: var(--radius);
}
.bs-item {
  display: flex; align-items: center; gap: 8px;
  font-size: 14px; color: var(--text2);
}
.bs-icon { font-size: 16px; }

/* Step actions */
.step-actions {
  display: flex; gap: 14px; justify-content: flex-end; margin-top: 32px;
  padding-top: 24px; border-top: 1px solid var(--border);
}
.step-actions .btn[disabled] { opacity: 0.4; cursor: not-allowed; }

/* Confirmation */
.confirmation-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-xl); padding: 64px;
  text-align: center; max-width: 600px; margin: 0 auto;
}
.confirm-icon { font-size: 72px; margin-bottom: 24px; }
.confirm-title {
  font-family: var(--font-display); font-size: 32px; font-weight: 800;
  color: var(--white); margin-bottom: 12px;
}
.confirm-sub { color: var(--text2); font-size: 15px; margin-bottom: 28px; }
.confirm-sub strong { color: var(--white); }
.confirm-details {
  background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius);
  padding: 20px; display: flex; flex-direction: column; gap: 12px;
}
.confirm-detail {
  display: flex; align-items: center; gap: 12px;
  font-size: 14px; color: var(--text);
}
.cd-icon { font-size: 18px; }

/* Why book */
.why-section { background: var(--bg2); }
.expect-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 24px;
}
.expect-icon { font-size: 32px; margin-bottom: 16px; }
.expect-title {
  font-family: var(--font-display); font-size: 16px; font-weight: 700;
  color: var(--white); margin-bottom: 8px;
}
.expect-desc { font-size: 14px; color: var(--text2); line-height: 1.7; }

/* Form */
.form-error { font-size: 12px; color: #ff5f5f; margin-top: 4px; }
.loading { opacity: 0.7; cursor: not-allowed; }

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .booking-wrap { padding: 24px; }
  .calendar-time-grid { grid-template-columns: 1fr; }
  .steps-bar { gap: 4px; }
  .step-label { display: none; }
  .confirmation-card { padding: 32px 24px; }
}
</style>
