# Deployment & Launch Checklist

**Project**: Paullina Chacin Portfolio Website
**Date**: 2025-10-05
**Purpose**: Step-by-step checklist for deploying to GitHub Pages

---

## 🚀 Pre-Deployment Checklist

### Content Completeness

- [ ] All placeholder text replaced with real content
- [ ] Profile photos added and optimized
- [ ] At least 2 volunteering entries published
- [ ] At least 1 event entry published
- [ ] At least 1 activity entry published
- [ ] About page content finalized
- [ ] Resume data complete and accurate
- [ ] Contact information added (email, phone)
- [ ] All internal links verified (no broken links)
- [ ] All external links verified (open in new tabs where appropriate)

### Image Optimization

- [ ] All images compressed (< target file sizes)
- [ ] All images have descriptive alt text
- [ ] Profile photos are properly cropped (circular display)
- [ ] Favicon files generated and added
- [ ] Open Graph image created and added
- [ ] No EXIF data with location info in photos
- [ ] Total image payload < 5MB

### Design & Styling

- [ ] Catppuccin Latte theme fully implemented
- [ ] Catppuccin Macchiato theme fully implemented
- [ ] Theme switcher working (light/dark/auto)
- [ ] Theme preference persists (localStorage)
- [ ] All pages styled consistently
- [ ] Navigation menu working on desktop
- [ ] Navigation menu working on mobile (hamburger)
- [ ] All buttons have proper hover states
- [ ] All links have proper hover states
- [ ] Spacing consistent across pages
- [ ] Typography hierarchy clear

### Responsive Design

- [ ] Test on mobile (320px - 767px)
- [ ] Test on tablet (768px - 1023px)
- [ ] Test on desktop (1024px+)
- [ ] Test on wide screen (1440px+)
- [ ] Images scale properly on all devices
- [ ] Text readable on all screen sizes
- [ ] Navigation works on all devices
- [ ] No horizontal scrolling issues

### Accessibility

- [ ] Color contrast ratios ≥ 4.5:1 (test with WebAIM)
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible on all elements
- [ ] Heading hierarchy logical (H1 → H2 → H3)
- [ ] ARIA labels on icon buttons
- [ ] Skip to main content link present
- [ ] All images have alt text
- [ ] Forms have proper labels (if any)
- [ ] Lighthouse accessibility score ≥ 90

### Performance

- [ ] Page load time < 2 seconds (test with Lighthouse)
- [ ] Images lazy-loaded (except above fold)
- [ ] CSS minified
- [ ] JavaScript minified (if any)
- [ ] No unnecessary dependencies
- [ ] Lighthouse performance score ≥ 85
- [ ] Test on slow 3G connection

### SEO & Metadata

- [ ] Unique title tags on all pages
- [ ] Meta descriptions on all pages (< 160 chars)
- [ ] Open Graph tags configured
- [ ] Canonical URLs set
- [ ] robots.txt configured
- [ ] sitemap.xml generated
- [ ] Structured data (JSON-LD) for Person schema
- [ ] Lighthouse SEO score ≥ 90

### Code Quality

- [ ] HTML validates (W3C Validator)
- [ ] CSS validates
- [ ] No console errors in browser
- [ ] No broken links (check with link checker)
- [ ] Comments removed or minimized in production
- [ ] Debug code removed
- [ ] Test all forms and interactive features

### Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest, if on Mac)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Privacy & Security

- [ ] No sensitive information in code
- [ ] Email/phone obfuscated or protected
- [ ] No API keys or tokens exposed
- [ ] HTTPS enforced (GitHub Pages default)
- [ ] Review all images for privacy concerns
- [ ] No personal information in git history

---

## 🔧 GitHub Pages Setup

### Repository Configuration

- [ ] Repository created: `[username].github.io`
- [ ] Repository is public (required for free GitHub Pages)
- [ ] Main branch set as default
- [ ] Repository description added
- [ ] Topics/tags added (jekyll, portfolio, github-pages)

### GitHub Pages Settings

1. **Navigate to Settings → Pages**

- [ ] Source: Deploy from branch
- [ ] Branch: `main` (or `master`)
- [ ] Folder: `/ (root)`
- [ ] Save settings

2. **Custom Domain** (optional, if using paulinachacin.com)

- [ ] Add custom domain in settings
- [ ] Update DNS records with domain provider:
  - A records pointing to GitHub IPs:
    - 185.199.108.153
    - 185.199.109.153
    - 185.199.110.153
    - 185.199.111.153
  - CNAME record: `www` → `[username].github.io`
- [ ] Enforce HTTPS (after DNS propagates)

### _config.yml Configuration

```yaml
# Required for GitHub Pages
url: "https://paulinachacin.com"  # or https://[username].github.io
baseurl: ""  # Leave empty for user pages

# Build settings
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap

# Exclude from build
exclude:
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor
  - samples/
  - "*.md"  # Excludes all .md files in root except index.md, about.md, etc.
```

Checklist:
- [ ] URL configured correctly
- [ ] Baseurl empty (for user pages)
- [ ] Plugins listed
- [ ] Exclude list configured
- [ ] Site title, description, email updated

---

## 📦 Pre-Deployment Build Test

### Local Testing

1. **Clean build**:
```bash
bundle exec jekyll clean
bundle exec jekyll build
```
- [ ] Build completes without errors
- [ ] No warnings about missing files
- [ ] `_site` directory generated

2. **Serve locally**:
```bash
bundle exec jekyll serve
```
- [ ] Site loads at http://localhost:4000
- [ ] All pages render correctly
- [ ] Navigation works
- [ ] Images load
- [ ] Theme switching works

3. **Test all pages**:
- [ ] Homepage (/)
- [ ] About (/about/)
- [ ] Volunteering (/volunteering/)
- [ ] Events (/events/)
- [ ] Activities (/activities/)
- [ ] Resume (/resume/)
- [ ] Resume Print (/resume/print/)
- [ ] Contact (/contact/)
- [ ] Individual collection items

4. **Print resume test**:
- [ ] Open /resume/print/
- [ ] Use browser Print → Save as PDF
- [ ] Verify PDF looks professional
- [ ] No navigation/theme switcher in PDF

---

## 🌐 Deployment Process

### Step 1: Final Commit

```bash
git status  # Verify all changes
git add .
git commit -m "Final pre-launch commit: content, images, and optimizations complete"
```

Checklist:
- [ ] All changes committed
- [ ] Meaningful commit message
- [ ] No uncommitted files

### Step 2: Push to GitHub

```bash
git push origin main
```

Checklist:
- [ ] Push successful
- [ ] No errors during push
- [ ] Verify on GitHub.com that files are updated

### Step 3: Wait for GitHub Pages Build

- [ ] Go to repository → Actions tab
- [ ] Watch "pages build and deployment" workflow
- [ ] Wait for green checkmark (usually 1-3 minutes)
- [ ] Check for any build errors

### Step 4: Verify Deployment

- [ ] Visit live URL (https://[username].github.io or custom domain)
- [ ] Site loads successfully
- [ ] HTTPS works (padlock icon in browser)
- [ ] Homepage renders correctly

---

## ✅ Post-Deployment Verification

### Functionality Testing

- [ ] All navigation links work
- [ ] Theme switcher works on live site
- [ ] Theme preference persists across page loads
- [ ] Mobile navigation (hamburger menu) works
- [ ] All images load correctly
- [ ] Resume PDF download button works (if PDF uploaded)
- [ ] External links open in new tabs
- [ ] Collection list pages work
- [ ] Individual collection items load
- [ ] About page loads
- [ ] Contact page loads

### Performance Testing

**Run Lighthouse Audit** (Chrome DevTools):
- [ ] Performance score ≥ 85
- [ ] Accessibility score ≥ 90
- [ ] Best Practices score ≥ 90
- [ ] SEO score ≥ 90

**PageSpeed Insights** (https://pagespeed.web.dev):
- [ ] Run test on live URL
- [ ] Mobile score ≥ 80
- [ ] Desktop score ≥ 90
- [ ] Review suggestions, implement if critical

### SEO Verification

**Google Search Console**:
- [ ] Add property for site URL
- [ ] Verify ownership (DNS or HTML file method)
- [ ] Submit sitemap.xml
- [ ] Request indexing for key pages

**Social Media Preview Test**:
- [ ] Test Open Graph with https://www.opengraph.xyz/
- [ ] Verify correct title, description, and image appear
- [ ] Test on Twitter Card validator (if using Twitter)
- [ ] Test by actually sharing on LinkedIn or social media

### Cross-Browser Testing (Live Site)

- [ ] Chrome desktop (latest)
- [ ] Firefox desktop (latest)
- [ ] Safari desktop (latest, Mac)
- [ ] Edge desktop (latest)
- [ ] Chrome mobile (Android/iOS)
- [ ] Safari mobile (iOS)

### Real Device Testing

- [ ] Test on actual mobile phone
- [ ] Test on actual tablet
- [ ] Test on laptop
- [ ] Test on large desktop monitor
- [ ] Verify responsive images load appropriate sizes

---

## 📊 Monitoring & Analytics (Optional)

### Analytics Setup

**Option 1: Plausible Analytics** (privacy-friendly):
- [ ] Create Plausible account
- [ ] Add site
- [ ] Add tracking script to `_includes/head.html`
- [ ] Verify tracking works

**Option 2: Google Analytics 4** (more detailed):
- [ ] Create GA4 property
- [ ] Add tracking ID to _config.yml
- [ ] Configure jekyll-analytics plugin
- [ ] Verify tracking works
- [ ] Set up privacy policy if using GA

**Option 3: Simple Analytics**:
- [ ] Create Simple Analytics account
- [ ] Add tracking script
- [ ] Verify tracking works

Checklist:
- [ ] Analytics installed (if desired)
- [ ] Tracking verified
- [ ] Privacy policy updated (if needed)

### Uptime Monitoring (Optional)

**Free Options**:
- UptimeRobot (https://uptimerobot.com)
- StatusCake (https://www.statuscake.com)

Checklist:
- [ ] Monitor configured for main URL
- [ ] Email alerts set up
- [ ] Test alert by pausing site temporarily

---

## 🔒 Security Checklist

- [ ] HTTPS enforced (GitHub Pages provides free SSL)
- [ ] No sensitive data in repository
- [ ] No API keys or secrets exposed
- [ ] Email address obfuscated or protected from scrapers
- [ ] Phone number not in plain text (or protected)
- [ ] No personal information in git commit history
- [ ] Dependencies up to date (run `bundle update`)

---

## 📢 Launch Announcement

### Share With Stakeholders

- [ ] Share URL with family
- [ ] Get feedback from trusted friends/teachers
- [ ] Make any quick fixes based on feedback

### Professional Network (When Ready)

- [ ] Add to college applications
- [ ] Share on LinkedIn
- [ ] Add to email signature
- [ ] Include in resume

---

## 🐛 Troubleshooting Common Issues

### Site Not Building

**Check**:
- [ ] Look at Actions tab for build errors
- [ ] Verify `_config.yml` syntax (use YAML validator)
- [ ] Check for missing dependencies in Gemfile
- [ ] Ensure all front matter is valid YAML

**Fix**:
```bash
# Test build locally first
bundle exec jekyll build --verbose
# Look for specific error messages
```

### Images Not Loading

**Check**:
- [ ] Verify image paths are correct (case-sensitive)
- [ ] Ensure images are in `/assets/images/` directory
- [ ] Check file extensions match (jpg vs JPG)
- [ ] Verify images aren't in `.gitignore`

### Theme Not Switching

**Check**:
- [ ] Browser console for JavaScript errors
- [ ] Verify theme.js is loaded
- [ ] Check localStorage permissions in browser
- [ ] Clear browser cache and test

### Custom Domain Not Working

**Check**:
- [ ] DNS records configured correctly (use DNS checker)
- [ ] Wait 24-48 hours for DNS propagation
- [ ] CNAME file in repository root with domain name
- [ ] GitHub Pages settings show custom domain

---

## 📅 Ongoing Maintenance

### Weekly

- [ ] Check for broken links (use online checker)
- [ ] Review analytics (if installed)
- [ ] Respond to any contact form submissions

### Monthly

- [ ] Add new achievements/activities as they occur
- [ ] Update resume data
- [ ] Check for Jekyll/dependency updates
- [ ] Review and respond to any GitHub issues

### Quarterly

- [ ] Refresh content (update dates, remove old items)
- [ ] Update photos if better ones available
- [ ] Review analytics and make improvements
- [ ] Run full Lighthouse audit
- [ ] Update resume PDF if using separate file

### Before College Applications

- [ ] Final content review and polish
- [ ] Ensure all recent achievements included
- [ ] Verify contact information current
- [ ] Test all links and functionality
- [ ] Get feedback from counselor/teacher
- [ ] Create PDF backup of entire site (just in case)

---

## 🎉 Launch Day Checklist

**Morning of Launch**:
- [ ] Final local build test
- [ ] Final content proofread
- [ ] All images optimized
- [ ] Clear browser cache
- [ ] Final commit and push
- [ ] Wait for build to complete
- [ ] Verify live site
- [ ] Run Lighthouse audit
- [ ] Test on mobile device
- [ ] Share with immediate family for feedback
- [ ] Take screenshot for records

**Within 24 Hours**:
- [ ] Monitor for any issues
- [ ] Check analytics (if installed)
- [ ] Verify search console indexing
- [ ] Make any urgent fixes

**Within 1 Week**:
- [ ] Gather feedback from trusted sources
- [ ] Make minor improvements
- [ ] Add to college application materials
- [ ] Celebrate! 🎊

---

## 📝 Emergency Rollback Procedure

If something breaks after deployment:

```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or rollback to specific commit
git reset --hard [commit-hash]
git push origin main --force
```

**Important**: Only force push if absolutely necessary and understand the consequences.

---

This checklist ensures a smooth, successful deployment to GitHub Pages!
