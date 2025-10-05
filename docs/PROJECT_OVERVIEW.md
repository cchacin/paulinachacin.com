# Project Overview

**Project Name**: Paullina Chacin Portfolio Website
**Purpose**: College application portfolio showcasing academic achievements, volunteering, and extracurricular activities
**Technology**: Jekyll + GitHub Pages
**Timeline**: 29-40 hours estimated for full implementation
**Status**: Planning complete, ready for implementation

---

## 🎯 Project Goals

1. **College Applications**: Professional portfolio for college admissions officers
2. **Single Source of Truth**: Resume content maintained in one place (`_data/resume.yml`)
3. **Modern & Academic**: Professional design with Catppuccin color scheme
4. **Accessibility**: WCAG AA compliant, works for all users
5. **Maintainability**: Easy to update content throughout high school

---

## 📊 Quick Stats

| Metric | Target |
|--------|--------|
| **Total Pages** | 7+ (home, about, contact, resume, 3 collections) |
| **Collections** | 3 (volunteering, events, activities) |
| **Images Needed** | 10-15 |
| **Theme Modes** | 3 (light, dark, auto) |
| **Performance Score** | ≥ 85 (Lighthouse) |
| **Accessibility Score** | ≥ 90 (Lighthouse) |
| **Development Time** | 29-40 hours |

---

## 🗂️ Documentation Map

### Planning Documents (Read First)
1. **CLAUDE.md** - Technical guidance for development
2. **IMPLEMENTATION_PLAN.md** - 10-phase roadmap with checkboxes (START HERE for development)
3. **TECHNICAL_DECISIONS.md** - Why we chose each approach

### Design & Content Guides
4. **VISUAL_MOCKUP.md** - Detailed design specifications and ASCII mockups
5. **STYLE_GUIDE.md** - Colors, typography, components, voice & tone
6. **CONTENT_TEMPLATES.md** - Ready-to-use templates with examples

### Implementation Resources
7. **QUICK_START.md** - Get started quickly (START HERE for quick setup)
8. **IMAGE_REQUIREMENTS.md** - Complete image specifications and checklist
9. **DEPLOYMENT_CHECKLIST.md** - Launch and deployment process
10. **PROJECT_OVERVIEW.md** - This document

### Sample Content
11. **samples/** directory - Example entries for reference

---

## 🚀 Getting Started

### For Immediate Development

**Path 1: Jump Right In**
1. Read **QUICK_START.md** (5 minutes)
2. Run `bundle install && bundle exec jekyll serve`
3. Review samples in `samples/` directory
4. Follow **IMPLEMENTATION_PLAN.md** Phase 1

**Path 2: Understand First**
1. Read **PROJECT_OVERVIEW.md** (this document)
2. Review **TECHNICAL_DECISIONS.md** (understand why)
3. Study **VISUAL_MOCKUP.md** (see the vision)
4. Read **QUICK_START.md** and begin development

**Path 3: Content Focus**
1. Read **CONTENT_TEMPLATES.md**
2. Review sample content in `samples/`
3. Gather real content (photos, text, achievements)
4. Begin development when content is ready

---

## 📋 Project Decisions Summary

| Decision | Choice | Key Benefit |
|----------|--------|-------------|
| **Strategy** | Hybrid (al-folio base + customization) | Speed + flexibility |
| **Template** | al-folio | Built-in dark/light mode |
| **Content** | Collection-based architecture | Professional, scalable |
| **Navigation** | Clean top nav + featured home | Professional + engaging |
| **Resume** | YAML data + dual layouts | Single source of truth |
| **Theme** | Catppuccin (Latte + Macchiato) | Modern, accessible |

---

## 🏗️ Implementation Phases

```
Phase 1: Foundation (2-3 hrs)
  └─ Clone al-folio, configure, clean up

Phase 2: Theme (4-6 hrs)
  └─ Catppuccin colors, dark/light modes

Phase 3: Navigation (3-4 hrs)
  └─ Top nav + featured homepage

Phase 4: Collections (4-5 hrs)
  └─ Volunteering, events, activities

Phase 5: Resume (5-6 hrs)
  └─ YAML data + web/print views

Phase 6: Pages (2-3 hrs)
  └─ About, contact pages

Phase 7: Integration (2-3 hrs)
  └─ Connect data sources

Phase 8: Polish (4-5 hrs)
  └─ Optimization, testing, SEO

Phase 9: Documentation (2-3 hrs)
  └─ Content guides, handoff

Phase 10: Launch (1-2 hrs)
  └─ Deploy, verify, monitor
```

**Total**: 29-40 hours

---

## 🎨 Design System

### Colors (Catppuccin)

**Light Mode (Latte)**:
- Background: `#eff1f5`
- Text: `#4c4f69`
- Primary: `#1e66f5` (blue)

**Dark Mode (Macchiato)**:
- Background: `#24273a`
- Text: `#cad3f5`
- Primary: `#8aadf4` (blue)

### Typography
- Headings: System font stack, bold
- Body: 16px base, 1.6 line height
- Scale: 1.25 ratio (modular scale)

### Components
- Buttons: Primary (filled) & Secondary (outline)
- Cards: Subtle shadow, rounded corners
- Navigation: Responsive (hamburger mobile)

---

## 📁 Key Files & Locations

```
Configuration:
  _config.yml              Site settings, collections config

Data:
  _data/resume.yml         Single source of truth for resume

Content:
  _volunteering/           Volunteering entries
  _events/                 Events & competitions
  _activities/             Clubs & activities
  pages/about.md           About page
  pages/contact.md         Contact page
  pages/resume.md          Resume page

Design:
  _sass/catppuccin/        Theme colors
  _layouts/                Page templates
  _includes/               Reusable components

Assets:
  assets/images/           All images
  assets/css/              Compiled CSS
  assets/js/               JavaScript

Samples:
  samples/                 Example content (reference only)
```

---

## 🎯 Content Requirements

### Critical Content Needed

**Profile Information**:
- [ ] Professional headshot photo (600x600px)
- [ ] Name, class year, school name
- [ ] Brief bio/introduction
- [ ] Email and phone (added later)

**Resume Data**:
- [ ] Education details (school, GPA, courses)
- [ ] Volunteer experiences (≥2 entries)
- [ ] Events/awards (≥1 entry)
- [ ] Activities (≥1 entry)
- [ ] Skills and interests

**Collection Entries**:
- [ ] 2-3 volunteering entries with photos
- [ ] 1-2 event/competition entries with photos
- [ ] 1-2 activity entries with photos

**Page Content**:
- [ ] About page text (bio, skills, goals)
- [ ] Contact information
- [ ] Homepage introduction

---

## 🖼️ Image Requirements Summary

| Image Type | Quantity | Dimensions | Size |
|------------|----------|------------|------|
| Profile photos | 1-2 | 600x600px | < 150KB |
| Volunteering | 2-4 | 400x300 + hero | < 150/300KB |
| Events | 2-4 | 400x300 + hero | < 150/300KB |
| Activities | 2-4 | 400x300 + hero | < 150/300KB |
| Meta (favicon, OG) | 3-5 | Various | < 300KB |

**Total**: ~10-15 images, ~4-5MB total

See **IMAGE_REQUIREMENTS.md** for complete specifications.

---

## ✅ Success Criteria

### Launch Ready When:

**Functionality**:
- [ ] All pages load correctly
- [ ] Navigation works on desktop and mobile
- [ ] Theme switcher works (light/dark/auto)
- [ ] Collections display entries correctly
- [ ] Resume renders from YAML data
- [ ] All links work (no 404s)

**Performance**:
- [ ] Page load < 2 seconds
- [ ] Lighthouse performance ≥ 85
- [ ] Lighthouse accessibility ≥ 90
- [ ] Mobile responsive on all devices

**Content**:
- [ ] All placeholder text replaced
- [ ] Real photos added and optimized
- [ ] At least 2 volunteering entries
- [ ] At least 1 event entry
- [ ] At least 1 activity entry
- [ ] About page complete
- [ ] Resume data complete

**Quality**:
- [ ] No broken links
- [ ] No console errors
- [ ] Proofread for typos
- [ ] Tested on multiple browsers
- [ ] Accessible (keyboard navigation, screen reader)

---

## 🚦 Current Status

**Phase**: Planning Complete ✅

**Next Steps**:
1. Review all documentation
2. Begin Phase 1: Foundation & Setup
3. Follow IMPLEMENTATION_PLAN.md step-by-step

**Estimated Time to Launch**: 29-40 hours of focused development

---

## 🆘 Quick Help

### Common Questions

**Q: Where do I start?**
A: Read QUICK_START.md, then follow IMPLEMENTATION_PLAN.md Phase 1

**Q: How do I add content?**
A: See CONTENT_TEMPLATES.md for templates and examples

**Q: What do the design specs look like?**
A: See VISUAL_MOCKUP.md for complete visual reference

**Q: How do I deploy?**
A: Follow DEPLOYMENT_CHECKLIST.md when ready to launch

**Q: What images do I need?**
A: See IMAGE_REQUIREMENTS.md for complete list

---

## 📞 Resources

### Documentation
- Jekyll: https://jekyllrb.com/docs/
- GitHub Pages: https://docs.github.com/en/pages
- Catppuccin: https://catppuccin.com/

### Tools
- Image optimization: https://tinypng.com
- Color contrast: https://webaim.org/resources/contrastchecker/
- Lighthouse audit: Chrome DevTools

### References
- carloschac.in (design reference)
- vanilla-di.com (design reference)
- al-folio: https://github.com/alshedivat/al-folio

---

## 🎉 Ready to Build!

All planning is complete. You have:
- ✅ Clear vision and design specifications
- ✅ Technical architecture decided
- ✅ Complete implementation roadmap
- ✅ Content templates and examples
- ✅ Style guide for consistency
- ✅ Deployment process defined

**Time to build Paullina's portfolio!** 🚀

Start with **QUICK_START.md** or dive into **IMPLEMENTATION_PLAN.md** Phase 1.
