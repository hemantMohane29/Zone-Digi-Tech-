# 🧠 Zone Digi Tech - Project Brain

## 📋 Project Overview

**Project Name:** Zone Digi Tech - Creative Digital Studio  
**Type:** Modern Creative Agency Website (SPA)  
**Purpose:** Showcase digital services and portfolio for an Indian creative digital agency  
**Target Audience:** Indian startups and businesses looking for digital solutions  
**Status:** In Development  
**Version:** 0.0.0  

**Tagline:** "Creative Digital Studio" - A team of passionate designers, developers, and strategists helping Indian startups and businesses scale through beautiful, powerful digital products.

---

## 🎯 Brand Identity

### Brand Colors
| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Orange | #e07b00 | Primary CTA, highlights, accents |
| Secondary Orange | #f9b84a | Gradients, hover states |
| Text Dark | #000000 | Light mode text |
| Text Light | #f9fafb | Dark mode text |
| Accent Stone | #64748b | Secondary elements |
| Dark Background | #0f172a | Dark mode main bg |
| Dark Alternate | #0a0a0f | Dark mode alternative |
| Light Background | #f5f3f0 | Light mode main bg (stone-50) |

### Brand Assets
- **Logo:** Zone Digi Tech Logo (PNG files for light and dark modes)
  - Dark Mode: `Zone digi tecch logo white.png` (white logo)
  - Light Mode: `Zone dii tech logo black.png` (black logo)
- **Tagline:** Creative Digital Studio
- **Font Family:** Poppins (sans and display)

---

## 🏗️ Tech Stack

### Core Framework
- **React** ^18.3.1 - UI library
- **React DOM** ^18.3.1 - React rendering
- **Vite** ^5.4.2 - Build tool and dev server
- **Vite React Plugin** ^4.3.1 - React support in Vite

### Styling
- **Tailwind CSS** ^3.4.1 - Utility-first CSS framework
- **PostCSS** ^8.4.35 - CSS processing
- **Autoprefixer** ^10.4.18 - Browser prefix automation

### Icons & UI
- **Lucide React** ^0.344.0 - Icon library (150+ icons)

### Backend/Database
- **Supabase** ^2.57.4 - Backend-as-a-Service (PostgreSQL, Auth, Storage)

### Development Tools
- **ESLint** ^9.9.1 - Code linting
- **ESLint React Plugin** ^7.37.5 - React-specific linting
- **ESLint React Hooks Plugin** ^5.1.0-rc.0 - React Hooks linting
- **ESLint React Refresh Plugin** ^0.4.11 - Fast Refresh support
- **Globals** ^15.9.0 - Global variables for ESLint

---

## 📁 Project Structure

```
ZONE-DIGI-TECH-main/
├── public/                    # Static assets
├── src/
│   ├── App.jsx               # Main app component (routing & state)
│   ├── main.jsx              # Entry point
│   ├── index.css             # Global styles
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar (sticky, responsive)
│   │   ├── Footer.jsx        # Footer (services, links, social)
│   │   ├── Preloader.jsx     # Loading animation on initial load
│   │   └── PageSkeleton.jsx  # Skeleton loading during page transition
│   ├── pages/
│   │   ├── Home.jsx          # Hero, stats, features, services, projects, FAQs
│   │   ├── About.jsx         # Team, values, milestones, mission
│   │   ├── Services.jsx      # Detailed service offerings (10 services)
│   │   ├── Projects.jsx      # Portfolio with filters
│   │   └── Contact.jsx       # Contact form & details
│   ├── context/
│   │   └── ThemeContext.jsx  # Dark/Light theme provider
│   └── hooks/
│       └── UseScrollAnimation.js  # Intersection Observer for scroll animations
├── index.html                # HTML entry point
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind customization
├── postcss.config.js         # PostCSS config
├── eslint.config.js          # ESLint rules
├── package.json              # Dependencies & scripts
├── README.md                 # Project description
└── UI_DESIGN_PROMPT.md       # Design specifications

```

---

## 🧩 Architecture & Key Components

### Application Flow
```
App.jsx (Main Container)
├── ThemeProvider (Context)
│   ├── Navbar (Navigation with theme toggle)
│   ├── Main Content Area
│   │   ├── Home Page
│   │   ├── About Page
│   │   ├── Services Page
│   │   ├── Projects Page
│   │   └── Contact Page
│   └── Footer (Navigation & Info)
└── Preloader (Initial load)
```

### State Management
- **ThemeContext:** Manages dark/light theme globally
  - Stored in localStorage for persistence
  - Detects system preference on first load
  - Toggleable via navbar icon

### Page Navigation
- Single Page Application (SPA) with client-side routing
- No external router library (custom state-based routing)
- Page transitions with:
  - Smooth scroll to top
  - 250ms transition delay with PageSkeleton
  - Meta tags update (title, description)

### Key Hooks
- `useTheme()` - Access/toggle theme
- `useScrollAnimation()` - Observe elements and add animation on scroll
- `useState()` - Local state management
- `useEffect()` - Side effects and lifecycle

---

## 📄 Pages & Content Details

### 1️⃣ **Home Page** (`src/pages/Home.jsx`)
**Key Sections:**
- Hero Section with CTA buttons (Explore Services, View Projects)
- Stats Section (150+ projects, 80+ clients, 5★ rating, 3 years exp)
- Why Choose Us (8 feature cards with icons)
- Services Grid (10 services with icons and descriptions)
- Projects Showcase (4 featured projects)
- FAQs Section (6 common questions)
- Marquee Animation (service tags)
- CTA Section (Start Today - Call to action)

**Features:**
- Mouse tracking effect (if implemented)
- Scroll animations
- Gradient elements
- ~~Social Proof Section~~ (Removed: customer avatars and "Trusted by 80+ clients" reviews)

### 2️⃣ **About Page** (`src/pages/About.jsx`)
**Key Sections:**
- Hero/Mission Statement
- Team Section (4 team members with roles)
- Company Values (6 values: Client First, Results Driven, Creative Excellence, etc.)
- Milestones Timeline (2021-2024 growth)

**Team Members:**
1. Hemant Sharma - Founder & Creative Director (8+ years)
2. Priya Nair - Lead UI/UX Designer
3. Rohan Mehta - Full Stack Developer
4. Sneha Patel - Digital Marketing Lead

**Company Values:**
1. Heart - Client First
2. Target - Results Driven
3. Sparkles - Creative Excellence
4. Users - Collaborative Spirit
5. Globe - Global Mindset
6. Coffee - Always Improving

### 3️⃣ **Services Page** (`src/pages/Services.jsx`)
**10 Complete Service Offerings:**

1. **UI/UX Design** (#e07b00)
   - User Research, Wireframing, Design Systems, Usability Testing
   - Timeline: 1–3 weeks | From ₹15,000

2. **Static Websites** (#0ea5e9)
   - Custom Design, Mobile Responsive, SEO Ready
   - Timeline: 5–10 days | From ₹8,999

3. **Dynamic Websites** (#10b981)
   - CMS, User Auth, Database, Admin Dashboard
   - Timeline: 2–6 weeks | From ₹24,999

4. **E-Commerce Websites** (#f59e0b)
   - Product Catalog, Payment Gateway, Inventory
   - Timeline: 4–8 weeks | From ₹49,999

5. **Social Media Handling** (#8b5cf6)
   - Content Strategy, Scheduling, Community Mgmt
   - Monthly Retainer | From ₹7,999/mo

6. **SEO Optimization** (#ef4444)
   - On-page SEO, Technical SEO, Keyword Research
   - Details not fully loaded

7. **Video Editing** (#06b6d4)
   - Professional editing for ads, reels, YouTube

8. **Photo Editing** (#ec4899)
   - Retouching, Compositing, Brand-ready visuals

9. **Video Shoot** (#84cc16)
   - On-location video production

10. **Photo Shoot** (#f97316)
    - Professional photography services

### 4️⃣ **Projects/Portfolio Page** (`src/pages/Projects.jsx`)
**Features:**
- Category Filters: All, Web Design, E-Commerce, Branding, Mobile App, SEO & Marketing
- 6+ Showcased Projects

**Featured Projects:**

1. **Arya Naturals** - E-Commerce
   - "Organic products brand with full e-commerce platform"
   - Tags: React, Supabase, Stripe, SEO
   - Result: 340% increase in online sales in 3 months
   - Featured: ✓

2. **TechNova Dashboard** - Web Design
   - "B2B SaaS dashboard with real-time analytics"
   - Tags: UI/UX, React, TypeScript, Charts
   - Result: Raised ₹2Cr seed funding post-launch
   - Featured: ✓

3. **Meera Jewels** - Branding
   - "Heritage jewellery brand rebranding"
   - Tags: Branding, E-Commerce, Photography
   - Result: 5x social media growth in 6 months

4. **GreenGrow Farms** - SEO & Marketing
   - "Agri-tech digital marketing overhaul"
   - Tags: SEO, Social Media, Redesign
   - Result: 280% organic traffic growth in 4 months

5. **Zest Fitness App** - Mobile App
   - "Fitness tracking app UI/UX design"
   - Tags: Mobile UI, UX Research, Figma
   - Result: 4.8★ App Store rating at launch

6. **Lakshmee Sarees** - E-Commerce
   - (Partially loaded)

### 5️⃣ **Contact Page** (`src/pages/Contact.jsx`)
**Features:**
- Contact Form (Name, Email, Phone, Service Dropdown, Message)
- Contact Details Cards (4):
  1. Email: hello@zonedigitech.in
  2. Phone: +91 98765 43210
  3. WhatsApp: +91 98765 43210
  4. Location: Bangalore, India
- Service Dropdown (11 options)
- Social Links (Instagram, Twitter, LinkedIn, YouTube)

---

## 🧩 Components Detail

### Navbar (`src/components/Navbar.jsx`)
**Features:**
- Logo (PNG image files: white for dark mode, black for light mode)
- Navigation Links (Home, About, Services, Projects, Contact)
- Responsive Design (hamburger menu for mobile)
- Sticky Behavior:
  - Before 20px scroll: transparent, py-5
  - After 20px scroll: white/dark with blur, py-3, shadow
- Theme Toggle (Moon/Sun icon)
- Active Link Indicator (orange dot)
- Mobile Menu Toggle
- Logo sizing: Fixed container height (h-12 mobile, h-14 tablet, h-16 desktop)

**Responsive Breakpoints:**
- Mobile: <768px (hamburger menu, h-12)
- Tablet: 768px-1024px (h-14, w-220px)
- Desktop: ≥1024px (h-16, w-260px)

### Footer (`src/components/Footer.jsx`)
**Sections:**
1. Brand/Logo
2. Services List
3. Quick Links
4. Social Media Icons
5. Decorative top border (gradient)
6. Background glows (visual effects)

### Preloader (`src/components/Preloader.jsx`)
- Shows on initial page load
- Transitions when loading complete
- Callback: `onLoadingComplete()`

### PageSkeleton (`src/components/PageSkeleton.jsx`)
- Shows during page transitions (250ms delay)
- Placeholder loading state

---

## 🎨 Styling & Customization

### Tailwind Configuration
**Custom Colors:**
- Saffron palette (orange variations: 50-900)
- Gold palette (accent)
- Extended color system

**Custom Animations:**
- `float` - 6s ease-in-out infinite
- `float-delayed` - 6s with 2s delay
- `glow-pulse` - 3s pulsing effect
- `spin-slow` - 20s slow rotation
- `marquee` - 30s infinite scroll
- `gradient-x` - 6s gradient animation
- `loading-bar` - 1.5s progress bar

**Font Family:**
- Sans & Display: Poppins

### Dark Mode
- Implemented with Tailwind `dark:` utilities
- Toggle stored in localStorage
- Detects system preference on first load
- CSS class-based approach (`dark` class on html element)

---

## 🔑 Key Features

### ✨ Interactive Elements
1. **Scroll Animations** - Elements fade/slide in on scroll
2. **Theme Toggle** - Dark/Light mode switching
3. **Page Transitions** - Smooth transitions with skeleton loading
4. **Responsive Design** - Mobile-first approach
5. **Sticky Navigation** - Dynamic navbar behavior on scroll

### 📊 Content Structure
1. **Hero Sections** - Large CTAs and visuals
2. **Stats Cards** - Key metrics with icons
3. **Feature Cards** - Service/benefit showcase
4. **Project Cards** - Portfolio items with filters
5. **Team Cards** - Team member profiles
6. **FAQ Accordion** - Common questions/answers

### 🎯 CTAs (Calls-to-Action)
1. "Get Started" - Primary CTA (orange gradient)
2. "See Our Work" - Secondary CTA (outline)
3. "Explore More" - Service discovery
4. "Contact Us" - Lead generation

---

## 📞 Contact Information (In Content)

| Channel | Details |
|---------|---------|
| Email | hello@zonedigitech.in |
| Phone | +91 98765 43210 |
| WhatsApp | +91 98765 43210 |
| Location | Bangalore, India |
| Hours | Mon–Sat, 9 AM – 7 PM IST |

**Social Media:**
- Instagram
- Twitter
- LinkedIn
- YouTube

---

## 📊 Statistics & Metrics (Displayed)

| Metric | Value |
|--------|-------|
| Projects Delivered | 150+ |
| Happy Clients | 80+ |
| Average Rating | 5★ |
| Years of Experience | 3 |

---

## 🔄 State Management & Context

### ThemeContext
```javascript
- theme: 'light' | 'dark'
- toggleTheme(): void
- localStorage persistence
- System preference detection
```

### App State
```javascript
- currentPage: string (home|about|services|projects|contact)
- loading: boolean (initial preloader)
- pageTransitioning: boolean (page transition skeleton)
```

---

## 🚀 Build & Development Scripts

**Available Commands:**
```bash
npm run dev         # Start development server (Vite)
npm run build       # Build for production
npm run lint        # Run ESLint checks
npm run preview     # Preview production build
```

---

## 📚 Supabase Integration Notes

- **Package:** @supabase/supabase-js ^2.57.4
- **Purpose:** Backend services (auth, database, storage)
- **Status:** Integrated but not fully implemented in current code review
- **Potential Use Cases:**
  - Contact form submission storage
  - Project portfolio management
  - Team member data
  - Client testimonials
  - Image storage for projects

---

## 🎯 Design System & Patterns

### Button Styles
1. **Primary** - Orange gradient, white text
2. **Secondary** - Outline, transparent background
3. **Icon Buttons** - SVG icons from lucide-react
4. **Navigation Buttons** - Dynamic active states

### Card Components
1. **Service Cards** - Icon, title, description, color accent
2. **Project Cards** - Image, title, category, tags, CTA
3. **Team Cards** - Image, name, role, description
4. **Stat Cards** - Icon, value, label
5. **FAQ Cards** - Collapsible Q&A

### Spacing & Layout
- Max container width: 7xl (80rem)
- Grid layouts: responsive 1-4 columns
- Padding: responsive (px-4 to lg:px-8)
- Gaps: consistent spacing system

---

## 🎬 Animation & UX Patterns

### Page Load
1. Preloader animation shows
2. Page content loads
3. Preloader fades out
4. Content visible with scroll animations

### Page Navigation
1. Navigation click
2. Page transitions to true (skeleton shows)
3. Scroll to top (smooth)
4. 250ms delay
5. Page content changes
6. Page transitions to false (content shows)

### Scroll Animations
- Intersection Observer detects elements
- `visible` class added when in view
- CSS animations trigger on class addition
- Threshold: 0.1 (element 10% visible)
- Root margin: -50px (start animation 50px before visible)

---

## 🔍 SEO Implementation

### Meta Management
- Dynamic title per page
- Dynamic meta description per page
- Semantic HTML structure
- Open Graph support (ready for implementation)

### Page Titles
- Home: "Zone Digi Tech — Creative Digital Studio"
- About: "About Us — Zone Digi Tech"
- Services: "Services — Zone Digi Tech"
- Projects: "Projects — Zone Digi Tech"
- Contact: "Contact Us — Zone Digi Tech"

---

## 📱 Responsive Design Breakpoints

| Breakpoint | Screen Size | Behavior |
|-----------|-------------|----------|
| Mobile | <768px | Hamburger menu, single column |
| Tablet | 768px-1024px | 2-column grids, visible nav |
| Desktop | >1024px | Full navigation, multi-column |

**Tailwind Prefixes Used:**
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px

---

## 🔍 Critical Developer Notes (Codebase Audits & Discrepancies)

> [!IMPORTANT]
> A complete audit of the codebase has revealed several discrepancies between the original project requirements/documentation and the actual implementation. Developer awareness of these findings is highly recommended to avoid confusion or regression.

### 1. Branding & Name Inconsistencies
* **Two Brand Names:** The codebase uses a mix of **Zone Digi Tech** and **KiranDigital**.
  * `App.jsx`, `Preloader.jsx`, and metadata titles use `Zone Digi Tech`.
  * `About.jsx` (lines 73, 111, 199), `Projects.jsx` (line 95), and `Footer.jsx` (line 133 copyright) use `KiranDigital`.
  * *Onboarding Tip:* Confirm with the product owner which brand name is preferred for production release.

### 2. Founder & Team Identity Mismatches
* **Founder Name:**
  * Original documentation lists the founder as **Hemant Sharma**.
  * The actual implementation in `src/pages/About.jsx` (line 7) uses **Arjun Sharma** as the Founder & Creative Director.
* **Origin/Location Narrative:**
  * Documentation lists the company location as **Bangalore, India**.
  * `About.jsx` states it was founded in Bangalore but mentions "Starting from a small co-working space in Karond, Bhopal".
  * `Home.jsx` (line 297) states "Founded in Bhopal, Zone Digi Tech...".
  * `Contact.jsx` lists the visit address as **Karond, Bhopal** and points to Bhopal Google Maps.

### 3. Contact & Business Details Discrepancies
* **Contact Info Mismatch:**
  * **Email:** Docs say `hello@zonedigitech.in` | Code (`Contact.jsx` line 18) uses `infozonedigitech@gmail.com`.
  * **Phone/WhatsApp:** Docs say `+91 98765 43210` | Code (`Contact.jsx` line 26) uses `+91 7974942457`.
  * **Business Hours:** 
    * Docs say `Mon–Sat, 9 AM – 7 PM IST`.
    * Code (`Contact.jsx` line 147) displays: Mon–Fri: 9 AM – 7 PM, Sat: 10 AM – 5 PM, Sun: Closed.

### 4. Metrics & Statistics Mismatches
* **Home vs. About Pages:**
  * `src/pages/Home.jsx` displays starter stats: **5+** Projects, **4** Happy Clients, **4.3+ ★** Rating, **1.5 Yrs** Experience.
  * `src/pages/About.jsx` (and this document) displays marketing stats: **150+** Projects, **80+** Happy Clients, **12** Team Members, **3 Yrs** Experience.
  * *Onboarding Tip:* Align these numbers so that visitors receive consistent social proof across all pages.

### 5. Service Titles
* **Shoot vs. Production/Photography:**
  * Services 9 & 10 are described as `Video Shoot` and `Photo Shoot` in general specifications.
  * In the codebase (`Services.jsx`), they are implemented as `Video Production` (From ₹25,000 | 1–3 weeks) and `Photography` (From ₹15,000 | 1–3 day shoot + 1 week editing).

### 6. Asset Filename Spelling Mistakes (Typos)
* The logos loaded in `Navbar.jsx` and stored in `/public` contain spelling errors that must be matched exactly for images to load:
  * Dark mode logo: `/Zone digi tecch logo white.png` (note the double `c` in `tecch`).
  * Light mode logo: `/Zone dii tech logo black.png` (note `dii` instead of `digi`).
  * Preloader logo: `/URL_LOGO.png`.

### 7. Google Fonts Loading Mismatches
* **Fonts Configured:** `index.html` loads `Poppins` via Google Fonts. `tailwind.config.js` configures `sans` and `display` fonts to use `Poppins`.
* **Fonts Rendered:** `src/index.css` overrides the `html` element's font family with `'Inter', system-ui, sans-serif`, and header (`h1-h6` / `.font-display`) tags with `'Syne', 'Inter', sans-serif`.
* **The Catch:** Neither `Inter` nor `Syne` is imported in `index.html`, meaning the browser falls back to the system's default sans-serif font (e.g. Segoe UI, Arial) instead of Poppins or Inter/Syne.
* *Onboarding Tip:* Add `<link>` tags for `Inter` and `Syne` in `index.html` or change `index.css` to use `Poppins`.

---

## 🐛 Development Notes

### Known Implementation Details
1. **Lucide Icons:** Exported with `fill="white"` for filled variants
2. **Gradient Text:** Custom CSS class `.gradient-text` in index.css
3. **Dark Mode:** Uses `dark:` prefix throughout, applied to `<html>` element
4. **Navigation:** No external routing library, custom page state system
5. **Images:** Using Pexels API URLs for portfolio images

### Performance Considerations
1. Vite optimizes dependencies (lucide-react excluded from optimization)
2. Image lazy loading (native browser support)
3. Smooth scroll behavior across browsers
4. Intersection Observer for efficient scroll animations

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid & Flexbox support required
- Intersection Observer API required

---

## ✅ To-Do/Future Enhancements

### Phase 1 (Current)
- [ ] Finalize all page content
- [ ] Complete Services page descriptions
- [ ] Complete Projects portfolio
- [ ] Test responsive design

### Phase 2 (Planned)
- [ ] Supabase contact form integration
- [ ] Form validation & submission
- [ ] Email notifications
- [ ] Project database management

### Phase 3 (Future)
- [ ] Blog functionality
- [ ] Admin dashboard
- [ ] Client testimonials section
- [ ] Newsletter subscription
- [ ] Case studies with in-depth analysis
- [ ] Team member individual pages
- [ ] Service booking system

---

## 🔐 Security & Best Practices

1. **Environment Variables:** Create `.env.local` for Supabase keys (not in repo)
2. **Form Validation:** Implement before Supabase integration
3. **CORS:** Configure Supabase CORS settings
4. **Rate Limiting:** Consider for contact form
5. **Input Sanitization:** Validate all user inputs

---

## 📖 Documentation Files

| File | Purpose |
|------|---------|
| README.md | Project description |
| UI_DESIGN_PROMPT.md | Complete design specifications |
| brain.md | This comprehensive project overview |

---

## 🎯 Project Goals

1. **Showcase Services** - Display all 10 digital services effectively
2. **Build Portfolio** - Highlight successful client projects
3. **Lead Generation** - Convert visitors to clients via contact form
4. **Brand Authority** - Establish KiranDigital as premier Indian digital agency
5. **User Experience** - Deliver smooth, fast, beautiful user experience
6. **Mobile First** - Fully responsive on all devices

---

## 📞 Quick Reference

### Command Quick Links
```bash
# Development
npm run dev

# Production Build
npm run build && npm run preview

# Code Quality
npm run lint

# Check Errors
npm run lint -- --fix  # Auto-fix linting issues
```

### Important Directories
- Components: `src/components/`
- Pages: `src/pages/`
- Styling: `src/index.css` + `tailwind.config.js`
- Context: `src/context/`
- Hooks: `src/hooks/`

### Key Dependencies
- **Lucide React** - Icons (150+ available)
- **Supabase JS** - Backend services
- **Tailwind CSS** - Styling framework
- **React 18** - UI library
- **Vite 5** - Build tool

---

## 🎨 Design System Summary

**Color Palette:**
- Primary: #e07b00 (Orange)
- Secondary: #f9b84a (Light Orange)
- Dark: #0a0a0f
- Light: #f5f3f0

**Typography:**
- Font: Poppins
- Weights: 400, 500, 600, 700, 800

**Spacing:**
- Uses Tailwind default scale (4px unit)
- Key sizes: 2, 4, 6, 8, 12, 16, 20, 24, 32...

**Components:**
- Cards with subtle shadows
- Rounded corners (rounded-lg, rounded-xl)
- Gradient accents on interactive elements
- Smooth transitions (300-500ms)

---

*Last Updated: 2024*  
*This is a living document and should be updated as the project evolves.*
