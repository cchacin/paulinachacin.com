# Quick Start Guide

**Project**: Paullina Chacin Portfolio Website
**Date**: 2025-10-05
**Purpose**: Get started quickly with development

---

## 🚀 Getting Started in 5 Minutes

### Prerequisites

Make sure you have these installed:
- **Ruby** 3.x ([Install Ruby](https://www.ruby-lang.org/en/downloads/))
- **Bundler** (`gem install bundler`)
- **Git** ([Install Git](https://git-scm.com/downloads))

### Quick Setup

```bash
# 1. Navigate to project
cd paulinachacin.com

# 2. Install dependencies
bundle install

# 3. Start local server
bundle exec jekyll serve

# 4. Open browser
# Visit: http://localhost:4000
```

That's it! The site should now be running locally.

---

## 📁 Project Structure Overview

```
paulinachacin.com/
├── _config.yml              # Site configuration
├── _data/
│   └── resume.yml           # Resume data (single source of truth)
├── _layouts/
│   ├── default.html         # Base layout
│   ├── home.html            # Homepage layout
│   ├── page.html            # Standard page layout
│   ├── collection-item.html # Individual entry layout
│   └── resume.html          # Resume layouts
├── _includes/
│   ├── head.html            # HTML head (meta, CSS)
│   ├── header.html          # Site header & navigation
│   ├── footer.html          # Site footer
│   └── theme-switcher.html  # Dark/light mode toggle
├── _sass/
│   └── catppuccin/
│       ├── _latte.scss      # Light mode colors
│       ├── _macchiato.scss  # Dark mode colors
│       └── _theme.scss      # Theme variables
├── _volunteering/           # Volunteering collection
├── _events/                 # Events collection
├── _activities/             # Activities collection
├── assets/
│   ├── css/
│   ├── js/
│   └── images/              # All images here
├── pages/
│   ├── about.md             # About page
│   ├── contact.md           # Contact page
│   └── resume.md            # Resume page
├── index.md                 # Homepage
└── samples/                 # Sample content (reference only)
```

---

## 🎯 Common Tasks

### Adding New Volunteering Entry

1. **Create new file** in `_volunteering/`:
```bash
touch _volunteering/my-activity.md
```

2. **Add front matter and content**:
```markdown
---
layout: collection-item
title: "Activity Name"
organization: "Organization Name"
date: 2024-06-15
hours: 20
category: community-service
tags: [tag1, tag2]
featured: false
excerpt: "Brief description"
---

## Overview
[Content here...]
```

3. **View locally**:
- Restart Jekyll: `Ctrl+C` then `bundle exec jekyll serve`
- Visit: `http://localhost:4000/volunteering/my-activity/`

### Adding New Event Entry

Same process, but in `_events/` directory:
```markdown
---
layout: collection-item
title: "Event Name"
event_type: competition
date: 2024-03-15
result: "1st Place"
category: science
tags: [science, research]
featured: true
excerpt: "Brief description"
---

## Event Overview
[Content here...]
```

### Adding New Activity Entry

Same process, but in `_activities/` directory:
```markdown
---
layout: collection-item
title: "Club/Activity Name"
role: "Your Position"
date: 2023-09-01
end_date: present
category: leadership
tags: [leadership, public-speaking]
featured: true
excerpt: "Brief description"
---

## About the Activity
[Content here...]
```

### Updating Resume

Edit `_data/resume.yml`:

```yaml
volunteer:
  - organization: "New Organization"
    position: "Volunteer Role"
    startDate: "2024-06"
    endDate: "Present"
    highlights:
      - "Achievement 1"
      - "Achievement 2"
```

Resume will automatically update on `/resume/` page.

### Adding Images

1. **Place image** in appropriate directory:
```bash
# For volunteering
cp ~/Downloads/photo.jpg assets/images/volunteering/my-activity.jpg

# For events
cp ~/Downloads/photo.jpg assets/images/events/my-event.jpg
```

2. **Reference in markdown**:
```markdown
---
image: /assets/images/volunteering/my-activity.jpg
---
```

3. **Optimize image** before adding:
- Use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
- Target size: < 150KB for thumbnails, < 300KB for heroes

### Updating About Page

Edit `pages/about.md`:

```markdown
---
layout: page
title: About Me
permalink: /about/
---

## Hi, I'm Paullina

[Your content here...]
```

---

## 🎨 Customizing Colors

### Changing Theme Colors

Edit `_sass/catppuccin/_latte.scss` (light mode):
```scss
$latte-blue: #1e66f5;  // Primary accent
$latte-green: #40a02b; // Success color
```

Edit `_sass/catppuccin/_macchiato.scss` (dark mode):
```scss
$macchiato-blue: #8aadf4;  // Primary accent
$macchiato-green: #a6da95; // Success color
```

### Applying Colors

In your SCSS files:
```scss
.button-primary {
  background-color: var(--color-primary);
  color: var(--color-background);
}
```

---

## 🔧 Development Workflow

### Typical Development Session

```bash
# 1. Start server
bundle exec jekyll serve

# 2. Make changes to files (save automatically triggers rebuild)

# 3. View changes in browser
# Refresh: http://localhost:4000

# 4. When done, commit changes
git add .
git commit -m "Describe changes"

# 5. Push to GitHub (triggers deployment)
git push origin main
```

### Live Reload

Jekyll watches for changes automatically. Just save your file and refresh the browser.

**Exception**: Changes to `_config.yml` require restart:
```bash
# Stop server (Ctrl+C)
# Restart
bundle exec jekyll serve
```

---

## 🐛 Troubleshooting

### Server Won't Start

**Error: `Could not find gem`**
```bash
bundle install
```

**Error: `Port 4000 in use`**
```bash
# Kill process on port 4000
lsof -ti:4000 | xargs kill -9

# Or use different port
bundle exec jekyll serve --port 4001
```

### Changes Not Showing

1. **Hard refresh browser**: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. **Clear browser cache**
3. **Restart Jekyll server**
4. **Check for errors** in terminal

### Build Errors

**YAML syntax error**:
- Check front matter in markdown files
- Ensure proper indentation
- Use quotes for values with special characters

**Liquid syntax error**:
- Check for unclosed `{% %}` or `{{ }}` tags
- Verify variable names are correct

### Images Not Loading

**Check**:
1. File path is correct (case-sensitive)
2. Image is in `/assets/images/` directory
3. File extension matches (`.jpg` vs `.JPG`)
4. No spaces in filename (use hyphens)

**Fix**:
```bash
# List images to verify
ls assets/images/volunteering/
```

---

## 📝 Git Workflow

### Making Changes

```bash
# 1. Check current status
git status

# 2. Add specific files
git add _volunteering/my-activity.md
git add assets/images/volunteering/my-photo.jpg

# Or add all changes
git add .

# 3. Commit with message
git commit -m "Add new volunteering entry for Habitat for Humanity"

# 4. Push to GitHub
git push origin main
```

### Viewing Commit History

```bash
# See recent commits
git log --oneline -10

# See changes in last commit
git show
```

### Undoing Changes

```bash
# Undo changes to file (before commit)
git checkout -- filename.md

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes - CAREFUL!)
git reset --hard HEAD~1
```

---

## 🎯 Next Steps Checklist

### First-Time Setup
- [ ] Clone project and install dependencies
- [ ] Run local server and verify site loads
- [ ] Review sample content in `samples/` directory
- [ ] Read through all planning documents

### Content Creation
- [ ] Replace sample content with real content
- [ ] Update `_data/resume.yml` with accurate information
- [ ] Add profile photos
- [ ] Create at least 2 volunteering entries
- [ ] Create at least 1 event entry
- [ ] Create at least 1 activity entry
- [ ] Update About page
- [ ] Update Contact page

### Design Customization
- [ ] Verify Catppuccin colors are correctly applied
- [ ] Test theme switcher (light/dark/auto)
- [ ] Customize any colors if desired
- [ ] Test responsive design on multiple devices

### Pre-Launch
- [ ] Follow DEPLOYMENT_CHECKLIST.md
- [ ] Run Lighthouse audit
- [ ] Test on real devices
- [ ] Get feedback from family/friends
- [ ] Make final adjustments

### Launch
- [ ] Push to GitHub
- [ ] Verify live site works
- [ ] Share URL with stakeholders
- [ ] Add to college applications

---

## 📚 Reference Documents

Refer to these documents for detailed guidance:

| Document | Purpose |
|----------|---------|
| **CLAUDE.md** | Technical guidance for development |
| **IMPLEMENTATION_PLAN.md** | Complete roadmap with 10 phases |
| **TECHNICAL_DECISIONS.md** | Rationale for all technical choices |
| **VISUAL_MOCKUP.md** | Design specifications and layouts |
| **CONTENT_TEMPLATES.md** | Templates for creating content |
| **STYLE_GUIDE.md** | Design and brand consistency standards |
| **IMAGE_REQUIREMENTS.md** | Image specifications and checklist |
| **DEPLOYMENT_CHECKLIST.md** | Launch and deployment process |
| **QUICK_START.md** | This document - getting started quickly |

---

## 💡 Tips & Best Practices

### Content Writing
- Write in first person (I, my, me)
- Be specific with numbers and details
- Show growth and reflection, not just achievements
- Keep paragraphs short (3-4 sentences)
- Proofread before committing

### File Naming
- Use lowercase
- Use hyphens for spaces
- Be descriptive
- Include year if relevant
- Examples: `habitat-2024.md`, `science-fair-2024.jpg`

### Git Commits
- Commit frequently (small, focused changes)
- Write clear commit messages
- Test before committing
- Don't commit sensitive information

### Performance
- Optimize images before adding
- Use lazy loading for below-fold images
- Keep total page size under 2MB
- Test on slow connections

---

## 🆘 Getting Help

### Resources

**Jekyll Documentation**:
- Official docs: https://jekyllrb.com/docs/
- Step-by-step tutorial: https://jekyllrb.com/docs/step-by-step/01-setup/

**Catppuccin Theme**:
- Official site: https://catppuccin.com/
- Color palette: https://github.com/catppuccin/catppuccin

**GitHub Pages**:
- Documentation: https://docs.github.com/en/pages
- Custom domains: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

**Troubleshooting**:
- Check GitHub Actions tab for build errors
- Search GitHub issues for similar problems
- Use browser DevTools console for JavaScript errors

### Common Questions

**Q: How do I add a new page?**
A: Create a `.md` file in `pages/` directory with front matter including `layout`, `title`, and `permalink`.

**Q: How do I feature an entry on the homepage?**
A: Set `featured: true` in the entry's front matter.

**Q: How do I change the site title?**
A: Edit `title:` in `_config.yml` (requires server restart).

**Q: How do I test the print resume?**
A: Visit `/resume/print/` and use browser's Print function.

**Q: How do I change navigation links?**
A: Edit `_includes/header.html` and modify navigation links.

---

## ✅ Quick Reference Commands

```bash
# Local Development
bundle install              # Install dependencies
bundle exec jekyll serve    # Start server
bundle exec jekyll build    # Build site (creates _site/)
bundle exec jekyll clean    # Clean build files

# Git Operations
git status                  # Check status
git add .                   # Stage all changes
git commit -m "Message"     # Commit changes
git push origin main        # Push to GitHub
git log --oneline           # View commit history

# Troubleshooting
bundle update              # Update gems
lsof -ti:4000 | xargs kill # Kill port 4000
rm -rf _site .jekyll-cache # Clean build cache
```

---

You're now ready to start building! Refer to IMPLEMENTATION_PLAN.md for the complete phase-by-phase roadmap. 🚀
