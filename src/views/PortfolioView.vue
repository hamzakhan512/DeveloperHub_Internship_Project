<template>
  <div class="portfolio-page">
    <section class="page-hero">
      <div class="hero-bg"></div>
      <div class="container">
        <div class="page-hero-content">
          <span class="tag">Our Portfolio</span>
          <h1 class="page-hero-title">Projects We're <span>Proud Of</span></h1>
          <p class="page-hero-sub">Real work. Real impact. Explore what we've built for clients around the world.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Filter -->
        <div class="portfolio-filter">
          <button
            v-for="f in filters" :key="f.key"
            :class="['filter-btn', { active: activeFilter === f.key }]"
            @click="activeFilter = f.key"
          >{{ f.label }}</button>
        </div>

        <!-- Grid -->
        <Transition name="fade" mode="out-in">
          <div class="portfolio-grid" :key="activeFilter">
            <div
              v-for="p in filteredProjects" :key="p.name"
              class="portfolio-card"
            >
              <div class="portfolio-thumb">
                <div class="portfolio-thumb-bg" :style="{ background: p.bg }"></div>
                <div class="portfolio-emoji">{{ p.emoji }}</div>
                <div class="portfolio-overlay">
                  <span class="portfolio-view-btn">View Case Study →</span>
                </div>
              </div>
              <div class="portfolio-info">
                <div class="portfolio-tags">
                  <span v-for="t in p.tags" :key="t" class="ptag">{{ t }}</span>
                </div>
                <div class="portfolio-name">{{ p.name }}</div>
                <div class="portfolio-desc">{{ p.desc }}</div>
                <div class="portfolio-meta">
                  <span class="meta-item">📍 {{ p.client }}</span>
                  <span class="meta-item">📅 {{ p.year }}</span>
                </div>
              </div>
            </div>
          </div>
        </Transition>

        <div v-if="filteredProjects.length === 0" class="empty-state">
          <div class="empty-icon">🔍</div>
          <div class="empty-text">No projects in this category yet. Check back soon!</div>
        </div>
      </div>
    </section>

    <!-- Results Banner -->
    <section class="section results-section">
      <div class="container">
        <div class="section-header">
          <span class="tag">Our Impact</span>
          <h2 class="section-title">Outcomes That <span>Speak Volumes</span></h2>
        </div>
        <div class="results-grid">
          <div v-for="r in results" :key="r.label" class="result-card">
            <div class="result-value">{{ r.value }}</div>
            <div class="result-label">{{ r.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner
      title="Want Results Like These?"
      subtitle="Let's discuss your project and build something that makes an impact."
      primary-text="Start a Project"
      primary-link="/contact"
      secondary-text="Book Discovery Call"
      secondary-link="/booking"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CtaBanner from '@/components/CtaBanner.vue'

const activeFilter = ref('all')

const filters = [
  { key: 'all',       label: 'All Projects' },
  { key: 'web',       label: 'Web Apps' },
  { key: 'ai',        label: 'AI / ML' },
  { key: 'mobile',    label: 'Mobile' },
  { key: 'marketing', label: 'Marketing' },
]

const projects = [
  { emoji: '🏦', bg: 'linear-gradient(135deg,#0f2050,#1a3a8f)', tags: ['Fintech','React','AI'],      cats: ['web','ai'],       name: 'NexBank Dashboard',     desc: 'Real-time banking analytics with ML fraud detection serving 2M+ users.',             client: 'NexBank Financial',  year: '2024' },
  { emoji: '🛒', bg: 'linear-gradient(135deg,#1a0a2e,#4a1a6e)', tags: ['E-Commerce','AI'],            cats: ['web','ai'],       name: 'ShopSmart AI Engine',   desc: 'AI personalization engine delivering a 40% conversion rate improvement.',           client: 'ShopSmart Inc.',     year: '2024' },
  { emoji: '🏥', bg: 'linear-gradient(135deg,#002b20,#006644)', tags: ['HealthTech','SaaS'],          cats: ['web'],            name: 'MediCore Platform',     desc: 'Telemedicine SaaS deployed in 500+ clinics across Southeast Asia.',                client: 'MediCore Ltd.',      year: '2023' },
  { emoji: '🚗', bg: 'linear-gradient(135deg,#2b1a00,#805000)', tags: ['Mobile','Flutter'],           cats: ['mobile'],         name: 'RideFlow App',          desc: 'Ride-hailing mobile app with real-time GPS and driver-matching algorithm.',         client: 'RideFlow GmbH',      year: '2024' },
  { emoji: '📊', bg: 'linear-gradient(135deg,#2b0020,#800060)', tags: ['Marketing','Analytics'],     cats: ['marketing'],      name: 'GrowthOS Suite',        desc: 'All-in-one marketing intelligence platform with automated campaign optimization.',  client: 'GrowthOS',           year: '2023' },
  { emoji: '🤖', bg: 'linear-gradient(135deg,#001a2b,#004080)', tags: ['AI/ML','Python'],            cats: ['ai'],             name: 'DocuMind AI',           desc: 'Document processing pipeline extracting & classifying data with 98% accuracy.',   client: 'LegalPro Corp.',     year: '2024' },
  { emoji: '🏠', bg: 'linear-gradient(135deg,#1a1a2e,#3a3a6e)', tags: ['PropTech','React'],          cats: ['web'],            name: 'EstateIQ Platform',     desc: 'AI-powered property valuation and market intelligence SaaS for realtors.',         client: 'EstateIQ Ltd.',      year: '2023' },
  { emoji: '📱', bg: 'linear-gradient(135deg,#002b2b,#008080)', tags: ['Mobile','Healthcare'],        cats: ['mobile'],         name: 'FitPath App',           desc: 'Personalized fitness coaching app using ML to adapt workouts in real time.',       client: 'FitPath Inc.',       year: '2024' },
  { emoji: '🎯', bg: 'linear-gradient(135deg,#2b1500,#8b4513)', tags: ['Marketing','Automation'],    cats: ['marketing','ai'], name: 'CampaignForge',        desc: 'AI-driven campaign creation and A/B testing platform with 3× ROAS improvement.', client: 'MediaForge LLC',     year: '2024' },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter(p => p.cats.includes(activeFilter.value))
})

const results = [
  { value: '40%',   label: 'Average conversion lift for e-commerce clients' },
  { value: '70%',   label: 'Operational time saved via AI automation' },
  { value: '3×',    label: 'Average ROAS improvement on ad campaigns' },
  { value: '98.7%', label: 'Average system uptime across hosted platforms' },
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

/* Filter */
.portfolio-filter {
  display: flex; gap: 8px; flex-wrap: wrap;
  justify-content: center; margin-bottom: 48px;
}

.filter-btn {
  padding: 8px 20px; border-radius: 100px; font-size: 13px; font-weight: 600;
  font-family: var(--font-display); color: var(--text2);
  background: var(--surface); border: 1px solid var(--border);
  transition: var(--transition-fast); cursor: pointer;
}
.filter-btn.active,
.filter-btn:hover {
  background: rgba(79,142,255,0.12);
  border-color: rgba(79,142,255,0.3); color: var(--accent);
}

/* Portfolio Grid */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
}

.portfolio-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); overflow: hidden;
  transition: all 0.35s ease; cursor: pointer;
}
.portfolio-card:hover {
  transform: translateY(-6px); box-shadow: 0 32px 80px rgba(0,0,0,0.5);
  border-color: rgba(79,142,255,0.25);
}

.portfolio-thumb {
  height: 220px; position: relative; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
}
.portfolio-thumb-bg {
  position: absolute; inset: 0; transition: transform 0.5s ease;
}
.portfolio-card:hover .portfolio-thumb-bg { transform: scale(1.05); }
.portfolio-emoji { font-size: 56px; position: relative; z-index: 1; }

.portfolio-overlay {
  position: absolute; inset: 0; background: rgba(5,6,10,0.7);
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
  font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 100px;
  font-family: var(--font-display); letter-spacing: 0.05em;
  background: rgba(79,142,255,0.1); color: var(--accent); border: 1px solid rgba(79,142,255,0.2);
}
.portfolio-name {
  font-family: var(--font-display); font-size: 18px; font-weight: 700;
  color: var(--white); margin-bottom: 8px;
}
.portfolio-desc { font-size: 13px; color: var(--text2); margin-bottom: 16px; }
.portfolio-meta { display: flex; gap: 16px; }
.meta-item { font-size: 12px; color: var(--text3); }

/* Empty */
.empty-state { text-align: center; padding: 60px; }
.empty-icon { font-size: 48px; margin-bottom: 16px; }
.empty-text { color: var(--text2); font-size: 16px; }

/* Results */
.results-section { background: var(--bg2); }
.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
}
.result-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 32px; text-align: center;
  transition: var(--transition-fast);
}
.result-card:hover { border-color: rgba(79,142,255,0.3); transform: translateY(-4px); }
.result-value {
  font-family: var(--font-display); font-size: 48px; font-weight: 800;
  background: var(--grad);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  margin-bottom: 12px;
}
.result-label { font-size: 14px; color: var(--text2); line-height: 1.5; }

/* Transition */
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
