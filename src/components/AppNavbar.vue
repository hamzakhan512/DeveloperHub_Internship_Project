<template>
  <nav :class="['navbar', { scrolled: isScrolled }]">
    <div class="container nav-inner">
      <!-- Logo -->
      <RouterLink to="/" class="nav-logo">
        <div class="logo-icon">⚡</div>
        <span class="logo-text">Developers<span>Hub</span></span>
      </RouterLink>

      <!-- Desktop Links -->
      <div class="nav-links">
        <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" class="nav-link">
          {{ link.label }}
        </RouterLink>
      </div>

      <!-- CTA Buttons -->
      <div class="nav-cta">
        <RouterLink to="/booking" class="btn btn-outline btn-sm">📅 Schedule Call</RouterLink>
        <RouterLink to="/contact" class="btn btn-primary btn-sm">Get Started</RouterLink>
      </div>

      <!-- Hamburger -->
      <button :class="['hamburger', { open: menuOpen }]" @click="menuOpen = !menuOpen" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="menuOpen" class="mobile-menu">
        <RouterLink
          v-for="link in navLinks" :key="link.to"
          :to="link.to" class="mobile-link"
          @click="menuOpen = false"
        >{{ link.label }}</RouterLink>
        <RouterLink to="/booking" class="mobile-link mobile-link-accent" @click="menuOpen = false">
          📅 Schedule a Meeting
        </RouterLink>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About' },
  { to: '/services',  label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/blog',      label: 'Blog' },
  { to: '/contact',   label: 'Contact' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 30
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.4s ease;
}

.navbar.scrolled {
  background: rgba(5, 6, 10, 0.92);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  padding: 14px 0;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 800;
  text-decoration: none;
}

.logo-icon {
  width: 36px; height: 36px;
  border-radius: 10px;
  background: var(--grad);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}

.logo-text { color: var(--white); }
.logo-text span {
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Desktop nav links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-link {
  padding: 8px 16px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text2);
  transition: var(--transition-fast);
  text-decoration: none;
  white-space: nowrap;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--white);
  background: rgba(255, 255, 255, 0.06);
}

.nav-cta {
  display: flex;
  gap: 10px;
  align-items: center;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  border-radius: 8px;
  background: var(--surface);
  cursor: pointer;
  border: none;
}

.hamburger span {
  display: block;
  width: 22px; height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all 0.3s;
}

.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  position: fixed;
  inset: 0;
  top: 68px;
  background: rgba(5, 6, 10, 0.98);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  gap: 8px;
  z-index: 999;
}

.mobile-link {
  padding: 16px 20px;
  border-radius: var(--radius);
  font-size: 18px;
  font-weight: 600;
  font-family: var(--font-display);
  color: var(--text2);
  transition: var(--transition-fast);
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  display: block;
}

.mobile-link:hover { color: var(--white); background: var(--surface); }
.mobile-link-accent { color: var(--accent); }

/* Mobile menu transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active { transition: opacity 0.25s ease; }
.mobile-menu-enter-from,
.mobile-menu-leave-to { opacity: 0; }

/* Responsive */
@media (max-width: 900px) {
  .nav-links, .nav-cta { display: none; }
  .hamburger { display: flex; }
}
</style>
