# Implementation Plan

# Task List: Enhanced Digital Portfolio Website

## Overview
42 implementation tasks organized in 5 phases for building Neethish S's enhanced portfolio.
**Total Tasks**: 42 | **Timeline**: 4 weeks | **Effort**: 130–150 hours

## Task Dependency Graph

```json
{
  "waves": [
    {
      "wave": 1,
      "tasks": ["1-1", "1-5", "1-7"]
    },
    {
      "wave": 2,
      "tasks": ["1-2", "1-3", "1-4", "1-6"]
    },
    {
      "wave": 3,
      "tasks": ["2-1", "2-2", "3-1", "3-4", "3-7", "3-10", "3-12", "3-14", "4-1", "4-8", "4-10"]
    },
    {
      "wave": 4,
      "tasks": ["2-3", "2-4", "2-5", "2-6", "2-7", "3-2", "3-3", "3-5", "3-8", "3-11", "3-15"]
    },
    {
      "wave": 5,
      "tasks": ["2-8", "2-9", "2-10", "3-6", "3-9", "3-13", "3-16", "4-2", "4-3", "4-4", "4-5", "4-6", "4-7", "4-9", "4-11"]
    },
    {
      "wave": 6,
      "tasks": ["4-12", "5-1", "5-2"]
    },
    {
      "wave": 7,
      "tasks": ["5-3", "5-4", "5-5"]
    },
    {
      "wave": 8,
      "tasks": ["5-6", "5-7"]
    },
    {
      "wave": 9,
      "tasks": ["5-8"]
    }
  ]
}
```

## Tasks

## Phase 1: Foundation Setup (7 tasks)

### 1-1 Initialize React 18 + TypeScript + Tailwind CSS Project
- **Status**: not_started
- **Depends**: []
- **Acceptance Criteria**:
  - React 18 initialized with TypeScript and Tailwind CSS
  - Vite build tool running on localhost:5173
  - Custom Tailwind theme colors defined
  - npm run build completes without errors
  - npm run dev starts successfully
  - tsc --noEmit passes with no errors

### 1-2 Set Up Theme System (Light/Dark Mode)
- **Status**: not_started
- **Depends**: [1-1]
- **Acceptance Criteria**:
  - ThemeContext created with React Context API
  - Theme preference persisted to localStorage
  - System preference detected on first load
  - ThemeToggle component works correctly
  - CSS variables update dynamically
  - Theme changes apply without page reload

### 1-3 Create Base Component Library (GlassCard, Button, SectionHeading)
- **Status**: not_started
- **Depends**: [1-1, 1-2]
- **Acceptance Criteria**:
  - GlassCard component created with glassmorphism styling
  - Button component with primary/secondary/ghost variants
  - SectionHeading component with responsive sizes
  - All components export TypeScript prop interfaces
  - Components work in both light and dark themes
  - Glassmorphism styling: bg-white/10 dark:bg-black/10, backdrop-blur-md

### 1-4 Implement Design System Colors and Typography
- **Status**: not_started
- **Depends**: [1-1, 1-2]
- **Acceptance Criteria**:
  - Tailwind config includes all design colors
  - Font sizes scale: 16px mobile → 18px desktop
  - Font weights configured: 300, 400, 600, 700
  - Spacing system defined with 8px base unit
  - Shadow and blur effects defined
  - Light theme: bg-white, text-gray-900
  - Dark theme: bg-slate-900, text-slate-100
  - Color contrast 4.5:1 minimum for WCAG AA

### 1-5 Set Up Responsive Grid Layout and Breakpoints
- **Status**: not_started
- **Depends**: [1-1]
- **Acceptance Criteria**:
  - Breakpoints configured: sm (640px), md (768px), lg (1024px), xl (1440px), 2xl (2560px)
  - Container component created with max-widths
  - Grid system established
  - Mobile-first approach applied
  - No horizontal scrolling at any breakpoint
  - Touch targets 44x44px minimum

### 1-6 Create Layout Components (Header, Footer, Main)
- **Status**: not_started
- **Depends**: [1-1, 1-3]
- **Acceptance Criteria**:
  - Header component with Navigation and ThemeToggle
  - Footer component with copyright
  - Main layout wrapper with semantic HTML
  - Sticky header visible during scroll
  - Responsive for mobile/desktop
  - Uses <header>, <main>, <footer> tags

### 1-7 Set Up Project Configuration Files
- **Status**: not_started
- **Depends**: [1-1]
- **Acceptance Criteria**:
  - ESLint configured for React/TypeScript
  - Prettier configured (printWidth: 100, single quotes)
  - TypeScript strict mode enabled
  - .gitignore created
  - npm scripts configured: dev, build, lint, format, type-check
  - npm run lint passes with zero errors
  - npm run type-check passes

## Phase 2: Hero & Navigation (10 tasks)

### 2-1 Build Navigation Component with Desktop and Mobile Layouts
- **Status**: not_started
- **Depends**: [1-3, 1-6]
- **Acceptance Criteria**:
  - Desktop nav displays 7 links: Home, About, Skills, Projects, Experience, Achievements, Contact
  - Mobile hamburger menu for 320px–768px
  - Navigation drawer full-viewport, slide-in animation
  - Drawer closes on link click
  - Active link highlighted by scroll position
  - Smooth scroll-to-section behavior
  - Keyboard navigation supported

### 2-2 Implement Hero Section with Animations
- **Status**: not_started
- **Depends**: [1-3, 1-6]
- **Acceptance Criteria**:
  - Hero section 80–100% viewport height
  - Currently Building banner: "🔨 Currently building: PR Summarizer GitHub App — event-driven LLM-powered PR analysis via GitHub Webhooks"
  - Title: "Backend & AI Engineer — RAG Pipelines · FastAPI · LLM Systems"
  - Subtitle displays required text
  - Text animates in 800–1200ms staggered
  - Background animation with 15–20 floating particles
  - Uses semantic HTML with h1 tag
  - Readable at 320px–2560px viewports

### 2-3 Create Currently Building Banner Component
- **Status**: not_started
- **Depends**: [1-3, 2-2]
- **Acceptance Criteria**:
  - Banner displays as GlassCard with hammer emoji
  - Text: "🔨 Currently building: PR Summarizer GitHub App — event-driven LLM-powered PR analysis via GitHub Webhooks"
  - Animates in: scale 0.9 → 1, fade, 600ms, 200ms delay
  - Text wraps properly on mobile
  - Glassmorphism styling applied
  - Responsive padding: px-4 py-2 mobile, md:px-6 md:py-3

### 2-4 Build Stat Bar Component with Key Metrics
- **Status**: not_started
- **Depends**: [1-3, 2-2]
- **Acceptance Criteria**:
  - Stat bar displays 5 metrics below CTA buttons
  - Metrics: "150–300ms TTFT achieved · 2 Production RAG systems · 200+ LeetCode problems · 1 Published paper (IJCT) · 5 LLMs benchmarked"
  - Desktop: horizontal with · dividers
  - Mobile: vertical stack
  - Each stat animates with 80ms stagger
  - Font: text-sm mobile, md:text-base desktop, semibold

### 2-5 Implement CTA Buttons (View Projects, Download Resume)
- **Status**: not_started
- **Depends**: [1-3, 2-2]
- **Acceptance Criteria**:
  - Two buttons: "View Projects" and "Download Resume"
  - View Projects scrolls to projects section
  - Download Resume links to /public/resume.pdf
  - Side-by-side desktop, stacked mobile
  - Hover effects: scale (1.02–1.05), glow, shadow (200ms)
  - 44x44px minimum touch target
  - Semantic HTML with proper ARIA labels

### 2-6 Add Background Animation with Particles
- **Status**: not_started
- **Depends**: [1-3, 2-2]
- **Acceptance Criteria**:
  - 15–20 floating particles in background
  - Smooth movement with random direction/speed
  - 60 FPS, no performance issues
  - 3–8 second cycle per particle
  - Opacity 0.3–0.8 with fade at edges
  - Theme-aware coloring
  - useReduceMotion hook for accessibility
  - Respects prefers-reduced-motion

### 2-7 Create Scroll Indicator Animation
- **Status**: not_started
- **Depends**: [1-3, 2-2]
- **Acceptance Criteria**:
  - Scroll indicator at bottom of hero
  - Downward animation with fade (2–3 second loop)
  - Hides when scrolling past hero
  - Position: absolute bottom-20 left-1/2 -translate-x-1/2
  - Uses Intersection Observer
  - Lucide ChevronDown icon
  - Works at 320px–2560px

### 2-8 Implement Mobile-Responsive Hero Layout
- **Status**: not_started
- **Depends**: [2-2, 2-4, 2-5]
- **Acceptance Criteria**:
  - Adapts 320px → 2560px
  - Mobile: single-column, centered, stacked buttons
  - Tablet: larger text, potentially stacked buttons
  - Desktop: optimal spacing
  - Font sizes: 1.875rem → 2.25rem → 3rem
  - Padding: mobile px-4 → tablet px-8 → desktop px-12
  - All text readable on small screens
  - Verified at: 320px, 640px, 768px, 1024px, 1440px, 2560px

### 2-9 Add Navigation Active State Tracking
- **Status**: not_started
- **Depends**: [2-1]
- **Acceptance Criteria**:
  - Links highlight when section in viewport
  - Active link has distinct styling
  - Updates smoothly while scrolling
  - Intersection Observer with threshold 0.5, rootMargin -100px
  - Tracks: hero, about, skills, projects, experience, achievements, contact
  - useActiveSection() custom hook created

### 2-10 Create Theme Toggle in Navigation
- **Status**: not_started
- **Depends**: [1-2, 2-1]
- **Acceptance Criteria**:
  - Toggle button in nav (top-right desktop, in menu mobile)
  - Sun icon for light, moon icon for dark
  - Toggles theme and persists to localStorage
  - Theme change instant, no reload
  - Keyboard accessible: Tab, Enter/Space
  - Lucide icons used
  - Hover: bg-primary/10, transition 200ms
  - aria-label and proper tabIndex

## Phase 3: Content Sections (16 tasks)

### 3-1 Build About Section with Professional Narrative
- **Status**: not_started
- **Depends**: [1-3]
- **Acceptance Criteria**:
  - Heading: "About Me" using SectionHeading
  - Narrative: final-year CSE, backend/AI, published research, production systems
  - Details: Sri Shakthi, FastAPI, PostgreSQL, IJCT, sub-300ms, LLMs
  - Font: 16px mobile → 18px desktop
  - Animates on scroll: fade-up (300-500ms)
  - Prose formatting: line-height 1.6, max-width 800px
  - 2-3 paragraphs, text-secondary color

### 3-2 Create Quick Facts Grid (4 Items)
- **Status**: not_started
- **Depends**: [3-1, 1-3]
- **Acceptance Criteria**:
  - 4 facts displayed:
    - "🎓 B.E. CSE — Sri Shakthi Institute, graduating May 2027"
    - "📍 Coimbatore, Tamil Nadu, India"
    - "💼 Open to remote / relocate (funded)"
    - "📄 Published: IJCT Journal — AgentCode Inspector"
  - Grid: 2x2 desktop, responsive tablet/mobile
  - GlassCard components
  - Animate in sequentially (100ms delays)
  - Grid: grid-cols-2 gap-6 desktop
  - p-4 mobile, md:p-6 desktop

### 3-3 Add Profile Links (Email, LinkedIn, GitHub, LeetCode)
- **Status**: not_started
- **Depends**: [3-1]
- **Acceptance Criteria**:
  - Icon buttons for: Email, LinkedIn, GitHub, LeetCode
  - Positioned below facts grid, centered
  - Email: mailto:neethish2005@gmail.com
  - LinkedIn: linkedin.com/in/neethishs (new tab)
  - GitHub: github.com/NeethishS (new tab)
  - LeetCode: leetcode.com/u/Neethish05 (new tab)
  - Hover: scale-110, color change (200ms)
  - Keyboard accessible with aria-labels

### 3-4 Build Technical Stack Section with 5 Categories
- **Status**: not_started
- **Depends**: [1-3]
- **Acceptance Criteria**:
  - Heading: "Technical Stack"
  - Exactly 5 categories: Languages, Backend, Databases, AI/ML, Tools & DevOps, Core Concepts
  - Languages: Python, SQL, JavaScript, TypeScript
  - Backend: FastAPI, Flask, Node.js, REST APIs, WebSockets, async/await, JWT, OAuth2
  - Databases: PostgreSQL, Supabase, pgvector, MongoDB, MySQL
  - AI/ML: RAG Pipelines, LLM Inference, Prompt Eng., Embeddings, Semantic Search, Groq, Claude, Generative AI
  - Tools: Git, GitHub, Docker, Vercel, Postman
  - Core: Data Structures, OOP, DBMS, OS
  - NO percentage bars, NO HTML%, CSS%, JS%
  - EXCLUDE: Gemini, ChatGPT, MS-Excel
  - Grid: multi-column desktop, 2-column tablet, 1-column mobile
  - Semantic HTML

### 3-5 Create Skill Tags with Hover Tooltips
- **Status**: not_started
- **Depends**: [3-4]
- **Acceptance Criteria**:
  - Skills display as glassmorphism tags
  - Hover shows tooltip with context
  - Hover effects: scale-105, glow, shadow
  - Tooltip styled consistently
  - Fade in/out (100ms)
  - Styling: px-3 py-2, text-sm, rounded-lg
  - Tooltip content: skill, projects, experience
  - Mobile: focus/tap support, screen reader

### 3-6 Implement Skill Search/Filter Functionality
- **Status**: not_started
- **Depends**: [3-4, 1-3]
- **Acceptance Criteria**:
  - Search box at top of skills section
  - Real-time filtering as typing
  - Case-insensitive, partial matching ("fast" → "FastAPI")
  - Result count: "5 skills found" or "No skills found"
  - Clear button resets filter
  - Debounce: 200ms
  - Filtered items fade in/out
  - Placeholder: "Search skills..."

### 3-7 Build Projects Showcase with 3 Featured Project Cards
- **Status**: not_started
- **Depends**: [1-3]
- **Acceptance Criteria**:
  - Exactly 3 projects:
    - Project 1: AI Code Review Bot (🏆 Published badge)
    - Project 2: EchoSession
    - Project 3: PR Summarizer (🔨 In Development badge)
  - Each shows: name, description, technologies, metrics, status, buttons
  - Grid: 3 columns desktop, 2 tablet, 1 mobile
  - GlassCard with p-6, hover effects
  - Badges top-right: "🏆 Published" or "🔨 In Development"
  - Descriptions: 150-200 words

### 3-8 Enhance Project Cards with Badges and Performance Metrics
- **Status**: not_started
- **Depends**: [3-7]
- **Acceptance Criteria**:
  - Status badge positioned top-right
  - Badge: absolute top-4 right-4, flex items-center gap-2, px-3 py-1, rounded-full
  - Performance metrics below description
  - Metrics: · separated, single-line
  - Font: text-xs mobile, text-sm desktop, text-secondary
  - Metrics position: between description and buttons

### 3-9 Create Project Filtering by Technology (Optional)
- **Status**: not_started
- **Depends**: [3-7]
- **Acceptance Criteria**:
  - Filter buttons above projects
  - Click filter shows matching projects only
  - Multiple filters: AND logic
  - "All" button clears filters
  - Filtered cards animate in/out (200-300ms)
  - State managed in component
  - Responsive button group: gap-2, flex wrap
  - Active button styling distinct

### 3-10 Create Experience & Education Timeline Section
- **Status**: not_started
- **Depends**: [1-3]
- **Acceptance Criteria**:
  - Heading: "Experience & Education"
  - 2 experience + 1 education entry
  - Experience 1: Prompt Eng Intern, Excelerate, Feb 2026–Mar 2026, Remote
  - Experience 2: Frontend Dev Intern, IBM x AICTE x Edunet, 2025
  - Education: B.E. CSE, Sri Shakthi, Sep 2023–May 2027
  - Desktop: alternating left/right with center line
  - Mobile: single-column, left-aligned
  - Items: date, title, org, description, achievements
  - NO CGPA displayed
  - Connector line and circular indicators

### 3-11 Implement Timeline Animations and Interactions
- **Status**: not_started
- **Depends**: [3-10]
- **Acceptance Criteria**:
  - Fade-in + slide-up on scroll
  - Duration: 500–600ms per item
  - Stagger: 100–150ms between items
  - Hover: highlight/scale effects
  - useReduceMotion hook
  - Respects prefers-reduced-motion
  - Connector line smooth transitions
  - Line visible and styled correctly

### 3-12 Build Achievements Section with Publications and Certifications
- **Status**: not_started
- **Depends**: [1-3]
- **Acceptance Criteria**:
  - Heading: "Research Publications & Achievements"
  - Publication: AgentCode Inspector, IJCT Journal, 2026
  - Description: semantic search, LLM inference, code quality
  - Cert 1: NVIDIA LLM (Feb 2026)
  - Cert 2: IIT Madras Python Elite (Mar 2025)
  - Competitive: 200+ LeetCode
  - Grid: 3 columns desktop, 2 tablet, 1 mobile
  - Card: icon, title, issuer, year, description
  - GlassCard components

### 3-13 Implement Achievement Type Filtering
- **Status**: not_started
- **Depends**: [3-12]
- **Acceptance Criteria**:
  - Filter buttons: Publications, Certifications, Competitive
  - Click shows matching type only
  - All visible by default
  - Cards animate in/out (200-300ms)
  - Active button styling distinct
  - Publications highlighted as primary
  - OR logic for multiple filters
  - State managed in component

### 3-14 Create Contact Section
- **Status**: not_started
- **Depends**: [1-3]
- **Acceptance Criteria**:
  - Heading: "Let's Build Something"
  - Subtext: "I'm open to AI/backend engineering roles..."
  - Contact links:
    - "📧 neethish2005@gmail.com" (mailto)
    - "💼 linkedin.com/in/neethishs" (external)
    - "🐙 github.com/NeethishS" (external)
    - "💻 leetcode.com/u/Neethish05" (external)
  - CTA: "Available immediately · Open to remote worldwide · Graduating May 2027"
  - Links styled as icon buttons
  - All functional and up-to-date
  - NO contact form (direct channels only)

### 3-15 Add Contact Section Link Functionality
- **Status**: not_started
- **Depends**: [3-14]
- **Acceptance Criteria**:
  - Email opens mail client
  - External links open new tab (target="_blank", rel="noopener noreferrer")
  - All links tested and functional
  - Links have titles and aria-labels
  - Icons with text, proper spacing
  - Hover: scale, color change (200ms)
  - Touch target: 44x44px minimum
  - Keyboard navigation works

### 3-16 Design Contact Section with Theme Consistency
- **Status**: not_started
- **Depends**: [3-14]
- **Acceptance Criteria**:
  - Background and styling align with theme
  - Responsive: 320px–2560px
  - Text readable in both themes (4.5:1 contrast)
  - Proper spacing and padding
  - Animates in on scroll: fade-up
  - Icons and text properly aligned/centered
  - Typography consistent with portfolio

## Phase 4: Optimization & Polish (12 tasks)

### 4-1 Implement SEO Optimization and Meta Information
- **Status**: not_started
- **Depends**: [1-1]
- **Acceptance Criteria**:
  - Meta title (50-60 chars): "Neethish S - AI/ML & Backend Developer Portfolio"
  - Meta description (150-160 chars)
  - Keywords: portfolio, developer, AI/ML, backend, Python, FastAPI
  - Open Graph: og:title, og:description, og:image
  - Twitter Card tags
  - Canonical link
  - JSON-LD Person schema
  - robots.txt created
  - XML sitemap created

### 4-2 Optimize Performance and Core Web Vitals
- **Status**: not_started
- **Depends**: [1-1, 3-16]
- **Acceptance Criteria**:
  - LCP < 2.5s on 4G
  - CLS < 0.1
  - INP < 100ms
  - Bundle < 500KB gzipped
  - Lazy loading for images
  - 60 FPS animations
  - Fonts optimized (system + 2-3 custom max)
  - Font-display: swap
  - CSS/JS minified
  - Lighthouse ≥ 90

### 4-3 Implement Smooth Page Transitions and Scroll Behavior
- **Status**: not_started
- **Depends**: [2-1, 3-16]
- **Acceptance Criteria**:
  - Smooth section transitions (no full page reloads)
  - Transitions: fade, slide, scale (300-500ms)
  - window.scrollIntoView smooth
  - Back button navigates correctly
  - SPA behavior throughout
  - URL updates (optional: hashing)
  - Keyboard nav (Tab + Enter) works
  - No performance impact

### 4-4 Add Parallax and Advanced Scroll Effects
- **Status**: not_started
- **Depends**: [2-6, 3-16]
- **Acceptance Criteria**:
  - Parallax on backgrounds (0.3-0.5 ratio)
  - Smooth, 60 FPS, no jank
  - Disables if prefers-reduced-motion
  - Performance verified
  - Mobile optimizations
  - CSS transforms only
  - useReduceMotion hook

### 4-5 Implement Accessibility Features (WCAG 2.1 AA Compliance)
- **Status**: not_started
- **Depends**: [1-7]
- **Acceptance Criteria**:
  - Logical heading structure (h1, h2, h3, h4)
  - Every interactive element labeled/aria-label
  - Color not only indicator
  - 4.5:1 text contrast, 3:1 large text
  - Descriptive alt text for images
  - Form labels, error messages, validation
  - Full keyboard nav: Tab, Enter, Space, Escape
  - Focus management/traps
  - Links use descriptive text
  - Screen reader tested
  - axe DevTools 0 critical violations

### 4-6 Implement Dark and Light Theme Persistence
- **Status**: not_started
- **Depends**: [1-2, 4-1]
- **Acceptance Criteria**:
  - Toggle consistently visible
  - Theme persists to localStorage
  - Theme loads on refresh
  - System preference fallback
  - Light: light bg, high-contrast dark text
  - Dark: dark bg, light text, 4.5:1+ contrast
  - Transition smooth: 300-500ms
  - All components adapt

### 4-7 Add Animated Counters for Achievement Statistics
- **Status**: not_started
- **Depends**: [3-12]
- **Acceptance Criteria**:
  - Counters for: LeetCode (200+), skills, projects
  - Animate 0 → target when section in view
  - Duration: 1-2 seconds, ease-in-out
  - Display: "200+" for LeetCode, exact for others
  - Real-time without perf issues
  - Respects prefers-reduced-motion (skip to final)
  - Intersection Observer for performance
  - Semantic HTML

### 4-8 Implement Loading States and Skeleton Screens
- **Status**: not_started
- **Depends**: [1-1]
- **Acceptance Criteria**:
  - Skeleton screens while loading
  - Skeleton matches final content
  - Fade out, content fades in (200-300ms)
  - Image fallback placeholder
  - Distinct but not jarring
  - Doesn't impact load time
  - Subtle animation
  - Screen reader accessible

### 4-9 Create Social Media Integration and Sharing
- **Status**: not_started
- **Depends**: [4-1]
- **Acceptance Criteria**:
  - Share buttons on project cards: LinkedIn, Twitter
  - Opens share dialog with pre-fill
  - Content: project title, description, link
  - Portfolio share button in header
  - Consistent styling
  - OG and Twitter Card meta correct
  - Links tested/functional
  - Mobile responsive

### 4-10 Implement Print-Friendly Resume/CV Export
- **Status**: not_started
- **Depends**: [1-1]
- **Acceptance Criteria**:
  - "Download CV" button in About/Contact
  - PDF format download
  - Print produces print-friendly layout
  - Single-column, all content, nav removed
  - Print-safe colors/grayscale
  - Page breaks handled
  - PDF tested multiple browsers
  - File at /public/resume.pdf

### 4-11 Add Mobile Touch Interaction Feedback
- **Status**: not_started
- **Depends**: [1-5, 4-5]
- **Acceptance Criteria**:
  - 44x44px touch targets
  - Visual feedback on touch: highlight, ripple, color
  - Hover states → focus states for keyboard
  - No touch bugs (iOS + Android tested)
  - Viewport changes smooth (orientation change)
  - No accidental scrolling
  - Touch events handled correctly
  - 300ms tap delay handled

### 4-12 Final Polish and Cross-Browser Testing
- **Status**: not_started
- **Depends**: [4-1, 4-2, 4-3, 4-4, 4-5, 4-6, 4-7, 4-8, 4-9, 4-10, 4-11]
- **Acceptance Criteria**:
  - Chrome, Firefox, Safari, Edge (latest)
  - Breakpoints verified on real devices
  - No console errors/warnings
  - Lighthouse ≥ 90 all metrics
  - axe DevTools 0 critical issues
  - Visual consistency across browsers
  - All interactive elements work
  - No memory leaks/perf degradation

## Phase 5: Deployment & Testing (8 tasks)

### 5-1 Set Up Continuous Integration and Deployment Pipeline
- **Status**: not_started
- **Depends**: [1-7, 4-12]
- **Acceptance Criteria**:
  - GitHub Actions workflow
  - Lint passes: npm run lint
  - Type checks: npm run type-check
  - Build succeeds: npm run build
  - Auto-deploy on main push
  - Vercel/Netlify configured
  - Environment variables secure
  - Deployment logs accessible

### 5-2 Configure Analytics and Monitoring
- **Status**: not_started
- **Depends**: [4-1]
- **Acceptance Criteria**:
  - Google/Vercel Analytics configured
  - Page views tracked per section
  - User engagement metrics
  - Events: project views, contact, downloads
  - Privacy policy includes analytics
  - Dashboard accessible
  - Lighthouse CI monitoring
  - Error tracking (Sentry)

### 5-3 Verify All Links and External Resources
- **Status**: not_started
- **Depends**: [3-3, 3-14, 4-9]
- **Acceptance Criteria**:
  - GitHub links functional
  - External links tested (LinkedIn, LeetCode, email)
  - Live URLs verified (code-review-bot-green.vercel.app)
  - PDF resume download works
  - No 404 errors
  - No broken internal links
  - Open behavior correct
  - rel attributes set

### 5-4 Test Responsive Design on Real Devices
- **Status**: not_started
- **Depends**: [2-8, 4-11, 4-12]
- **Acceptance Criteria**:
  - iPhone SE (375px), iPhone 12 (390px), iPhone 14+ (430px)
  - iPad (768px), iPad Pro (1024px)
  - Desktop 1440px, 2560px
  - No horizontal scrolling
  - Touch smooth on mobile/tablet
  - Orientation changes smooth
  - Font sizes readable
  - Images scale properly

### 5-5 Perform Accessibility Audit and Testing
- **Status**: not_started
- **Depends**: [4-5]
- **Acceptance Criteria**:
  - axe DevTools 0 critical violations
  - WAVE 0 errors
  - Screen reader tested (VoiceOver, NVDA)
  - Keyboard nav verified: Tab, Enter
  - Focus visible
  - Color contrast: 4.5:1+ text, 3:1+ large
  - Headings h1, h2, h3, h4 nested
  - WCAG 2.1 AA verified

### 5-6 Optimize Final Bundle Size and Performance
- **Status**: not_started
- **Depends**: [4-2, 5-1]
- **Acceptance Criteria**:
  - Bundle < 500KB gzipped
  - Code-split/lazy-load where applicable
  - Unused dependencies removed
  - Tree-shaking enabled
  - Images optimized: WebP, responsive
  - CSS critical path optimized
  - JS execution minimized
  - Lighthouse ≥ 90
  - CWV: LCP < 2.5s, CLS < 0.1, INP < 100ms

### 5-7 Create Documentation and Deploy to Production
- **Status**: not_started
- **Depends**: [5-1, 5-2, 5-3, 5-4, 5-5, 5-6]
- **Acceptance Criteria**:
  - README.md with setup instructions
  - Deployment documentation
  - Architecture documentation
  - Code comments for complex logic
  - Contributing guidelines
  - Production deployment
  - Custom domain configured
  - SSL certificate verified (HTTPS)

### 5-8 Final Review and Launch
- **Status**: not_started
- **Depends**: [5-1, 5-2, 5-3, 5-4, 5-5, 5-6, 5-7]
- **Acceptance Criteria**:
  - All 42 tasks completed
  - Full regression testing
  - Lighthouse ≥ 90
  - WCAG 2.1 AA passed
  - Responsive on 5+ devices
  - Chrome, Firefox, Safari, Edge
  - Analytics monitoring
  - Launch checklist done
  - Portfolio live and accessible
  - Error monitoring configured

## Notes

- **Key Constraints**: NO percentage skill bars, NO HTML/CSS/JS percentages, EXCLUDE Gemini/ChatGPT/Excel skills. Exactly 5 skill categories and 3 projects as specified.
- **Accessibility**: All tasks must comply with WCAG 2.1 AA standards. 44x44px touch targets throughout.
- **Performance**: Target Lighthouse score ≥ 90 with LCP < 2.5s, CLS < 0.1, bundle < 500KB gzipped.
- **Responsive Design**: Verified at breakpoints: 320px, 640px, 768px, 1024px, 1440px, 2560px. NO horizontal scrolling.
- **Animation**: All animations 60 FPS, respect prefers-reduced-motion. Duration 300-600ms with 100-150ms stagger for sequences.
- **Contact Information**: All links functional and up-to-date (email, LinkedIn, GitHub, LeetCode).
- **Tech Stack**: React 18, TypeScript, Tailwind CSS, Radix UI, Framer Motion, Vite. Strict mode enabled throughout.
