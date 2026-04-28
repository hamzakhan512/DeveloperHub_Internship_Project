<template>
  <div class="services-page">
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="hero-bg"></div>
      <div class="container">
        <div class="page-hero-content">
          <span class="tag">Our Services</span>
          <h1 class="page-hero-title">Everything You Need to <span>Dominate Digital</span></h1>
          <p class="page-hero-sub">End-to-end digital services from strategy through delivery — all under one roof.</p>
        </div>
      </div>
    </section>

    <!-- ALL SERVICES -->
    <section class="section">
      <div class="container">
        <div class="services-grid">
          <div v-for="s in services" :key="s.name" class="service-full-card">
            <div class="sfc-top">
              <div class="sfc-icon">{{ s.icon }}</div>
              <div class="sfc-badge">{{ s.badge }}</div>
            </div>
            <h3 class="sfc-name">{{ s.name }}</h3>
            <p class="sfc-desc">{{ s.desc }}</p>
            <ul class="sfc-features">
              <li v-for="f in s.features" :key="f">{{ f }}</li>
            </ul>
            <div class="sfc-footer">
              <RouterLink to="/contact" class="btn btn-outline" style="font-size:13px;padding:10px 20px">Get a Quote</RouterLink>
              <RouterLink to="/booking" class="btn btn-primary" style="font-size:13px;padding:10px 20px">Book a Call</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY US -->
    <section class="section why-section">
      <div class="container">
        <div class="section-header">
          <span class="tag">Why DevelopersHub</span>
          <h2 class="section-title">The <span>Advantages</span> We Bring</h2>
          <p class="section-sub">Why hundreds of companies choose us over traditional agencies.</p>
        </div>
        <div class="why-grid">
          <div v-for="w in whyUs" :key="w.title" class="why-card card">
            <div class="why-icon">{{ w.icon }}</div>
            <h4 class="why-title">{{ w.title }}</h4>
            <p class="why-desc">{{ w.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaBanner
      title="Ready to Get Started?"
      subtitle="Tell us about your project and we'll put together a tailored proposal within 48 hours."
    />
  </div>
</template>

<script setup>
import ServiceCard from '@/components/ServiceCard.vue'
import CtaBanner from '@/components/CtaBanner.vue'

const services = [
  {
    icon: '💻', badge: 'Core Service', name: 'Software Development',
    desc: 'Custom applications built with the right technology for your needs — from lightweight MVPs to complex enterprise systems that scale to millions of users.',
    features: ['React, Vue, Angular frontends', 'Node.js, Python, Go backends', 'iOS & Android mobile apps', 'SaaS platform architecture', 'REST & GraphQL APIs', 'Cloud-native microservices'],
  },
  {
    icon: '🤖', badge: 'High Demand', name: 'AI Solutions & Automation',
    desc: 'We build intelligent systems that learn, adapt, and automate — freeing your team to focus on high-value work while AI handles the repetitive.',
    features: ['Custom GPT & LLM integration', 'Computer Vision systems', 'RPA & workflow automation', 'Predictive analytics models', 'Conversational AI & chatbots', 'AI model training & fine-tuning'],
  },
  {
    icon: '✍️', badge: 'New Service', name: 'AI Content Generation',
    desc: 'Scale your content marketing with AI-powered pipelines that maintain brand voice, drive organic traffic, and dramatically reduce production costs.',
    features: ['Blog & SEO content at scale', 'AI image & video creation', 'Social media content systems', 'Multilingual content pipelines', 'Brand voice model training', 'Human-in-the-loop review'],
  },
  {
    icon: '📢', badge: 'Core Service', name: 'Digital Marketing',
    desc: 'Strategic, data-driven marketing that fills your pipeline and turns clicks into loyal customers. We focus on ROI, not vanity metrics.',
    features: ['Search Engine Optimization (SEO)', 'Google & Meta Ads management', 'Email & marketing automation', 'Social media management', 'Conversion rate optimization', 'Analytics & attribution'],
  },
  {
    icon: '🎬', badge: 'Creative', name: 'Post Production',
    desc: 'Professional-grade video and audio post-production for brands, agencies, and creators. From raw footage to broadcast-ready content.',
    features: ['Video editing & color grading', 'Motion graphics & animation', 'Audio mixing & sound design', 'Podcast production & editing', '2D/3D visual effects (VFX)', 'Subtitle & caption creation'],
  },
  {
    icon: '📅', badge: 'Core Service', name: 'Meeting Scheduler Systems',
    desc: 'Custom appointment booking and scheduling solutions integrated seamlessly into your website, CRM, and communication tools.',
    features: ['Calendar API integration (Google, Outlook)', 'Multi-timezone smart scheduling', 'Automated email & SMS reminders', 'Payment-gated booking flows', 'CRM sync & lead capture', 'Analytics & no-show reduction'],
  },
]

const whyUs = [
  { icon: '⚡', title: 'Fast Delivery', desc: 'Agile sprints with weekly releases mean you see progress constantly, not just at the end.' },
  { icon: '🏗️', title: 'Scalable Architecture', desc: 'We build with your 10x future in mind — infrastructure that grows without painful rewrites.' },
  { icon: '🔍', title: 'Full Transparency', desc: 'Live dashboards, weekly reports, and always-on Slack access so you\'re never in the dark.' },
  { icon: '🎯', title: 'Outcome-Focused', desc: 'We care about your business metrics, not just delivering code. Your KPIs are our KPIs.' },
  { icon: '🤝', title: 'Dedicated Team', desc: 'You get the same team throughout — no handoffs, no strangers picking up mid-project.' },
  { icon: '🔒', title: 'Security-First', desc: 'SOC2-aware practices, signed NDAs, and enterprise-grade security baked into every build.' },
]
</script>

<style scoped>
.page-hero {
  padding: 140px 0 80px;
  background: var(--bg2);
  position: relative; overflow: hidden;
}

.hero-bg {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 70% 60% at 50% 0%, rgba(79,142,255,0.1), transparent);
}

.page-hero-content {
  position: relative; max-width: 700px;
}

.page-hero-content .tag { margin-bottom: 20px; }

.page-hero-title {
  font-family: var(--font-display);
  font-size: clamp(36px, 6vw, 60px);
  font-weight: 800; line-height: 1.1;
  letter-spacing: -0.03em; color: var(--white); margin-bottom: 20px;
}
.page-hero-title span {
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.page-hero-sub { font-size: 18px; color: var(--text2); }

/* Service Full Card */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 28px;
}

.service-full-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 36px;
  display: flex; flex-direction: column; gap: 0;
  transition: var(--transition-fast);
  position: relative; overflow: hidden;
}
.service-full-card::after {
  content: ''; position: absolute;
  bottom: 0; left: 0; right: 0; height: 3px;
  background: var(--grad); opacity: 0; transition: opacity 0.3s;
}
.service-full-card:hover { border-color: rgba(79,142,255,0.25); transform: translateY(-4px); box-shadow: var(--shadow); }
.service-full-card:hover::after { opacity: 1; }

.sfc-top {
  display: flex; align-items: flex-start;
  justify-content: space-between; margin-bottom: 20px;
}

.sfc-icon {
  width: 56px; height: 56px; border-radius: 16px;
  background: var(--surface2); border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-size: 28px;
}

.sfc-badge {
  font-size: 11px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--accent3); font-family: var(--font-display);
  background: rgba(0,229,195,0.1); border: 1px solid rgba(0,229,195,0.2);
  padding: 4px 10px; border-radius: 100px;
}

.sfc-name {
  font-family: var(--font-display); font-size: 22px; font-weight: 700;
  color: var(--white); margin-bottom: 12px;
}

.sfc-desc {
  color: var(--text2); font-size: 14px; line-height: 1.7;
  margin-bottom: 20px;
}

.sfc-features {
  list-style: none; display: flex; flex-direction: column; gap: 8px;
  margin-bottom: 28px; flex: 1;
}

.sfc-features li {
  font-size: 13px; color: var(--text2);
  display: flex; align-items: center; gap: 8px;
}

.sfc-features li::before {
  content: '✓'; color: var(--accent3); font-weight: 700;
  font-size: 12px; flex-shrink: 0;
}

.sfc-footer {
  display: flex; gap: 12px; flex-wrap: wrap;
}

/* Why Us */
.why-section { background: var(--bg2); }

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.why-card { }

.why-icon { font-size: 32px; margin-bottom: 16px; }

.why-title {
  font-family: var(--font-display); font-size: 16px; font-weight: 700;
  color: var(--white); margin-bottom: 8px;
}

.why-desc { font-size: 14px; color: var(--text2); line-height: 1.7; }
</style>
