<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <RouterLink to="/" class="footer-logo">
            <div class="logo-icon">⚡</div>
            <span class="logo-text">Developers<span>Hub</span></span>
          </RouterLink>
          <p class="footer-desc">
            Building digital futures that matter. Your trusted partner for software, AI, and digital growth since 2017.
          </p>
          <div class="footer-socials">
            <a href="#" class="social-btn" title="Twitter">𝕏</a>
            <a href="#" class="social-btn" title="LinkedIn">in</a>
            <a href="#" class="social-btn" title="GitHub">⌂</a>
            <a href="#" class="social-btn" title="YouTube">▶</a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <div class="footer-col-title">Services</div>
          <div class="footer-links">
            <RouterLink to="/services">Software Development</RouterLink>
            <RouterLink to="/services">AI Solutions & Automation</RouterLink>
            <RouterLink to="/services">AI Content Generation</RouterLink>
            <RouterLink to="/services">Digital Marketing</RouterLink>
            <RouterLink to="/services">Post Production</RouterLink>
            <RouterLink to="/booking">Meeting Scheduler</RouterLink>
          </div>
        </div>

        <!-- Company -->
        <div>
          <div class="footer-col-title">Company</div>
          <div class="footer-links">
            <RouterLink to="/about">About Us</RouterLink>
            <RouterLink to="/portfolio">Portfolio</RouterLink>
            <RouterLink to="/blog">Blog & Insights</RouterLink>
            <RouterLink to="/contact">Careers</RouterLink>
            <RouterLink to="/contact">Press Kit</RouterLink>
          </div>
        </div>

        <!-- Contact -->
        <div>
          <div class="footer-col-title">Contact</div>
          <div class="footer-links">
            <a href="mailto:hello@developershub.co">hello@developershub.co</a>
            <a href="tel:+15552345678">+1 (555) 234-5678</a>
            <a href="#">San Francisco, CA</a>
            <RouterLink to="/booking" class="book-link">📅 Book a Call</RouterLink>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-copy">© 2025 DevelopersHub Corporation. All rights reserved.</div>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer is static — no logic needed
</script>

<style scoped>
.footer {
  background: var(--bg2);
  border-top: 1px solid var(--border);
  padding: 64px 0 32px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}

/* Logo */
.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 800;
  text-decoration: none;
  margin-bottom: 16px;
}
.logo-icon {
  width: 36px; height: 36px;
  border-radius: 10px;
  background: var(--grad);
  display: flex; align-items: center; justify-content: center;
  font-size: 18px;
}
.logo-text { color: var(--white); }
.logo-text span {
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-desc {
  font-size: 14px;
  color: var(--text2);
  line-height: 1.7;
  margin-bottom: 24px;
  max-width: 260px;
}

.footer-socials {
  display: flex;
  gap: 10px;
}

.social-btn {
  width: 36px; height: 36px;
  border-radius: 10px;
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-size: 15px;
  transition: var(--transition-fast);
  color: var(--text2);
  text-decoration: none;
  cursor: pointer;
}

.social-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(79, 142, 255, 0.08);
}

.footer-col-title {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 20px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a,
.footer-links .router-link-active {
  font-size: 14px;
  color: var(--text2);
  transition: color 0.2s;
  text-decoration: none;
}

.footer-links a:hover { color: var(--accent); }
.book-link { color: var(--accent) !important; }

.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-copy { font-size: 13px; color: var(--text3); }

.footer-legal {
  display: flex;
  gap: 24px;
}

.footer-legal a {
  font-size: 13px;
  color: var(--text3);
  transition: color 0.2s;
  text-decoration: none;
}

.footer-legal a:hover { color: var(--text2); }

@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 600px) {
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
