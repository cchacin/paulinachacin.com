# Implementation Plan: Paullina Chacin Portfolio Website

**Project Goal**: Create a modern, academic portfolio website for high school junior Paullina Chacin to support college applications, showcasing volunteering, events, extracurricular activities, skills, and resume.

**Last Updated**: 2025-10-05

---

## 🎯 Project Decisions Summary

### ✅ Confirmed Decisions

| Decision Point | Choice | Rationale |
|---------------|--------|-----------|
| **Development Strategy** | Hybrid Approach (C) | Start with Academic Pages, strip down, rebuild with Catppuccin theme |
| **Base Template** | al-folio (A) | Built-in dark/light mode, JSON resume system, modern codebase |
| **Content Architecture** | Collection-Based (A) | Clean separation, scalable, professional structure for college apps |
| **Navigation & Layout** | Hybrid: Clean Top Nav + Featured Home (C) | Professional, accessible, balances modern with academic expectations |
| **Resume System** | Hybrid YAML + Multiple Views (C) | Single source of truth, easy editing, web + print layouts |

---

## 🎨 Design Requirements

### Theme System
- **Color Scheme**: Catppuccin Latte (light mode) & Macchiato (dark mode)
- **Theme Modes**: Dark, Light, Auto (system preference detection)
- **Style**: Modern and academic, professional
- **Reference Sites**: carloschac.in, vanilla-di.com

### Visual Design Goals
- Clean typography with readable fonts
- Ample whitespace and clear hierarchy
- Professional color palette from Catppuccin
- Responsive design (mobile/tablet/desktop)
- Accessible (WCAG compliance)

---

## 📐 Site Architecture

### Page Structure
```
Home (/)
├── About (/about/)
├── Volunteering (/volunteering/)
│   └── Individual entries (/volunteering/[slug]/)
├── Events (/events/)
│   └── Individual entries (/events/[slug]/)
├── Activities (/activities/)
│   └── Individual entries (/activities/[slug]/)
├── Resume (/resume/)
│   ├── Web view
│   └── Print view (/resume/print/)
└── Contact (/contact/)
```

### Jekyll Collections
```yaml
collections:
  volunteering:
    output: true
    permalink: /volunteering/:name/
  events:
    output: true
    permalink: /events/:name/
  activities:
    output: true
    permalink: /activities/:name/
```

### Data Structure
```
_data/
└── resume.yml          # Single source of truth for resume content
```

---

## 📋 Implementation Roadmap

### Phase 1: Foundation & Setup
**Goal**: Clean base installation and configuration

- [ ] Clone al-folio repository as starting point
- [ ] Remove academic research features (publications, BibTeX, etc.)
- [ ] Clean up unnecessary dependencies
- [ ] Update `_config.yml` with Paullina's information
  - [ ] Site title: "Paullina Chacin"
  - [ ] Description
  - [ ] URL configuration
  - [ ] Collections setup (volunteering, events, activities)
- [ ] Remove default blog/news features (if not needed)
- [ ] Test local build with `bundle exec jekyll serve`
- [ ] Verify GitHub Pages deployment works

**Deliverable**: Clean, working Jekyll site with al-folio foundation

---

### Phase 2: Catppuccin Theme Implementation
**Goal**: Replace default theme with Catppuccin color system

- [ ] Research Catppuccin color palettes
  - [ ] Document Latte (light) color values
  - [ ] Document Macchiato (dark) color values
- [ ] Create `_sass/catppuccin/` directory structure
  - [ ] `_latte.scss` - Light mode variables
  - [ ] `_macchiato.scss` - Dark mode variables
  - [ ] `_theme-switcher.scss` - Theme toggle styles
- [ ] Implement CSS custom properties for theming
  - [ ] Base colors (background, foreground, text)
  - [ ] Accent colors (primary, secondary, links)
  - [ ] Semantic colors (success, warning, error)
- [ ] Update existing al-folio styles to use new variables
- [ ] Test theme switching functionality
  - [ ] Manual toggle works
  - [ ] Auto mode detects system preference
  - [ ] Theme preference persists (localStorage)
- [ ] Ensure accessibility (contrast ratios meet WCAG AA)

**Deliverable**: Fully themed site with dark/light/auto modes

---

### Phase 3: Navigation & Layout
**Goal**: Implement clean top navigation with featured homepage

#### 3A: Navigation Menu
- [ ] Create primary navigation component
  - [ ] Home
  - [ ] About
  - [ ] Volunteering
  - [ ] Events
  - [ ] Activities
  - [ ] Resume
  - [ ] Contact
- [ ] Implement responsive navigation (hamburger menu for mobile)
- [ ] Add active state highlighting
- [ ] Test navigation on all breakpoints

#### 3B: Homepage Design
- [ ] Create featured home layout
  - [ ] Hero section (introduction + photo placeholder)
  - [ ] Featured highlights section
  - [ ] Quick links to main sections
- [ ] Design section cards/previews
- [ ] Add smooth scrolling/transitions (optional)
- [ ] Test responsive layout

**Deliverable**: Professional navigation and engaging homepage

---

### Phase 4: Collections Implementation
**Goal**: Build content structure for portfolio items

#### 4A: Collection Setup
- [ ] Create collection directories
  - [ ] `_volunteering/`
  - [ ] `_events/`
  - [ ] `_activities/`
- [ ] Define front matter schema for each collection
  - [ ] Required fields (title, date, description)
  - [ ] Optional fields (image, link, skills, impact)
- [ ] Create collection index layouts
  - [ ] List view for each collection type
  - [ ] Filtering/sorting options (by date, category)
- [ ] Create single item layouts
  - [ ] Detail page template for individual entries

#### 4B: Sample Content
- [ ] Create 1-2 sample entries per collection
  - [ ] Sample volunteering entry
  - [ ] Sample event entry
  - [ ] Sample activity entry
- [ ] Test collection rendering
- [ ] Verify permalinks and navigation

**Deliverable**: Working collections with sample content

---

### Phase 5: Resume System
**Goal**: Implement YAML-based resume with web and print views

#### 5A: Data Structure
- [ ] Create `_data/resume.yml` with complete schema
  - [ ] Basics (name, contact, summary)
  - [ ] Education
  - [ ] Volunteering
  - [ ] Events/Awards
  - [ ] Activities
  - [ ] Skills
  - [ ] Interests
- [ ] Add placeholder/sample data

#### 5B: Web View
- [ ] Create `resume.html` layout
- [ ] Design responsive resume sections
- [ ] Style with Catppuccin theme
- [ ] Add PDF download button
- [ ] Test on multiple devices

#### 5C: Print/PDF View
- [ ] Create `resume-print.html` layout
- [ ] Implement print-specific CSS
  - [ ] Remove navigation/footer
  - [ ] Optimize for A4/Letter paper
  - [ ] Ensure single-page or clean page breaks
- [ ] Test browser print functionality
- [ ] Add instructions for PDF generation

**Deliverable**: Fully functional resume with download capability

---

### Phase 6: Core Pages
**Goal**: Build About and Contact pages

#### 6A: About Page
- [ ] Create about page layout
- [ ] Content sections:
  - [ ] Bio/introduction
  - [ ] Photo
  - [ ] Skills showcase
  - [ ] Interests
  - [ ] Academic goals
- [ ] Style with Catppuccin theme
- [ ] Make responsive

#### 6B: Contact Page
- [ ] Create contact page layout
- [ ] Contact information sections:
  - [ ] Email (placeholder for now)
  - [ ] Phone (placeholder for now)
  - [ ] Social links (LinkedIn, GitHub, etc.)
  - [ ] Contact form (optional)
- [ ] Style with Catppuccin theme
- [ ] Add privacy note about sensitive info

**Deliverable**: Complete About and Contact pages

---

### Phase 7: Content Integration
**Goal**: Connect resume data with collections (data reuse)

- [ ] Update volunteering collection to optionally pull from `resume.yml`
- [ ] Update events collection to optionally pull from `resume.yml`
- [ ] Update activities collection to optionally pull from `resume.yml`
- [ ] Ensure no content duplication
- [ ] Test data consistency across pages

**Deliverable**: Single source of truth working across all sections

---

### Phase 8: Polish & Optimization
**Goal**: Final touches and performance optimization

#### 8A: Visual Polish
- [ ] Review typography consistency
- [ ] Check spacing and alignment across all pages
- [ ] Add smooth transitions/animations (subtle)
- [ ] Optimize images (compression, responsive images)
- [ ] Add favicon and meta images

#### 8B: Technical Optimization
- [ ] Minify CSS/JS
- [ ] Optimize build performance
- [ ] Test page load speeds
- [ ] Validate HTML/CSS
- [ ] Check accessibility with automated tools
- [ ] Test across browsers (Chrome, Firefox, Safari, Edge)

#### 8C: SEO & Metadata
- [ ] Add meta descriptions to all pages
- [ ] Configure Open Graph tags
- [ ] Add structured data (JSON-LD for Person schema)
- [ ] Create/update robots.txt
- [ ] Generate sitemap.xml

**Deliverable**: Production-ready, optimized website

---

### Phase 9: Documentation & Handoff
**Goal**: Enable easy maintenance and updates

- [ ] Create content editing guide
  - [ ] How to add volunteering entries
  - [ ] How to add events
  - [ ] How to add activities
  - [ ] How to update resume
- [ ] Document deployment process
- [ ] Create troubleshooting guide
- [ ] Add sensitive information (email, phone) securely
- [ ] Final review with stakeholder

**Deliverable**: Maintainable site with clear documentation

---

### Phase 10: Launch & Monitoring
**Goal**: Deploy to production and verify

- [ ] Final local testing
- [ ] Deploy to GitHub Pages
- [ ] Verify custom domain (if applicable)
- [ ] Test all links and navigation
- [ ] Verify theme switching on live site
- [ ] Test resume PDF download
- [ ] Mobile testing on real devices
- [ ] Share with stakeholders for feedback
- [ ] Monitor analytics (if implemented)

**Deliverable**: Live portfolio website

---

## 🔧 Technical Stack

### Core Technologies
- **Static Site Generator**: Jekyll 4.x
- **Hosting**: GitHub Pages
- **Base Theme**: al-folio (customized)
- **Styling**: Sass/SCSS with Catppuccin colors
- **JavaScript**: Vanilla JS for theme switcher
- **Version Control**: Git + GitHub

### Dependencies (from al-folio)
- jekyll
- jekyll-paginate
- jekyll-seo-tag
- jekyll-sitemap
- webrick (for local development)

### Development Tools
- Ruby 3.x
- Bundler
- Node.js (optional, for asset optimization)

---

## 📊 Success Metrics

- [ ] All pages load in < 2 seconds
- [ ] Mobile responsive (works on all devices)
- [ ] Accessibility score > 90 (Lighthouse)
- [ ] Theme switching works perfectly
- [ ] Resume PDF generates correctly
- [ ] All links functional
- [ ] SEO score > 90

---

## ⚠️ Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| al-folio complexity | Strip features methodically, test frequently |
| Theme switcher bugs | Use proven localStorage pattern, test thoroughly |
| PDF generation issues | Use browser print CSS, test on multiple browsers |
| Content maintenance difficulty | Create clear documentation, use simple YAML |
| Sensitive info exposure | Add to .gitignore, use environment variables if needed |

---

## 📅 Estimated Timeline

| Phase | Estimated Time |
|-------|---------------|
| Phase 1: Foundation | 2-3 hours |
| Phase 2: Catppuccin Theme | 4-6 hours |
| Phase 3: Navigation & Layout | 3-4 hours |
| Phase 4: Collections | 4-5 hours |
| Phase 5: Resume System | 5-6 hours |
| Phase 6: Core Pages | 2-3 hours |
| Phase 7: Content Integration | 2-3 hours |
| Phase 8: Polish & Optimization | 4-5 hours |
| Phase 9: Documentation | 2-3 hours |
| Phase 10: Launch | 1-2 hours |
| **Total** | **29-40 hours** |

---

## 🎓 Learning Resources

### Catppuccin Theme
- Official Palette: https://github.com/catppuccin/catppuccin
- Color Reference: https://catppuccin.com/palette

### Jekyll Documentation
- Official Docs: https://jekyllrb.com/docs/
- Collections: https://jekyllrb.com/docs/collections/
- Data Files: https://jekyllrb.com/docs/datafiles/

### al-folio Reference
- GitHub Repo: https://github.com/alshedivat/al-folio
- Live Demo: https://alshedivat.github.io/al-folio/

### Accessibility
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- Color Contrast Checker: https://webaim.org/resources/contrastchecker/

---

## 📝 Notes

- Keep CLAUDE.md updated as architecture evolves
- Commit frequently with descriptive messages
- Test on mobile throughout development
- Prioritize accessibility from the start
- Get feedback early and often
- Remember: simple, clean, professional > complex and flashy
