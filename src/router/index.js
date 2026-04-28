import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import BlogView from '@/views/BlogView.vue'
import ContactView from '@/views/ContactView.vue'
import BookingView from '@/views/BookingView.vue'

const routes = [
  { path: '/',          name: 'Home',      component: HomeView },
  { path: '/about',     name: 'About',     component: AboutView },
  { path: '/services',  name: 'Services',  component: ServicesView },
  { path: '/portfolio', name: 'Portfolio', component: PortfolioView },
  { path: '/blog',      name: 'Blog',      component: BlogView },
  { path: '/contact',   name: 'Contact',   component: ContactView },
  { path: '/booking',   name: 'Booking',   component: BookingView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
