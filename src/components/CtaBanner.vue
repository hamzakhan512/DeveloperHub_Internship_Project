<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-box">
        <h2 class="cta-title">{{ title }}</h2>
        <p class="cta-sub">{{ subtitle }}</p>
        <div class="cta-btns">
          <RouterLink :to="primaryLink" class="btn btn-white">{{ primaryText }}</RouterLink>
          <RouterLink :to="secondaryLink" class="btn btn-ghost">{{ secondaryText }}</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title:         { type: String, default: 'Ready to Build Something Extraordinary?' },
  subtitle:      { type: String, default: "Let's talk about your project. Get a free discovery call and tailored proposal within 48 hours." },
  primaryText:   { type: String, default: '📅 Schedule Free Call' },
  primaryLink:   { type: String, default: '/booking' },
  secondaryText: { type: String, default: 'Send Us a Message' },
  secondaryLink: { type: String, default: '/contact' },
})
</script>
