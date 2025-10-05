# Technical Decisions & Rationale

**Project**: Paullina Chacin Portfolio Website
**Date**: 2025-10-05
**Decision Session**: Initial brainstorming and architecture planning

---

## 🎯 Decision Framework

All decisions were evaluated based on:
1. **College Application Alignment**: Does it serve the primary goal?
2. **Maintainability**: Can Paullina or her father easily update content?
3. **Professional Quality**: Does it meet academic/professional standards?
4. **Technical Simplicity**: Is it as simple as possible while meeting requirements?
5. **Scalability**: Can it grow with her throughout junior/senior year?

---

## Decision 1: Development Strategy

### Options Considered

**A. Custom Jekyll Build (From Scratch)**
- Full creative control
- Lightweight
- More development time

**B. Academic Theme Adaptation**
- Built-in features
- Faster deployment
- Less unique

**C. Hybrid Approach** ✅ **SELECTED**
- Best of both worlds
- Leverage existing features
- Customize to requirements

### Rationale

**Why Hybrid (C)?**

✅ **Time Efficiency**: Starting with a proven foundation (al-folio) saves weeks of development time while still allowing full customization

✅ **Feature Leverage**: Gets built-in dark/light mode, JSON resume system, and responsive design immediately

✅ **Learning Balance**: Provides structure to understand while allowing creativity in customization

✅ **Quality Foundation**: Built on battle-tested code used by academics worldwide

❌ **Trade-off**: Need to understand and refactor existing code rather than building from scratch

### Impact

- Reduces initial development time by ~50%
- Ensures professional quality baseline
- Provides upgrade path as needs evolve

---

## Decision 2: Base Template Selection

### Options Considered

**A. al-folio** ✅ **SELECTED**
- Modern, feature-rich
- Built-in light/dark mode
- JSON resume system

**B. Academic Pages**
- Simpler codebase
- Well-documented
- Need to build theme switcher

**C. Start Fresh + Cherry-pick**
- Maximum control
- Most manual work
- Cleanest architecture

### Rationale

**Why al-folio (A)?**

✅ **Theme Switching**: Dark/light/auto mode is already implemented and tested - the hardest technical challenge is solved

✅ **Resume System**: JSON-based resume generation aligns perfectly with "single source of truth" requirement

✅ **Modern Codebase**: Clean, well-organized SCSS architecture makes Catppuccin theme integration straightforward

✅ **Active Development**: Regular updates, security patches, and community support

✅ **Proven at Scale**: Used by hundreds of academics, tested across browsers and devices

❌ **Trade-off**: More features to strip out than Academic Pages, but worth it for built-in theme system

### Technical Details

- **Theme Implementation**: Uses CSS custom properties and localStorage
- **Resume Format**: Supports both JSON and YAML (we'll adapt to YAML for easier editing)
- **Build System**: Standard Jekyll with minimal custom plugins
- **Dependencies**: Well-maintained, no deprecated packages

### Impact

- Saves 4-6 hours on theme switcher implementation
- Provides robust resume rendering system
- Ensures cross-browser compatibility from day one

---

## Decision 3: Content Architecture

### Options Considered

**A. Collection-Based Structure** ✅ **SELECTED**
- Separate collections per content type
- Scalable and organized
- Professional structure

**B. Simple Pages Structure**
- Traditional approach
- Easier initial setup
- Harder to scale

**C. Hybrid: Pages + One Collection**
- Single "projects" collection
- Simpler than full collections
- Less clear categorization

### Rationale

**Why Collection-Based (A)?**

✅ **College Application Alignment**: Admissions officers expect clear categories (Volunteering, Leadership, Activities)

✅ **Scalability**: Easy to add new achievements throughout junior and senior year without restructuring

✅ **Metadata Rich**: Each item can have dates, categories, tags, impact statements, images

✅ **Automatic Organization**: Jekyll generates list pages and individual detail pages automatically

✅ **Professionalism**: Shows technical sophistication and organizational thinking

❌ **Trade-off**: Slightly more complex initial setup than single pages

### Technical Implementation

```yaml
collections:
  volunteering:
    output: true
    permalink: /volunteering/:name/
    sort_by: date
  events:
    output: true
    permalink: /events/:name/
    sort_by: date
  activities:
    output: true
    permalink: /activities/:name/
    sort_by: date
```

### Front Matter Schema

```yaml
---
layout: collection-item
title: "Habitat for Humanity - House Build"
date: 2024-06-15
category: community-service
tags: [construction, teamwork, leadership]
image: /assets/images/habitat-2024.jpg
hours: 40
impact: "Helped build 2 homes for local families"
skills: [teamwork, physical-labor, project-management]
---
```

### Impact

- Clear organizational structure for college reviewers
- Easy content management (add markdown files to collection folders)
- Can filter/sort by date, category, or tags
- Reusable data structure across site

---

## Decision 4: Navigation & Layout Structure

### Options Considered

**A. Traditional Top Navigation**
- Classic header menu
- Professional
- Less modern

**B. Hero Home + Side Navigation**
- Modern, visual
- Great first impression
- May be too creative

**C. Hybrid: Clean Top Nav + Featured Home** ✅ **SELECTED**
- Professional navigation
- Engaging homepage
- Balanced approach

**D. Academic Dashboard Style**
- Visual grid cards
- Modern
- Less traditional

### Rationale

**Why Hybrid (C)?**

✅ **Accessibility**: Clear top navigation works for everyone (including screen readers, keyboard navigation)

✅ **Familiarity**: College admissions officers can find what they need immediately

✅ **Engagement**: Featured homepage highlights key accomplishments without forcing exploration

✅ **Mobile Friendly**: Clean navigation collapses to hamburger menu, featured content stacks naturally

✅ **Balance**: Modern enough to show tech-savvy, traditional enough to be professional

❌ **Trade-off**: Less visually bold than Option B or D, but appropriate for academic context

### Navigation Structure

```
Primary Nav (Desktop):
[Home] [About] [Volunteering] [Events] [Activities] [Resume] [Contact]

Mobile:
[☰] → Slide-out menu with same links

Homepage Sections:
1. Hero: Photo + Name + Class of 2026
2. Introduction: Brief bio paragraph
3. Featured Highlights: 3-4 key accomplishments
4. Quick Links: Visual cards to main sections
5. Call-to-action: Download Resume
```

### Impact

- Easy navigation for all users
- Professional first impression
- Highlights best work prominently
- Mobile-responsive from the start

---

## Decision 5: Resume/CV Implementation Strategy

### Options Considered

**A. JSON Resume Standard + Custom Template**
- Industry standard
- al-folio supports it
- JSON editing tedious

**B. Markdown Resume + PDF Export**
- Easy editing
- Print CSS for PDF
- Manual PDF generation

**C. Hybrid: YAML Data + Multiple Views** ✅ **SELECTED**
- YAML easier than JSON
- Single source of truth
- Web + print layouts

**D. Automated PDF Generation**
- GitHub Actions automation
- Always in sync
- Complex setup

### Rationale

**Why YAML + Multiple Views (C)?**

✅ **Ease of Editing**: YAML is human-readable and easy to update (vs JSON's strict syntax)

✅ **Single Source of Truth**: `_data/resume.yml` feeds both web view and print view

✅ **Data Reuse**: Can pull volunteer/event/activity data from resume into collections (DRY principle)

✅ **Print Optimization**: Dedicated print layout ensures perfect PDFs via browser print

✅ **No Automation Complexity**: Simple enough to maintain without GitHub Actions, but upgradeable later

❌ **Trade-off**: Need to maintain two layouts (web + print), but both read same data source

### Data Structure Example

```yaml
# _data/resume.yml
basics:
  name: "Paullina Chacin"
  label: "High School Junior"
  email: "[to be added]"
  phone: "[to be added]"
  summary: "Dedicated student with passion for..."

education:
  - institution: "High School Name"
    area: "General Studies"
    studyType: "High School Diploma"
    startDate: "2023-08"
    endDate: "2026-06"
    gpa: "X.XX"
    courses:
      - "AP Biology"
      - "AP US History"

volunteer:
  - organization: "Habitat for Humanity"
    position: "Volunteer Builder"
    website: "https://habitat.org"
    startDate: "2023-06"
    endDate: "Present"
    summary: "Build homes for families in need"
    highlights:
      - "Completed 40 hours of construction work"
      - "Led team of 5 volunteers on framing project"

activities:
  - organization: "Debate Team"
    position: "Varsity Member"
    startDate: "2023-09"
    endDate: "Present"
    highlights:
      - "Reached state semifinals in 2024"
      - "Mentored 3 junior debaters"

skills:
  - name: "Leadership"
    keywords: ["Team Management", "Project Coordination"]
  - name: "Communication"
    keywords: ["Public Speaking", "Writing"]
  - name: "Technical"
    keywords: ["Research", "Data Analysis"]

awards:
  - title: "Honor Roll"
    date: "2024-06"
    awarder: "High School Name"
```

### Layout Implementation

**Web View** (`/resume/` → `_layouts/resume.html`):
- Styled with Catppuccin theme
- Responsive sections
- Download PDF button
- Links to detailed collection pages

**Print View** (`/resume/print/` → `_layouts/resume-print.html`):
- Optimized for A4/Letter paper
- Removes navigation, footer, theme switcher
- Clean typography for printing
- Single page or clean page breaks

### PDF Generation Workflow

1. User clicks "Download PDF" button on `/resume/`
2. Opens `/resume/print/` in new tab
3. User uses browser Print → Save as PDF
4. Alternative: Instructions for generating PDF provided on page

### Impact

- Easy content updates (edit one YAML file)
- Professional web and PDF versions
- Consistent data across site
- No external dependencies
- Upgradeable to automation later if needed

---

## Design Decisions

### Catppuccin Color Scheme

**Latte (Light Mode)**
```scss
$latte-base: #eff1f5;
$latte-text: #4c4f69;
$latte-subtext0: #6c6f85;
$latte-overlay0: #9ca0b0;
$latte-surface0: #ccd0da;
$latte-blue: #1e66f5;    // Primary accent
$latte-green: #40a02b;   // Success
$latte-red: #d20f39;     // Error/warning
```

**Macchiato (Dark Mode)**
```scss
$macchiato-base: #24273a;
$macchiato-text: #cad3f5;
$macchiato-subtext0: #a5adcb;
$macchiato-overlay0: #6e738d;
$macchiato-surface0: #363a4f;
$macchiato-blue: #8aadf4;    // Primary accent
$macchiato-green: #a6da95;   // Success
$macchiato-red: #ed8796;     // Error/warning
```

**Rationale**:
- Professional academic palette
- Excellent contrast ratios (WCAG AA/AAA)
- Pleasant for extended reading
- Matches modern design trends
- Reference: carloschac.in and vanilla-di.com use similar approach

### Typography

- **Headings**: System font stack (native, fast, readable)
- **Body**: Serif or sans-serif optimized for web reading
- **Code**: Monospace for any technical content
- **Scale**: Modular scale (1.25 ratio) for hierarchy

### Responsive Breakpoints

```scss
$mobile: 576px;
$tablet: 768px;
$desktop: 1024px;
$wide: 1440px;
```

---

## Technical Constraints & Requirements

### Must-Haves
✅ Jekyll 4.x compatible
✅ GitHub Pages compatible (no custom plugins)
✅ Mobile responsive
✅ Accessible (WCAG AA minimum)
✅ Fast load times (< 2 seconds)
✅ Works without JavaScript (progressive enhancement)

### Nice-to-Haves
- Smooth animations/transitions
- Image lazy loading
- Service worker for offline capability
- Analytics integration

---

## Security & Privacy Decisions

### Sensitive Information Handling

**Email & Phone**:
- NOT committed to repository initially
- Added via environment variables or secure config
- Or simply added manually after initial deployment
- Documented in CLAUDE.md for future reference

**Images**:
- Optimize and compress before committing
- No EXIF data with location information
- Review all images for privacy concerns

**Analytics** (if implemented):
- Use privacy-focused solution (e.g., Plausible, Simple Analytics)
- No tracking without notice
- Comply with privacy regulations

---

## Future Considerations

### Potential Enhancements
1. **Blog/News Section**: Add collection for blog posts about achievements, reflections
2. **Testimonials**: Add section for teacher/mentor recommendations
3. **Project Gallery**: Visual showcase for creative work (if applicable)
4. **Multilingual Support**: Spanish translation (if relevant)
5. **CMS Integration**: Forestry.io or NetlifyCMS for non-technical editing
6. **Automated PDF**: GitHub Actions to generate PDF on every commit
7. **Email Contact Form**: Formspree or similar service integration

### Upgrade Paths
- **From YAML to CMS**: Keep same data structure, add editing interface
- **From Manual PDF to Automated**: Add GitHub Action using Playwright
- **From Static to Dynamic**: Migrate to Astro or Next.js if needs grow

---

## Lessons from Reference Sites

### From carloschac.in
- Clean, minimal design
- Excellent use of whitespace
- Clear typography hierarchy
- Professional color palette
- Fast loading

### From vanilla-di.com
- Modern layout patterns
- Effective use of sections
- Good mobile experience
- Clear call-to-actions

### Applied to This Project
- Clean, uncluttered design
- Professional academic tone
- Modern but not trendy
- Focus on content over decoration
- Accessibility first

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2025-10-05 | Use hybrid approach with al-folio base | Balance speed and customization |
| 2025-10-05 | Collection-based content architecture | Scalability for college applications |
| 2025-10-05 | YAML resume with dual layouts | Easy editing + single source of truth |
| 2025-10-05 | Catppuccin theme (Latte + Macchiato) | Professional, accessible, modern |
| 2025-10-05 | Hybrid navigation (top nav + featured home) | Professional + engaging |

---

## Open Questions

- [ ] What is Paullina's high school name? (for resume)
- [ ] Does she have specific brand colors or preferences?
- [ ] Are there specific college programs she's targeting? (tailor content)
- [ ] Will she need a blog/writing section?
- [ ] Does she want social media links? (Instagram, LinkedIn, etc.)
- [ ] Any specific achievements to highlight on homepage?
- [ ] Profile photo available? (professional headshot)

---

## References

- al-folio: https://github.com/alshedivat/al-folio
- Catppuccin: https://catppuccin.com/
- Jekyll Collections: https://jekyllrb.com/docs/collections/
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- JSON Resume: https://jsonresume.org/
- GitHub Pages: https://docs.github.com/en/pages
