<template>
  <div class="blog-page">
    <section class="page-hero">
      <div class="hero-bg"></div>
      <div class="container">
        <div class="page-hero-content">
          <span class="tag">Blog & Insights</span>
          <h1 class="page-hero-title">Ideas That <span>Move the Industry</span></h1>
          <p class="page-hero-sub">Deep dives, tutorials, and thought leadership from our team of experts.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Category filter -->
        <div class="blog-filter">
          <button
            v-for="cat in categories" :key="cat"
            :class="['filter-btn', { active: activeCategory === cat }]"
            @click="activeCategory = cat"
          >{{ cat }}</button>
        </div>

        <!-- Featured Article -->
        <div class="featured-article" v-if="activeCategory === 'All'">
          <div class="featured-thumb">
            <div class="featured-thumb-bg" :style="{ background: posts[0].bg }"></div>
            <div class="featured-emoji">{{ posts[0].emoji }}</div>
          </div>
          <div class="featured-body">
            <div class="blog-meta">
              <span class="blog-cat">{{ posts[0].cat }}</span>
              <span class="blog-date">{{ posts[0].date }}</span>
              <span class="blog-time">{{ posts[0].readTime }}</span>
            </div>
            <h2 class="featured-title">{{ posts[0].title }}</h2>
            <p class="featured-excerpt">{{ posts[0].excerpt }}</p>
            <button class="btn btn-primary" style="font-size:13px;padding:10px 24px">Read Full Article →</button>
          </div>
        </div>

        <!-- Posts Grid -->
        <div class="blog-grid">
          <div
            v-for="post in filteredPosts" :key="post.title"
            class="blog-card"
          >
            <div class="blog-thumb">
              <div class="blog-thumb-bg" :style="{ background: post.bg }"></div>
              <span class="blog-emoji">{{ post.emoji }}</span>
            </div>
            <div class="blog-body">
              <div class="blog-meta">
                <span class="blog-cat">{{ post.cat }}</span>
                <span class="blog-date">{{ post.date }}</span>
              </div>
              <h3 class="blog-title">{{ post.title }}</h3>
              <p class="blog-excerpt">{{ post.excerpt }}</p>
            </div>
            <div class="blog-footer">
              <span class="blog-read">Read Article →</span>
              <span class="blog-time">{{ post.readTime }}</span>
            </div>
          </div>
        </div>

        <!-- Load More -->
        <div style="text-align:center; margin-top:48px">
          <button class="btn btn-outline">Load More Articles</button>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="section newsletter-section">
      <div class="container">
        <div class="newsletter-box">
          <div class="newsletter-content">
            <span class="tag">Newsletter</span>
            <h3 class="newsletter-title">Stay Ahead of the <span>Curve</span></h3>
            <p class="newsletter-sub">Get our best articles, tutorials and industry insights delivered to your inbox every two weeks.</p>
          </div>
          <div class="newsletter-form">
            <input type="email" class="form-input" placeholder="your@email.com" v-model="email" />
            <button class="btn btn-primary" @click="subscribe">Subscribe →</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('All')
const email = ref('')

const categories = ['All', 'AI & ML', 'Development', 'Marketing', 'Mobile', 'Security', 'Creative']

const posts = [
  { emoji:'🤖', bg:'linear-gradient(135deg,#0f2050,#4f8eff)', cat:'AI & ML',      date:'Apr 2, 2025',  readTime:'8 min read',  title:'How We Built a Real-Time Fraud Detection System with 99.7% Accuracy', excerpt:'A deep technical breakdown of the ML pipeline, feature engineering, and model architecture behind a $2B bank\'s fraud detection system.' },
  { emoji:'⚡', bg:'linear-gradient(135deg,#1a0a2e,#7c5cfc)', cat:'Development',   date:'Mar 18, 2025', readTime:'12 min read', title:'Why We Switched Our Entire SaaS Stack to Edge Computing', excerpt:'Latency dropped 80%. Here are the architectural decisions, trade-offs, and lessons from migrating to an edge-first infrastructure.' },
  { emoji:'📈', bg:'linear-gradient(135deg,#002b20,#00e5c3)', cat:'Marketing',     date:'Mar 5, 2025',  readTime:'10 min read', title:'The AI Content Pipeline That Tripled Our Client\'s Output at Half the Cost', excerpt:'How we designed an end-to-end AI content system combining LLMs, brand voice training, and human-in-the-loop review.' },
  { emoji:'📱', bg:'linear-gradient(135deg,#2b0020,#ff4f8e)', cat:'Mobile',        date:'Feb 22, 2025', readTime:'7 min read',  title:'Flutter vs React Native in 2025: Our Honest Assessment After 20 Projects', excerpt:'We\'ve shipped both. Here\'s our unbiased breakdown of performance, DX, ecosystem maturity, and when to choose each.' },
  { emoji:'🔐', bg:'linear-gradient(135deg,#001a2b,#4f8eff)', cat:'Security',      date:'Feb 10, 2025', readTime:'15 min read', title:'Zero-Trust Architecture: A Practical Guide for SaaS Teams in 2025', excerpt:'Step-by-step implementation of zero-trust security principles without slowing down your development velocity.' },
  { emoji:'🎬', bg:'linear-gradient(135deg,#2b1a00,#ff8c00)', cat:'Creative',      date:'Jan 28, 2025', readTime:'9 min read',  title:'AI Video Production in 2025: Tools, Workflows, and What\'s Still Human', excerpt:'From Sora to RunwayML — our post-production team shares which AI tools have genuinely transformed their workflow.' },
  { emoji:'🧠', bg:'linear-gradient(135deg,#1a2b00,#44cc00)', cat:'AI & ML',      date:'Jan 14, 2025', readTime:'11 min read', title:'Fine-Tuning LLMs on Domain-Specific Data: A Step-by-Step Guide', excerpt:'How we fine-tuned GPT-4 for a legal firm and cut their document review time by 60% while maintaining accuracy.' },
  { emoji:'🏗️', bg:'linear-gradient(135deg,#2b1a1a,#cc4444)', cat:'Development',  date:'Jan 3, 2025',  readTime:'14 min read', title:'Microservices vs Monolith: When Each Architecture Actually Makes Sense', excerpt:'After 50+ production systems, here\'s our honest take on when to use microservices and when a monolith is the smarter choice.' },
]

const filteredPosts = computed(() => {
  const start = activeCategory.value === 'All' ? 1 : 0
  if (activeCategory.value === 'All') return posts.slice(1)
  return posts.filter(p => p.cat === activeCategory.value)
})

function subscribe() {
  if (!email.value) return
  alert(`✅ Thanks! You'll get our next issue at ${email.value}`)
  email.value = ''
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

/* Filter */
.blog-filter {
  display: flex; gap: 8px; flex-wrap: wrap;
  justify-content: center; margin-bottom: 48px;
}
.filter-btn {
  padding: 8px 20px; border-radius: 100px; font-size: 13px; font-weight: 600;
  font-family: var(--font-display); color: var(--text2);
  background: var(--surface); border: 1px solid var(--border);
  transition: var(--transition-fast); cursor: pointer;
}
.filter-btn.active, .filter-btn:hover {
  background: rgba(79,142,255,0.12); border-color: rgba(79,142,255,0.3); color: var(--accent);
}

/* Featured */
.featured-article {
  display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-xl); overflow: hidden; margin-bottom: 48px;
}
.featured-thumb {
  height: 320px; position: relative; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
}
.featured-thumb-bg { position: absolute; inset: 0; }
.featured-emoji { font-size: 80px; position: relative; z-index: 1; }
.featured-body { padding: 40px 40px 40px 0; }
.featured-title {
  font-family: var(--font-display); font-size: 26px; font-weight: 800;
  color: var(--white); line-height: 1.3; margin: 12px 0 16px;
}
.featured-excerpt {
  color: var(--text2); font-size: 15px; line-height: 1.7; margin-bottom: 24px;
}

/* Blog Grid */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}
.blog-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); overflow: hidden;
  transition: all 0.35s ease; cursor: pointer;
  display: flex; flex-direction: column;
}
.blog-card:hover {
  transform: translateY(-6px); box-shadow: 0 32px 80px rgba(0,0,0,0.5);
  border-color: rgba(79,142,255,0.25);
}
.blog-thumb {
  height: 180px; background: var(--surface2);
  display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
}
.blog-thumb-bg { position: absolute; inset: 0; }
.blog-emoji { font-size: 48px; position: relative; z-index: 1; }
.blog-body { padding: 24px; flex: 1; }
.blog-meta {
  display: flex; gap: 12px; align-items: center; margin-bottom: 12px;
}
.blog-cat {
  font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--accent); font-family: var(--font-display);
}
.blog-date { font-size: 12px; color: var(--text3); }
.blog-title {
  font-family: var(--font-display); font-size: 17px; font-weight: 700;
  color: var(--white); margin-bottom: 10px; line-height: 1.4;
}
.blog-excerpt { font-size: 13px; color: var(--text2); line-height: 1.7; }
.blog-footer {
  padding: 16px 24px;
  border-top: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between;
}
.blog-read {
  font-size: 13px; font-weight: 600; color: var(--accent);
  font-family: var(--font-display);
}
.blog-time { font-size: 12px; color: var(--text3); }

/* Newsletter */
.newsletter-section { background: var(--bg2); }
.newsletter-box {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-xl); padding: 48px;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 48px; align-items: center;
}
.newsletter-content .tag { margin-bottom: 16px; }
.newsletter-title {
  font-family: var(--font-display); font-size: 28px; font-weight: 800;
  color: var(--white); margin-bottom: 12px; line-height: 1.2;
}
.newsletter-title span {
  background: var(--grad);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.newsletter-sub { color: var(--text2); font-size: 14px; line-height: 1.7; }
.newsletter-form { display: flex; flex-direction: column; gap: 12px; }

@media (max-width: 900px) {
  .featured-article { grid-template-columns: 1fr; }
  .featured-body { padding: 24px; }
  .newsletter-box { grid-template-columns: 1fr; }
}
</style>
