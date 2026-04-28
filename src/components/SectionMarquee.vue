<template>
  <div class="marquee-section">
    <div class="marquee-track">
      <span v-for="(item, i) in [...items, ...items]" :key="i" class="marquee-item">
        <span class="item-emoji">{{ item.emoji }}</span>
        {{ item.label }}
        <span class="marquee-dot"></span>
      </span>
    </div>
  </div>
</template>

<script setup>
const items = [
  { emoji: '💻', label: 'Web Development' },
  { emoji: '🤖', label: 'AI & Automation' },
  { emoji: '📱', label: 'Mobile Apps' },
  { emoji: '☁️', label: 'SaaS Platforms' },
  { emoji: '🎯', label: 'Digital Marketing' },
  { emoji: '🎬', label: 'Post Production' },
  { emoji: '✍️', label: 'AI Content Generation' },
  { emoji: '📊', label: 'Data Analytics' },
  { emoji: '🔒', label: 'Cybersecurity' },
  { emoji: '🌐', label: 'Cloud Solutions' },
]
</script>

<style scoped>
.marquee-section {
  padding: 28px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  overflow: hidden;
}

.marquee-track {
  display: flex;
  gap: 48px;
  animation: marquee 30s linear infinite;
  white-space: nowrap;
}

.marquee-track:hover { animation-play-state: paused; }

@keyframes marquee {
  to { transform: translateX(-50%); }
}

.marquee-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text3);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-family: var(--font-display);
  flex-shrink: 0;
}

.item-emoji { font-size: 16px; }

.marquee-dot {
  width: 4px; height: 4px;
  border-radius: 50%;
  background: var(--text3);
  display: inline-block;
}
</style>
