<<<<<<< HEAD
# DevelopersHub Corporation — Vue.js Website

A fully responsive, production-grade corporate website built with **Vue 3**, **Vue Router**, and **Vite**.

---

## 📁 Project Structure

```
developershub/
├── index.html                        # HTML entry point
├── vite.config.js                    # Vite + Vue plugin config
├── package.json                      # Dependencies
├── README.md
└── src/
    ├── main.js                       # App bootstrap
    ├── App.vue                       # Root component (Navbar + RouterView + Footer)
    │
    ├── assets/
    │   └── css/
    │       └── global.css            # Global CSS variables, resets, utilities
    │
    ├── router/
    │   └── index.js                  # Vue Router (all 7 routes)
    │
    ├── components/                   # Reusable components
    │   ├── AppNavbar.vue             # Fixed responsive navigation bar
    │   ├── AppFooter.vue             # Site-wide footer
    │   ├── AppToast.vue              # Toast notification component
    │   ├── ServiceCard.vue           # Reusable service card
    │   ├── SectionMarquee.vue        # Animated scrolling marquee
    │   └── CtaBanner.vue             # Reusable CTA section
    │
    └── views/                        # Page-level components (routes)
        ├── HomeView.vue              # Home page
        ├── AboutView.vue             # About Us page
        ├── ServicesView.vue          # Services page
        ├── PortfolioView.vue         # Portfolio with filter
        ├── BlogView.vue              # Blog & Insights
        ├── ContactView.vue           # Contact form + FAQ
        └── BookingView.vue           # Multi-step meeting scheduler
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# 1. Navigate into the project folder
cd developershub

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open your browser at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy to Vercel, Netlify, or any static host.

---

## 📄 Pages

| Route        | View               | Description                                      |
|--------------|--------------------|--------------------------------------------------|
| `/`          | `HomeView.vue`     | Hero, services preview, process, portfolio, testimonials |
| `/about`     | `AboutView.vue`    | Company story, team, values, stats               |
| `/services`  | `ServicesView.vue` | All 6 services with detailed feature lists       |
| `/portfolio` | `PortfolioView.vue`| Filterable project gallery (All/Web/AI/Mobile/Marketing) |
| `/blog`      | `BlogView.vue`     | Article grid with category filter + newsletter   |
| `/contact`   | `ContactView.vue`  | Validated contact form + FAQ accordion           |
| `/booking`   | `BookingView.vue`  | 3-step meeting scheduler with calendar & time slots |

---

## 🎨 Design System

All design tokens are defined as CSS variables in `src/assets/css/global.css`:

| Variable       | Value           | Usage                    |
|----------------|-----------------|--------------------------|
| `--bg`         | `#05060a`       | Page background          |
| `--surface`    | `#161924`       | Card backgrounds         |
| `--accent`     | `#4f8eff`       | Primary blue             |
| `--accent2`    | `#7c5cfc`       | Purple accent            |
| `--accent3`    | `#00e5c3`       | Teal / success           |
| `--grad`       | Blue → Purple   | Primary gradient         |
| `--font-display`| Syne           | Headings & UI labels     |
| `--font-body`  | DM Sans         | Body text                |

---

## 🛠 Tech Stack

- **Vue 3** — Composition API (`<script setup>`)
- **Vue Router 4** — Client-side navigation with history mode
- **Vite 5** — Lightning-fast dev server and build tool
- **Google Fonts** — Syne (display) + DM Sans (body)
- **Pure CSS** — No UI framework; all styles are scoped per component

---

## ✨ Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Vue Router with smooth page transitions
- ✅ Scoped styles per component
- ✅ Global CSS variables for consistent theming
- ✅ Reactive contact form with client-side validation
- ✅ 3-step booking wizard with interactive calendar
- ✅ Portfolio filter by category
- ✅ Blog category filter + featured article
- ✅ FAQ accordion
- ✅ Animated marquee, hero entrance, scroll reveals
- ✅ Toast notification system
- ✅ SEO-friendly structure (`<title>`, meta tags)

---

## 📦 Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag the dist/ folder into Netlify Drop
```

### Manual (Apache / Nginx)
```bash
npm run build
# Copy dist/ to your web server root
# Configure server to redirect all routes to index.html for SPA routing
```

---

## 📧 Contact

**DevelopersHub Corporation**  
hello@developershub.co  
+1 (555) 234-5678
=======
# DeveloperHub_Internship_Project
>>>>>>> dcf81672a69ef426316c66d9bf574fe7a5e88b24
