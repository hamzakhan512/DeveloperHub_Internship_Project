<template>
  <div class="about-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="hero-bg"></div>
      <div class="container">
        <div class="page-hero-content">
          <span class="tag">About DevelopersHub</span>
          <h1 class="page-hero-title">We're More Than a <span>Tech Agency</span></h1>
          <p class="page-hero-sub">A globally distributed team of engineers, designers, and strategists building digital futures since 2017.</p>
        </div>
      </div>
    </section>

    <!-- ABOUT STORY -->
    <section class="section">
      <div class="container">
        <div class="about-grid">
          <!-- Visual side -->
          <div class="about-visual">
            <div class="about-img-wrap">
              <div class="about-img-bg"></div>
              <div class="about-code-card">
                <div v-for="line in codeLines" :key="line.num" class="code-line">
                  <span class="line-num">{{ line.num }}</span>
                  <span v-html="line.html"></span>
                </div>
              </div>
            </div>
            <div class="about-badge badge-top">
              <div class="badge-icon">🏆</div>
              <div>
                <div class="badge-num">200+</div>
                <div class="badge-text">Projects Delivered</div>
              </div>
            </div>
            <div class="about-badge badge-bottom">
              <div class="badge-icon">🌍</div>
              <div>
                <div class="badge-num">12</div>
                <div class="badge-text">Countries Served</div>
              </div>
            </div>
          </div>

          <!-- Text side -->
          <div class="about-content">
            <span class="tag">Our Story</span>
            <h2 class="about-title">Built by Builders, <span>For Builders</span></h2>
            <p class="about-text">
              Founded in 2017, DevelopersHub Corporation is a full-service digital technology company with a globally distributed team of 50+ engineers, designers, and strategists.
            </p>
            <p class="about-text">
              We partner with startups, scale-ups, and enterprise organizations to build software that matters — from AI-driven automation platforms to market-leading mobile apps.
            </p>
            <p class="about-text">
              Our philosophy is simple: combine deep technical expertise with genuine business understanding to deliver solutions that create real, lasting impact.
            </p>
            <div class="about-values">
              <div v-for="v in values" :key="v.name" class="value-item">
                <div class="value-emoji">{{ v.emoji }}</div>
                <div class="value-name">{{ v.name }}</div>
                <div class="value-desc">{{ v.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TEAM -->
    <section class="section team-section">
      <div class="container">
        <div class="section-header">
          <span class="tag">Our Team</span>
          <h2 class="section-title">The People Behind <span>The Magic</span></h2>
          <p class="section-sub">A diverse team of experts passionate about world-class digital products.</p>
        </div>
        <div class="team-grid">
          <div v-for="member in team" :key="member.name" class="team-card card">
            <div class="team-avatar">{{ member.avatar }}</div>
            <div class="team-name">{{ member.name }}</div>
            <div class="team-role">{{ member.role }}</div>
            <div class="team-bio">{{ member.bio }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="section stats-section">
      <div class="container">
        <div class="stats-grid">
          <div v-for="s in statsData" :key="s.label" class="stat-block">
            <div class="stat-big">{{ s.value }}</div>
            <div class="stat-big-label">{{ s.label }}</div>
            <div class="stat-big-desc">{{ s.desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaBanner
      title="Join Us or Work With Us"
      subtitle="We're always looking for exceptional talent and ambitious clients ready to build something great."
      primary-text="Start a Project"
      primary-link="/contact"
      secondary-text="View Open Roles"
      secondary-link="/contact"
    />
  </div>
</template>

<script setup>
import CtaBanner from '@/components/CtaBanner.vue'

const codeLines = [
  { num: '01', html: '<span style="color:#7c5cfc">const</span> team = {' },
  { num: '02', html: '&nbsp;<span style="color:#4f8eff">mission</span>: <span style="color:#00e5c3">"Build futures"</span>,' },
  { num: '03', html: '&nbsp;<span style="color:#4f8eff">engineers</span>: <span style="color:#00e5c3">50</span>,' },
  { num: '04', html: '&nbsp;<span style="color:#4f8eff">countries</span>: <span style="color:#00e5c3">12</span>,' },
  { num: '05', html: '&nbsp;<span style="color:#4f8eff">expertise</span>: [' },
  { num: '06', html: '&nbsp;&nbsp;<span style="color:#00e5c3">"AI/ML"</span>, <span style="color:#00e5c3">"Web"</span>,' },
  { num: '07', html: '&nbsp;&nbsp;<span style="color:#00e5c3">"Mobile"</span>, <span style="color:#00e5c3">"Cloud"</span>' },
  { num: '08', html: '&nbsp;],' },
  { num: '09', html: '&nbsp;<span style="color:#5a5f78">// Est. 2017</span>' },
  { num: '10', html: '};' },
]

const values = [
  { emoji: '⚡', name: 'Speed & Quality',   desc: 'We move fast without compromising on excellence.' },
  { emoji: '🔮', name: 'Innovation-First',  desc: 'We embrace emerging tech before it goes mainstream.' },
  { emoji: '🤝', name: 'True Partnership',  desc: 'Invested in your success, not just the deliverable.' },
  { emoji: '📊', name: 'Data-Driven',       desc: 'Every decision is backed by real metrics and insights.' },
]

const team = [
  { avatar: '👨‍💻', name: 'Alex Rivera',   role: 'CEO & Co-Founder',    bio: '15+ years in enterprise software and AI strategy.' },
  { avatar: '👩‍🔬', name: 'Dr. Priya Shah', role: 'Head of AI Research',  bio: 'PhD in Machine Learning, ex-Google Brain researcher.' },
  { avatar: '👨‍🎨', name: 'Luca Ferretti', role: 'Design Director',       bio: 'Award-winning UX designer, a decade at Figma.' },
  { avatar: '👩‍💼', name: 'Aisha Kamau',   role: 'VP of Marketing',       bio: 'Growth expert who has scaled 3 companies to $100M+.' },
  { avatar: '👨‍🔧', name: 'Omar Hassan',   role: 'Lead Engineer',          bio: 'Full-stack architect with 12+ years shipping at scale.' },
  { avatar: '👩‍💻', name: 'Maya Patel',    role: 'Mobile Lead',            bio: 'Flutter expert behind 30+ App Store top-ranked apps.' },
  { avatar: '🧑‍🎬', name: 'Carlos Ruiz',  role: 'Post Production Head',   bio: 'Emmy-nominated editor turned digital video director.' },
  { avatar: '👩‍📊', name: 'Yuki Tanaka',   role: 'Data Science Lead',      bio: 'Ex-Netflix recommendations engineer, ML specialist.' },
]

const statsData = [
  { value: '200+', label: 'Projects Delivered', desc: 'From simple MVPs to complex enterprise platforms.' },
  { value: '50+',  label: 'Expert Team Members', desc: 'Engineers, designers, and strategists worldwide.' },
  { value: '98%',  label: 'Client Satisfaction', desc: 'Measured through post-project NPS surveys.' },
  { value: '12',   label: 'Countries Served',    desc: 'Clients across 4 continents and growing.' },
]
</script>

<style scoped>
/* Page Hero */
.page-hero {
  padding: 140px 0 80px;
  position: relative;
  background: var(--bg2);
  overflow: hidden;
}

.hero-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 60% at 50% 0%, rgba(79,142,255,0.1), transparent),
    radial-gradient(ellipse 40% 80% at 80% 50%, rgba(124,92,252,0.06), transparent);
}

.page-hero-content {
  position: relative; max-width: 700px;
}

.page-hero-content .tag { margin-bottom: 20px; }

.page-hero-title {
  font-family: var(--font-display);
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 800; line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--white); margin-bottom: 20px;
}
.page-hero-title span {
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.page-hero-sub { font-size: 18px; color: var(--text2); max-width: 500px; }

/* About Grid */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-visual { position: relative; }

.about-img-wrap {
  aspect-ratio: 1;
  border-radius: 24px;
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  position: relative;
}

.about-img-bg {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(79,142,255,0.15), rgba(124,92,252,0.15));
}

.about-code-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  width: 90%;
  position: relative; z-index: 1;
  font-family: monospace;
  font-size: 13px; line-height: 1.8;
  color: var(--text2);
}

.code-line { display: block; }
.line-num { color: var(--text3); margin-right: 16px; user-select: none; }

.about-badge {
  position: absolute;
  padding: 12px 20px;
  border-radius: 14px;
  background: var(--surface);
  border: 1px solid var(--border);
  backdrop-filter: blur(10px);
  display: flex; align-items: center; gap: 12px;
  font-family: var(--font-display);
  box-shadow: var(--shadow);
}

.badge-top  { top: -24px; right: -24px; }
.badge-bottom { bottom: -24px; left: -24px; }

.badge-icon { font-size: 24px; }
.badge-num { font-size: 20px; font-weight: 800; color: var(--white); }
.badge-text { font-size: 12px; color: var(--text2); }

/* About Content */
.about-content .tag { margin-bottom: 20px; }

.about-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 800; line-height: 1.1;
  letter-spacing: -0.02em; margin-bottom: 20px; color: var(--white);
}
.about-title span {
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-text { color: var(--text2); line-height: 1.8; margin-bottom: 16px; }

.about-values {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px; margin-top: 32px;
}

.value-item {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  transition: var(--transition-fast);
}
.value-item:hover { border-color: rgba(79,142,255,0.3); }

.value-emoji { font-size: 24px; margin-bottom: 8px; }
.value-name { font-family: var(--font-display); font-size: 14px; font-weight: 700; color: var(--white); margin-bottom: 4px; }
.value-desc { font-size: 12px; color: var(--text2); }

/* Team */
.team-section { background: var(--bg2); }

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
}

.team-card { text-align: center; }

.team-avatar {
  font-size: 48px;
  width: 80px; height: 80px;
  border-radius: 50%;
  background: var(--surface2);
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 16px;
}

.team-name {
  font-family: var(--font-display); font-size: 16px; font-weight: 700;
  color: var(--white); margin-bottom: 4px;
}

.team-role { font-size: 12px; color: var(--accent); margin-bottom: 12px; font-family: var(--font-display); }
.team-bio { font-size: 13px; color: var(--text2); }

/* Stats */
.stats-section { background: var(--bg); }

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
}

.stat-block {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 36px 28px;
  text-align: center;
  transition: var(--transition-fast);
}
.stat-block:hover { border-color: rgba(79,142,255,0.3); transform: translateY(-4px); }

.stat-big {
  font-family: var(--font-display); font-size: 48px; font-weight: 800;
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.stat-big-label {
  font-family: var(--font-display); font-size: 16px; font-weight: 700;
  color: var(--white); margin-bottom: 8px;
}

.stat-big-desc { font-size: 13px; color: var(--text2); line-height: 1.6; }

@media (max-width: 1024px) {
  .about-grid { grid-template-columns: 1fr; }
  .about-visual { max-width: 400px; margin-bottom: 40px; }
  .badge-top { top: -16px; right: -8px; }
  .badge-bottom { bottom: -16px; left: -8px; }
}

@media (max-width: 600px) {
  .about-values { grid-template-columns: 1fr; }
}
</style>
