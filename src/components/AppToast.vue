<template>
  <Transition name="toast">
    <div v-if="visible" class="toast">
      <span class="toast-icon">{{ icon }}</span>
      <span class="toast-text">{{ message }}</span>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const message = ref('')
const icon = ref('✅')

function show(msg, ico = '✅') {
  message.value = msg
  icon.value = ico
  visible.value = true
  setTimeout(() => { visible.value = false }, 4000)
}

defineExpose({ show })
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  background: var(--surface);
  border: 1px solid rgba(0, 229, 195, 0.4);
  border-radius: var(--radius);
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: var(--shadow);
  max-width: 360px;
}

.toast-icon { font-size: 20px; }
.toast-text { font-size: 14px; color: var(--text); font-weight: 500; }

.toast-enter-active,
.toast-leave-active { transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
.toast-enter-from,
.toast-leave-to { transform: translateY(80px); opacity: 0; }
</style>
