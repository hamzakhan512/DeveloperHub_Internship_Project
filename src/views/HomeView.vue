<template>
  <div class="home">
    <!-- HERO -->
    <section class="hero">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
      <div class="hero-bg"></div>
      <div class="hero-grid"></div>

      <div class="container hero-content">
        <div class="hero-eyebrow">
          <span class="tag">🚀 Trusted by 200+ Global Clients</span>
        </div>
        <h1 class="hero-title">
          <span class="line"><span class="word w1">We Build</span></span>
          <span class="line"><span class="word w2 grad">Digital Futures</span></span>
          <span class="line"><span class="word w3">That</span> <span class="word w4 grad2">Matter.</span></span>
        </h1>
        <p class="hero-desc">
          From cutting-edge software to AI-powered automation — DevelopersHub is your partner in digital transformation. We turn complex ideas into elegant, scalable solutions.
        </p>
        <div class="hero-btns">
          <RouterLink to="/services" class="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            Explore Services
          </RouterLink>
          <RouterLink to="/portfolio" class="btn btn-outline">
            View Our Work
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </RouterLink>
        </div>
        <div class="hero-stats">
          <div v-for="stat in stats" :key="stat.label" class="stat">
            <div class="stat-num">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- MARQUEE -->
    <SectionMarquee />

    <!-- SERVICES PREVIEW -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="tag">What We Do</span>
          <h2 class="section-title">Services That <span>Scale With You</span></h2>
          <p class="section-sub">From MVP to enterprise — full-stack digital solutions built to grow with your business.</p>
        </div>
        <div class="services-grid">
          <ServiceCard v-for="s in services" :key="s.name" :service="s" />
        </div>
        <div class="center-cta">
          <RouterLink to="/services" class="btn btn-outline">
            View All Services
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="section process-section">
      <div class="container">
        <div class="section-header">
          <span class="tag">How We Work</span>
          <h2 class="section-title">Our <span>Proven Process</span></h2>
          <p class="section-sub">A streamlined approach from idea to launch — transparent, agile, always on time.</p>
        </div>
        <div class="process-grid">
          <div v-for="step in process" :key="step.num" class="step-card">
            <div class="step-num">{{ step.num }}</div>
            <div class="step-title">{{ step.title }}</div>
            <div class="step-desc">{{ step.desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- PORTFOLIO PREVIEW -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="tag">Our Work</span>
          <h2 class="section-title">Recent <span>Projects</span></h2>
          <p class="section-sub">A glimpse at what we've built for clients across industries.</p>
        </div>
        <div class="portfolio-grid">
          <div v-for="p in portfolioPreview" :key="p.name" class="portfolio-card">
            <div class="portfolio-thumb">
              <div class="portfolio-thumb-bg" :style="{ background: p.bg }"></div>
              <div class="portfolio-emoji">{{ p.emoji }}</div>
              <div class="portfolio-overlay"><span class="portfolio-view-btn">View Project →</span></div>
            </div>
            <div class="portfolio-info">
              <div class="portfolio-tags">
                <span v-for="t in p.tags" :key="t" class="ptag">{{ t }}</span>
              </div>
              <div class="portfolio-name">{{ p.name }}</div>
              <div class="portfolio-desc">{{ p.desc }}</div>
            </div>
          </div>
        </div>
        <div class="center-cta">
          <RouterLink to="/portfolio" class="btn btn-outline">
            See Full Portfolio
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="section testimonials-section">
      <div class="container">
        <div class="section-header">
          <span class="tag">Client Voices</span>
          <h2 class="section-title">What Our <span>Clients Say</span></h2>
          <p class="section-sub">Real results and real relationships — from startups to Fortune 500 companies.</p>
        </div>
        <div class="testimonials-grid">
          <div v-for="t in testimonials" :key="t.author" class="testimonial-card">
            <div class="stars">⭐⭐⭐⭐⭐</div>
            <p class="testimonial-text">"{{ t.text }}"</p>
            <div class="testimonial-author">
              <div class="author-avatar">{{ t.avatar }}</div>
              <div>
                <div class="author-name">{{ t.author }}</div>
                <div class="author-role">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaBanner />
  </div>
</template>

<script setup>
import SectionMarquee from '@/components/SectionMarquee.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import CtaBanner from '@/components/CtaBanner.vue'

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+',  label: 'Expert Engineers' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '7+',   label: 'Years in Business' },
]

const services = [
  {
    icon: '💻', name: 'Software Development',
    desc: 'Custom web apps, mobile solutions and enterprise SaaS platforms built with modern tech stacks.',
    features: ['Web & Mobile Applications', 'SaaS & Enterprise Systems', 'API Design & Integration'],
  },
  {
    icon: '🤖', name: 'AI Solutions & Automation',
    desc: 'Intelligent automation, machine learning models, and AI-driven workflows to supercharge your operations.',
    features: ['Custom LLM Integration', 'Process Automation (RPA)', 'Predictive Analytics'],
  },
  {
    icon: '✍️', name: 'AI Content Generation',
    desc: 'Scalable, brand-aligned content pipelines powered by AI for blogs, social, ads and more.',
    features: ['AI Copywriting Pipelines', 'Image & Video Generation', 'Multi-language Content'],
  },
  {
    icon: '📢', name: 'Digital Marketing',
    desc: 'Data-driven campaigns across SEO, PPC, social media and email that deliver measurable ROI.',
    features: ['SEO & Content Strategy', 'Paid Ads Management', 'Growth Analytics'],
  },
  {
    icon: '🎬', name: 'Post Production',
    desc: 'Professional video editing, color grading, motion graphics and audio production services.',
    features: ['Video Editing & VFX', 'Motion Graphics', 'Podcast Production'],
  },
  {
    icon: '📅', name: 'Meeting Scheduling',
    desc: 'Smart appointment booking and meeting management systems integrated with your existing tools.',
    features: ['Calendar Integration', 'Automated Reminders', 'Team Availability Sync'],
  },
]

const process = [
  { num: '01', title: 'Discovery',     desc: 'We dive deep into your goals, audience, and requirements to map out the perfect solution.' },
  { num: '02', title: 'Strategy',      desc: 'Our team crafts a tailored roadmap with timelines, tech decisions, and resource planning.' },
  { num: '03', title: 'Design',        desc: 'Pixel-perfect UI/UX designs aligned to your brand, reviewed before development begins.' },
  { num: '04', title: 'Build',         desc: 'Agile sprints, daily standups, and milestone reviews keep your project on track.' },
  { num: '05', title: 'Test & QA',     desc: 'Rigorous testing across devices, browsers, and edge cases ensures a flawless launch.' },
  { num: '06', title: 'Launch & Grow', desc: 'Smooth deployment with ongoing support, analytics, and optimization to fuel growth.' },
]

const portfolioPreview = [
  { emoji: '🏦', bg: 'linear-gradient(135deg,#0f2050,#1a3a8f)', tags: ['Fintech','React','AI'], name: 'NexBank Dashboard',    desc: 'Real-time banking analytics with ML-powered fraud detection serving 2M+ users.' },
  { emoji: '🛒', bg: 'linear-gradient(135deg,#1a0a2e,#4a1a6e)', tags: ['E-Commerce','AI'],     name: 'ShopSmart AI Engine', desc: 'AI personalization engine delivering a 40% conversion rate improvement.' },
  { emoji: '🏥', bg: 'linear-gradient(135deg,#002b20,#006644)', tags: ['HealthTech','SaaS'],    name: 'MediCore Platform',   desc: 'Telemedicine SaaS deployed in 500+ clinics across Southeast Asia.' },
]

const testimonials = [
  {
    text: "DevelopersHub didn't just build our platform — they became a strategic partner. Their AI integration cut our processing time by 70% and the team was incredibly proactive throughout.",
    avatar: '👨‍💼', author: 'Marcus Chen', role: 'CTO, NexBank Financial',
  },
  {
    text: "Absolutely top-tier. Our e-commerce conversion rate went up 40% after they revamped our platform. Communication was seamless, delivery was early, and quality was exceptional.",
    avatar: '👩‍💼', author: 'Sarah Al-Rashid', role: 'CEO, ShopSmart Inc.',
  },
  {
    text: "From digital marketing to post-production, they handle everything. Our content output tripled while costs dropped — thanks to their AI content pipeline. Highly recommend.",
    avatar: '👨‍🎨', author: "James O'Brien", role: 'Director, CreativeEdge Media',
  },
]
</script>

<style scoped>
/* HERO */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute; inset: 0; z-index: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79,142,255,0.12), transparent),
    radial-gradient(ellipse 60% 80% at 80% 50%, rgba(124,92,252,0.08), transparent);
}

.hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
}

.orb {
  position: absolute; border-radius: 50%;
  filter: blur(60px); pointer-events: none;
  animation: float 8s ease-in-out infinite;
}
.orb-1 { width: 400px; height: 400px; background: rgba(79,142,255,0.15); top: -100px; right: -100px; }
.orb-2 { width: 300px; height: 300px; background: rgba(124,92,252,0.12); bottom: 0; left: 30%; animation-delay: -4s; }
.orb-3 { width: 200px; height: 200px; background: rgba(0,229,195,0.08); top: 40%; left: -50px; animation-delay: -2s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.hero-content { position: relative; z-index: 1; max-width: 780px; }

.hero-eyebrow { margin-bottom: 24px; }

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(44px, 7vw, 80px);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.03em;
  margin-bottom: 24px;
}

.line { display: block; overflow: hidden; }

.word {
  display: inline-block;
  animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
  color: var(--white);
}

.w1 { animation-delay: 0.1s; }
.w2 { animation-delay: 0.2s; }
.w3 { animation-delay: 0.3s; }
.w4 { animation-delay: 0.4s; }

@keyframes slideUp {
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}

.grad {
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.grad2 {
  background: var(--grad2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: 18px;
  color: var(--text2);
  max-width: 560px;
  margin-bottom: 40px;
  animation: fadeIn 1s 0.5s both;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-btns {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  animation: fadeIn 1s 0.7s both;
}

.hero-stats {
  display: flex;
  gap: 48px;
  margin-top: 64px;
  padding-top: 36px;
  border-top: 1px solid var(--border);
  animation: fadeIn 1s 0.9s both;
  flex-wrap: wrap;
}

.stat-num {
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 800;
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label { font-size: 13px; color: var(--text2); margin-top: 4px; }

/* SERVICES */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
}

/* PROCESS */
.process-section { background: var(--bg2); }

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
  position: relative;
}

.process-grid::before {
  content: '';
  position: absolute;
  top: 40px; left: 0; right: 0; height: 1px;
  background: linear-gradient(to right, transparent, var(--border), transparent);
}

.step-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  text-align: center;
  position: relative;
  transition: var(--transition-fast);
  z-index: 1;
}
.step-card:hover { border-color: rgba(79,142,255,0.3); transform: translateY(-4px); }

.step-num {
  width: 48px; height: 48px;
  border-radius: 50%;
  background: var(--grad);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 20px;
  font-family: var(--font-display);
  font-size: 16px; font-weight: 800;
  color: white;
}

.step-title {
  font-family: var(--font-display);
  font-size: 16px; font-weight: 700;
  color: var(--white); margin-bottom: 8px;
}

.step-desc { font-size: 13px; color: var(--text2); line-height: 1.7; }

/* PORTFOLIO */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
}

.portfolio-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.35s ease;
  cursor: pointer;
}
.portfolio-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 32px 80px rgba(0,0,0,0.5);
  border-color: rgba(79,142,255,0.25);
}

.portfolio-thumb {
  height: 220px;
  position: relative;
  overflow: hidden;
  display: flex; align-items: center; justify-content: center;
}
.portfolio-thumb-bg {
  position: absolute; inset: 0;
  transition: transform 0.5s ease;
}
.portfolio-card:hover .portfolio-thumb-bg { transform: scale(1.05); }
.portfolio-emoji { font-size: 56px; position: relative; z-index: 1; }

.portfolio-overlay {
  position: absolute; inset: 0;
  background: rgba(5,6,10,0.7);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.3s; z-index: 2;
}
.portfolio-card:hover .portfolio-overlay { opacity: 1; }

.portfolio-view-btn {
  background: white; color: var(--bg);
  padding: 10px 24px; border-radius: 100px;
  font-family: var(--font-display); font-size: 13px; font-weight: 700;
}

.portfolio-info { padding: 24px; }
.portfolio-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; }

.ptag {
  font-size: 11px; font-weight: 600;
  padding: 4px 10px; border-radius: 100px;
  font-family: var(--font-display); letter-spacing: 0.05em;
  background: rgba(79,142,255,0.1); color: var(--accent);
  border: 1px solid rgba(79,142,255,0.2);
}

.portfolio-name {
  font-family: var(--font-display); font-size: 18px; font-weight: 700;
  color: var(--white); margin-bottom: 8px;
}
.portfolio-desc { font-size: 13px; color: var(--text2); }

/* TESTIMONIALS */
.testimonials-section { background: var(--bg2); }

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.testimonial-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: var(--transition-fast);
}
.testimonial-card:hover { border-color: rgba(79,142,255,0.25); transform: translateY(-4px); }

.stars { font-size: 16px; margin-bottom: 16px; }

.testimonial-text {
  color: var(--text2); font-size: 15px; line-height: 1.8;
  margin-bottom: 24px; font-style: italic;
}

.testimonial-author { display: flex; align-items: center; gap: 14px; }

.author-avatar {
  width: 44px; height: 44px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; flex-shrink: 0;
  background: var(--surface2); border: 1px solid var(--border);
}

.author-name {
  font-family: var(--font-display); font-size: 14px; font-weight: 700; color: var(--white);
}
.author-role { font-size: 12px; color: var(--text3); }

/* SHARED */
.center-cta { text-align: center; margin-top: 48px; }
</style>
