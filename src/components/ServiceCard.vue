<template>
  <div class="service-card">
    <div class="service-arrow">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </div>
    <div class="service-icon">{{ service.icon }}</div>
    <div class="service-name">{{ service.name }}</div>
    <div class="service-desc">{{ service.desc }}</div>
    <div class="service-features">
      <span v-for="feat in service.features" :key="feat" class="service-feat">{{ feat }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.service-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 36px;
  position: relative;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
}

.service-card::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 3px;
  background: var(--grad);
  opacity: 0;
  transition: opacity 0.3s;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.5);
  border-color: rgba(79, 142, 255, 0.25);
}

.service-card:hover::after { opacity: 1; }
.service-card:hover .service-arrow {
  background: var(--accent);
  border-color: var(--accent);
  color: white;
  transform: rotate(-45deg);
}
.service-card:hover .service-icon {
  background: rgba(79, 142, 255, 0.12);
  border-color: rgba(79, 142, 255, 0.3);
  transform: scale(1.1) rotate(-5deg);
}

.service-arrow {
  position: absolute;
  top: 32px; right: 32px;
  width: 36px; height: 36px;
  border-radius: 50%;
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  color: var(--text3);
  transition: all 0.3s;
}

.service-icon {
  width: 56px; height: 56px;
  border-radius: 16px;
  margin-bottom: 24px;
  display: flex; align-items: center; justify-content: center;
  font-size: 28px;
  background: var(--surface2);
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.service-name {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--white);
}

.service-desc {
  color: var(--text2);
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 20px;
}

.service-features {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.service-feat {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text2);
}

.service-feat::before {
  content: '';
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--accent3);
  flex-shrink: 0;
}
</style>
