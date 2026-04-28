<template>
  <div class="contact-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="hero-bg"></div>
      <div class="container">
        <div class="page-hero-content">
          <span class="tag">Get In Touch</span>
          <h1 class="page-hero-title">Let's Build <span>Together</span></h1>
          <p class="page-hero-sub">Have a project in mind? Looking for a long-term technology partner? We'd love to hear from you.</p>
        </div>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Info Column -->
          <div class="contact-info">
            <h2 class="info-title">Let's Start a <span>Conversation</span></h2>
            <p class="info-text">Whether you have a fully scoped project or just a rough idea, we're here to help you figure out the best path forward.</p>

            <div class="contact-items">
              <div v-for="item in contactItems" :key="item.label" class="contact-item">
                <div class="contact-icon">{{ item.icon }}</div>
                <div>
                  <div class="contact-label">{{ item.label }}</div>
                  <div class="contact-val">{{ item.value }}</div>
                </div>
              </div>
            </div>

            <!-- Office Hours -->
            <div class="office-hours">
              <div class="oh-title">🕐 Office Hours</div>
              <div class="oh-row"><span>Monday – Friday</span><span>9:00 AM – 6:00 PM PST</span></div>
              <div class="oh-row"><span>Saturday</span><span>10:00 AM – 2:00 PM PST</span></div>
              <div class="oh-row"><span>Sunday</span><span>Closed</span></div>
            </div>

            <!-- Response Guarantee -->
            <div class="response-badge">
              <div class="response-icon">⚡</div>
              <div>
                <div class="response-title">Fast Response Guaranteed</div>
                <div class="response-sub">We reply to all inquiries within 24 business hours.</div>
              </div>
            </div>
          </div>

          <!-- Form Column -->
          <div class="contact-form-wrap">
            <Transition name="fade" mode="out-in">
              <div v-if="!submitted" class="contact-form" key="form">
                <h3 class="form-title">Send Us a Message</h3>

                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">First Name *</label>
                    <input v-model="form.firstName" type="text" class="form-input" placeholder="Jane" />
                    <span v-if="errors.firstName" class="form-error">{{ errors.firstName }}</span>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Last Name *</label>
                    <input v-model="form.lastName" type="text" class="form-input" placeholder="Smith" />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">Email Address *</label>
                    <input v-model="form.email" type="email" class="form-input" placeholder="jane@company.com" />
                    <span v-if="errors.email" class="form-error">{{ errors.email }}</span>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Phone (Optional)</label>
                    <input v-model="form.phone" type="tel" class="form-input" placeholder="+1 555 000 0000" />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">Company</label>
                    <input v-model="form.company" type="text" class="form-input" placeholder="Acme Corp" />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Budget Range</label>
                    <select v-model="form.budget" class="form-select form-input">
                      <option value="">Select range...</option>
                      <option>Under $10K</option>
                      <option>$10K – $25K</option>
                      <option>$25K – $50K</option>
                      <option>$50K – $100K</option>
                      <option>$100K+</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">Service Interested In *</label>
                  <select v-model="form.service" class="form-select form-input">
                    <option value="">Select a service...</option>
                    <option>Software Development</option>
                    <option>AI Solutions & Automation</option>
                    <option>AI Content Generation</option>
                    <option>Digital Marketing</option>
                    <option>Post Production</option>
                    <option>Meeting Scheduler System</option>
                    <option>Other / Multiple Services</option>
                  </select>
                  <span v-if="errors.service" class="form-error">{{ errors.service }}</span>
                </div>

                <div class="form-group">
                  <label class="form-label">Project Details *</label>
                  <textarea
                    v-model="form.message"
                    class="form-textarea"
                    placeholder="Tell us about your project, goals, and timeline..."
                  ></textarea>
                  <span v-if="errors.message" class="form-error">{{ errors.message }}</span>
                </div>

                <button class="form-submit" :class="{ loading: isSubmitting }" @click="handleSubmit">
                  <span v-if="!isSubmitting">
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                  </span>
                  <span v-else>Sending...</span>
                </button>
              </div>

              <!-- Success State -->
              <div v-else class="form-success" key="success">
                <div class="success-icon">🎉</div>
                <h3 class="success-title">Message Received!</h3>
                <p class="success-text">Thank you for reaching out, <strong>{{ form.firstName }}</strong>! Our team will review your project details and get back to you within 24 hours.</p>
                <button class="btn btn-outline" @click="resetForm" style="margin-top:24px">Send Another Message</button>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section faq-section">
      <div class="container">
        <div class="section-header">
          <span class="tag">FAQ</span>
          <h2 class="section-title">Common <span>Questions</span></h2>
        </div>
        <div class="faq-grid">
          <div v-for="faq in faqs" :key="faq.q" class="faq-item" @click="toggleFaq(faq)">
            <div class="faq-question">
              {{ faq.q }}
              <span class="faq-arrow" :class="{ open: faq.open }">›</span>
            </div>
            <Transition name="faq">
              <div v-if="faq.open" class="faq-answer">{{ faq.a }}</div>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const submitted   = ref(false)
const isSubmitting = ref(false)

const form = reactive({
  firstName: '', lastName: '', email: '', phone: '',
  company: '', budget: '', service: '', message: '',
})

const errors = reactive({
  firstName: '', email: '', service: '', message: '',
})

const contactItems = [
  { icon: '📧', label: 'Email',         value: 'hello@developershub.co' },
  { icon: '📞', label: 'Phone',         value: '+1 (555) 234-5678' },
  { icon: '📍', label: 'Headquarters',  value: 'San Francisco, CA · Remote-First' },
  { icon: '⏰', label: 'Response Time', value: 'Within 24 business hours' },
]

const faqs = reactive([
  { q: 'How long does a typical project take?',                    a: 'It depends on scope. A simple MVP can be ready in 4–8 weeks; a full-featured enterprise platform typically takes 4–6 months. We\'ll give you a precise timeline after our discovery call.',             open: false },
  { q: 'Do you work with startups or only enterprise clients?',    a: 'Both! We love working with early-stage startups building MVPs and with large enterprises modernising legacy systems. Our engagement models flex to fit different budgets and timelines.',               open: false },
  { q: 'What is your development process like?',                   a: 'We follow an agile approach — two-week sprints, weekly demos, and continuous delivery. You\'ll always know what we\'re working on and have visibility into progress through a shared dashboard.',        open: false },
  { q: 'Do you provide post-launch support?',                      a: 'Yes. All projects include a 30-day post-launch support period. We also offer ongoing retainer packages for maintenance, monitoring, feature development, and growth optimisation.',                       open: false },
  { q: 'Can we scale our engagement up or down over time?',        a: 'Absolutely. Many clients start with a small project and grow into a long-term partnership. Others engage us on a retainer basis with a flexible team size month to month.',                             open: false },
  { q: 'How do you handle confidentiality and IP?',               a: 'We sign NDAs before any project discussion. All code and intellectual property created for your project belongs to you upon final payment. We take data security and confidentiality very seriously.',  open: false },
])

function toggleFaq(faq) {
  faq.open = !faq.open
}

function validate() {
  let valid = true
  errors.firstName = !form.firstName ? 'First name is required.' : ''
  errors.email     = !form.email     ? 'Email is required.'      : !form.email.includes('@') ? 'Enter a valid email.' : ''
  errors.service   = !form.service   ? 'Please select a service.' : ''
  errors.message   = !form.message   ? 'Please describe your project.' : ''
  if (errors.firstName || errors.email || errors.service || errors.message) valid = false
  return valid
}

async function handleSubmit() {
  if (!validate()) return
  isSubmitting.value = true
  await new Promise(r => setTimeout(r, 1200))
  isSubmitting.value = false
  submitted.value = true
}

function resetForm() {
  submitted.value = false
  Object.keys(form).forEach(k => form[k] = '')
}
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

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px; align-items: start;
}

/* Info */
.info-title {
  font-family: var(--font-display); font-size: clamp(24px, 3.5vw, 36px);
  font-weight: 800; line-height: 1.15; letter-spacing: -0.02em;
  color: var(--white); margin-bottom: 16px;
}
.info-title span {
  background: var(--grad);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.info-text { color: var(--text2); line-height: 1.8; margin-bottom: 32px; font-size: 15px; }

.contact-items { display: flex; flex-direction: column; gap: 12px; margin-bottom: 28px; }
.contact-item {
  display: flex; align-items: center; gap: 16px;
  padding: 16px 20px; border-radius: var(--radius);
  background: var(--surface); border: 1px solid var(--border);
  transition: var(--transition-fast);
}
.contact-item:hover { border-color: rgba(79,142,255,0.3); }
.contact-icon {
  width: 40px; height: 40px; border-radius: 10px;
  background: rgba(79,142,255,0.1);
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; flex-shrink: 0;
}
.contact-label {
  font-size: 11px; color: var(--text3);
  text-transform: uppercase; letter-spacing: 0.08em;
  font-family: var(--font-display); margin-bottom: 2px;
}
.contact-val { font-size: 14px; color: var(--text); font-weight: 500; }

/* Office Hours */
.office-hours {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 20px; margin-bottom: 20px;
}
.oh-title { font-family: var(--font-display); font-size: 14px; font-weight: 700; color: var(--white); margin-bottom: 12px; }
.oh-row {
  display: flex; justify-content: space-between;
  font-size: 13px; color: var(--text2); padding: 6px 0;
  border-bottom: 1px solid var(--border);
}
.oh-row:last-child { border-bottom: none; }

/* Response badge */
.response-badge {
  display: flex; align-items: center; gap: 14px;
  padding: 16px 20px; border-radius: var(--radius);
  background: rgba(0,229,195,0.07); border: 1px solid rgba(0,229,195,0.2);
}
.response-icon { font-size: 24px; }
.response-title { font-family: var(--font-display); font-size: 14px; font-weight: 700; color: var(--white); }
.response-sub { font-size: 12px; color: var(--text2); margin-top: 2px; }

/* Form */
.contact-form-wrap {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 40px;
}
.form-title {
  font-family: var(--font-display); font-size: 22px; font-weight: 700;
  color: var(--white); margin-bottom: 28px;
}
.form-error { font-size: 12px; color: #ff5f5f; margin-top: 4px; }

.form-submit {
  width: 100%; padding: 16px; border-radius: 100px;
  font-family: var(--font-display); font-size: 15px; font-weight: 700;
  background: var(--grad); color: white; border: none; cursor: pointer;
  transition: all 0.3s; display: flex; align-items: center; justify-content: center; gap: 10px;
}
.form-submit:hover { transform: translateY(-2px); box-shadow: 0 16px 48px rgba(79,142,255,0.4); }
.form-submit.loading { opacity: 0.7; cursor: not-allowed; }

/* Success */
.form-success { text-align: center; padding: 40px 20px; }
.success-icon { font-size: 64px; margin-bottom: 20px; }
.success-title {
  font-family: var(--font-display); font-size: 26px; font-weight: 800;
  color: var(--white); margin-bottom: 12px;
}
.success-text { color: var(--text2); font-size: 15px; line-height: 1.7; }
.success-text strong { color: var(--white); }

/* FAQ */
.faq-section { background: var(--bg2); }
.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  gap: 12px; max-width: 1000px; margin: 0 auto;
}
.faq-item {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 20px 24px;
  cursor: pointer; transition: var(--transition-fast);
}
.faq-item:hover { border-color: rgba(79,142,255,0.3); }
.faq-question {
  font-family: var(--font-display); font-size: 15px; font-weight: 700;
  color: var(--white); display: flex; justify-content: space-between; align-items: center; gap: 12px;
}
.faq-arrow {
  font-size: 20px; color: var(--accent); transition: transform 0.3s;
  display: inline-block; flex-shrink: 0;
}
.faq-arrow.open { transform: rotate(90deg); }
.faq-answer { margin-top: 12px; font-size: 14px; color: var(--text2); line-height: 1.8; }

/* Transitions */
.faq-enter-active, .faq-leave-active { transition: all 0.25s ease; overflow: hidden; }
.faq-enter-from, .faq-leave-to { opacity: 0; max-height: 0; margin-top: 0; }
.faq-enter-to, .faq-leave-from { opacity: 1; max-height: 300px; }
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 1024px) {
  .contact-grid { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .faq-grid { grid-template-columns: 1fr; }
  .contact-form-wrap { padding: 24px; }
}
</style>
