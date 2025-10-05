# Style Guide & Brand Standards

**Project**: Paullina Chacin Portfolio Website
**Date**: 2025-10-05
**Purpose**: Maintain visual and content consistency across the portfolio

---

## 🎨 Visual Identity

### Brand Essence
- **Professional**: Polished and appropriate for college admissions
- **Academic**: Scholarly tone with intellectual credibility
- **Modern**: Contemporary design without being trendy
- **Authentic**: Genuine personality and voice throughout
- **Accessible**: Inclusive design for all users

---

## 🌈 Color Palette

### Catppuccin Latte (Light Mode)

#### Primary Colors
```
Base (Background):     #eff1f5  ██████
Mantle:                #e6e9ef  ██████
Crust:                 #dce0e8  ██████
```

#### Text Colors
```
Text (Primary):        #4c4f69  ██████
Subtext 1:             #5c5f77  ██████
Subtext 0:             #6c6f85  ██████
```

#### Surface Colors
```
Surface 2:             #acb0be  ██████
Surface 1:             #bcc0cc  ██████
Surface 0:             #ccd0da  ██████
```

#### Accent Colors
```
Blue (Primary):        #1e66f5  ██████  Links, buttons, accents
Green (Success):       #40a02b  ██████  Success states, positive
Red (Warning):         #d20f39  ██████  Errors, important notices
Mauve:                 #8839ef  ██████  Secondary accent
Teal:                  #179299  ██████  Tertiary accent
```

### Catppuccin Macchiato (Dark Mode)

#### Primary Colors
```
Base (Background):     #24273a  ██████
Mantle:                #1e2030  ██████
Crust:                 #181926  ██████
```

#### Text Colors
```
Text (Primary):        #cad3f5  ██████
Subtext 1:             #b8c0e0  ██████
Subtext 0:             #a5adcb  ██████
```

#### Surface Colors
```
Surface 2:             #5b6078  ██████
Surface 1:             #494d64  ██████
Surface 0:             #363a4f  ██████
```

#### Accent Colors
```
Blue (Primary):        #8aadf4  ██████  Links, buttons, accents
Green (Success):       #a6da95  ██████  Success states, positive
Red (Warning):         #ed8796  ██████  Errors, important notices
Mauve:                 #c6a0f6  ██████  Secondary accent
Teal:                  #8bd5ca  ██████  Tertiary accent
```

### Color Usage Guidelines

**Do:**
- Use blue for primary actions (buttons, links)
- Use green sparingly for success states
- Use red only for errors or critical warnings
- Maintain color contrast ratios ≥ 4.5:1

**Don't:**
- Mix colors from light and dark palettes
- Use colors that don't pass contrast checks
- Overuse accent colors (less is more)
- Use color as the only indicator (accessibility)

---

## 📝 Typography

### Font Families

```css
/* Primary Sans-Serif (UI, Body) */
--font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             "Helvetica Neue", Arial, "Noto Sans", sans-serif;

/* Serif (Optional for emphasis) */
--font-serif: Georgia, Cambria, "Times New Roman", Times, serif;

/* Monospace (Code, technical) */
--font-mono: "SF Mono", Monaco, "Cascadia Code", "Courier New", monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| **Display** | 3rem (48px) | 700 | 1.1 | Hero headings |
| **H1** | 2.5rem (40px) | 700 | 1.2 | Page titles |
| **H2** | 2rem (32px) | 700 | 1.2 | Section headings |
| **H3** | 1.5rem (24px) | 600 | 1.3 | Subsection headings |
| **H4** | 1.25rem (20px) | 600 | 1.4 | Card titles |
| **Body Large** | 1.125rem (18px) | 400 | 1.6 | Intro paragraphs |
| **Body** | 1rem (16px) | 400 | 1.6 | Default text |
| **Small** | 0.875rem (14px) | 400 | 1.5 | Captions, metadata |
| **Tiny** | 0.75rem (12px) | 400 | 1.4 | Fine print |

### Typography Guidelines

**Headings:**
- Use sentence case for most headings
- Use title case for major page titles only
- Keep headings concise (< 60 characters)
- Maintain clear hierarchy (H1 → H2 → H3)

**Body Text:**
- Line length: 60-75 characters (optimal readability)
- Paragraph spacing: 1.5-2x line height
- Use bold sparingly for emphasis
- Use italics for quotes or subtle emphasis

**Links:**
- Underline in body text (accessibility)
- Blue color (both modes)
- No underline in navigation
- Hover state: slight color change + underline

---

## 🧱 Components

### Buttons

#### Primary Button
```
Visual:   [Download Resume]
Style:    Blue background, white text, rounded corners
Size:     Padding: 12px 24px, Font: 16px
Hover:    Slightly brighter, subtle lift shadow
Active:   Slightly darker, pressed effect
```

#### Secondary Button
```
Visual:   [Read More →]
Style:    Transparent background, blue border & text
Size:     Padding: 10px 20px, Font: 16px
Hover:    Blue background, white text transition
Active:   Slightly darker blue
```

#### Text Link Button
```
Visual:   Learn more →
Style:    Blue text, no border, arrow on right
Hover:    Underline appears, arrow moves right
```

**Usage:**
- Primary: Main call-to-actions (Download Resume, Contact Me)
- Secondary: Navigational actions (View Details, Explore More)
- Text Link: Inline content navigation (Read more about...)

### Cards

```
┌─────────────────────────────┐
│ ┌─────┐                     │
│ │ Img │ Card Title          │  ← Heading style
│ └─────┘                     │
│         Metadata text       │  ← Small text, muted color
│                             │
│         Description text... │  ← Body text
│                             │
│         [Button/Link]       │
└─────────────────────────────┘
```

**Styling:**
- Background: Card surface color (light mode: white, dark mode: surface-0)
- Border: 1px solid overlay color
- Border radius: 8px
- Padding: 1.5rem (24px)
- Shadow (hover): subtle lift shadow
- Transition: 0.2s ease

### Badges/Tags

```
[Volunteer]  [Leadership]  [STEM]
```

**Styling:**
- Background: Surface color
- Text: Primary text color
- Padding: 4px 12px
- Border radius: 16px (pill shape)
- Font size: 0.75rem (12px)
- Text transform: uppercase
- Letter spacing: 0.05em

**Color Variants:**
- Default: Gray background
- Category: Blue background (light opacity)
- Skill: Green background (light opacity)

### Navigation

**Desktop:**
```
[Home] [About] [Volunteering] [Events] [Activities] [Resume] [Contact]
```

**Mobile:**
```
[Logo]                                    [☰] [🌙]

↓ When hamburger clicked ↓

┌──────────────────┐
│ [✕]              │
├──────────────────┤
│ Home             │
│ About            │
│ Volunteering     │
│ Events           │
│ Activities       │
│ Resume           │
│ Contact          │
└──────────────────┘
```

**Styling:**
- Background: Surface color with slight transparency
- Active link: Blue text, bottom border
- Hover: Blue text, subtle underline animation
- Mobile menu: Slide from right, overlay backdrop

---

## 📐 Spacing System

### Spacing Scale (rem)
```
--space-xs:   0.25rem  (4px)   Tiny gaps
--space-sm:   0.5rem   (8px)   Small spacing
--space-md:   1rem     (16px)  Default spacing
--space-lg:   1.5rem   (24px)  Section spacing
--space-xl:   2rem     (32px)  Large spacing
--space-2xl:  3rem     (48px)  Major sections
--space-3xl:  4rem     (64px)  Page sections
```

### Layout Spacing

**Component Spacing:**
- Card padding: `--space-lg` (24px)
- Button padding: `--space-sm --space-lg` (8px 24px)
- Section padding: `--space-2xl` (48px) vertical

**Content Spacing:**
- Paragraph margin bottom: `--space-md` (16px)
- Heading margin top: `--space-xl` (32px)
- Heading margin bottom: `--space-md` (16px)
- List item spacing: `--space-sm` (8px)

---

## 📱 Responsive Design

### Breakpoints
```scss
$mobile:  576px   // Small phones
$tablet:  768px   // Tablets, large phones
$desktop: 1024px  // Desktop, laptop
$wide:    1440px  // Large desktop
```

### Layout Behavior

**Container Max-Width:**
- Mobile: 100% (with 16px padding)
- Tablet: 720px
- Desktop: 960px
- Wide: 1200px

**Grid System:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

**Navigation:**
- Mobile: Hamburger menu
- Tablet: Hamburger menu
- Desktop+: Full horizontal menu

### Responsive Typography

```scss
// Base font size scales with viewport
html {
  font-size: 16px;  // Mobile

  @media (min-width: $tablet) {
    font-size: 17px;
  }

  @media (min-width: $desktop) {
    font-size: 18px;
  }
}
```

---

## ✍️ Content Style

### Voice & Tone

**Voice** (consistent personality):
- Authentic and genuine
- Thoughtful and reflective
- Confident but humble
- Professional yet personable

**Tone** (adjusts by context):
- Resume: Formal, concise, achievement-focused
- About: Personal, warm, conversational
- Activities: Enthusiastic, detailed, reflective
- Contact: Welcoming, professional, approachable

### Writing Guidelines

**Do:**
- Use active voice ("I led" not "I was responsible for leading")
- Be specific with details and numbers
- Show growth and learning, not just accomplishments
- Use personal pronouns (I, my, me)
- Write conversational sentences
- Break up long paragraphs (3-4 sentences max)

**Don't:**
- Use clichés ("hit the ground running", "think outside the box")
- Overuse superlatives ("amazing", "incredible", "awesome")
- Write in third person ("Paullina is...")
- Use passive voice excessively
- Include unnecessary jargon
- Make unsupported claims

### Grammar & Style

**Numbers:**
- Spell out one through nine
- Use numerals for 10 and above
- Use numerals for measurements (5 hours, 3 miles)
- Use commas for thousands (1,000+)

**Dates:**
- Format: Month YYYY (June 2024)
- Ranges: June 2024 - Present
- Current activities: "Present" not "Current"

**Lists:**
- Use bullet points for unordered items
- Use parallel structure (all start with verbs or all nouns)
- Capitalize first word
- No periods unless complete sentences

**Capitalization:**
- Titles: Sentence case ("Building homes for families")
- Proper nouns: Always capitalized
- Positions: Capitalize when before name, lowercase when after

---

## 🖼️ Imagery Guidelines

### Photography Style

**Portrait/Headshots:**
- Professional but approachable
- Natural lighting preferred
- Clean, uncluttered background
- Subject looking at camera
- Smile genuine and warm

**Activity Photos:**
- Candid action shots preferred
- Show genuine involvement
- Include context (location, activity)
- High resolution (min 1200px wide)
- Good lighting and focus

**Event Photos:**
- Include people when appropriate
- Capture moments of achievement
- Show projects/presentations clearly
- Avoid overly posed shots

### Image Technical Requirements

**File Formats:**
- Photos: JPG or WebP
- Graphics/illustrations: SVG or PNG
- Icons: SVG preferred

**Optimization:**
- Hero images: < 300KB
- Card images: < 150KB
- Thumbnails: < 50KB
- Use compression tools (ImageOptim, TinyPNG)

**Dimensions:**
- Profile photo (hero): 600x600px (displayed as circular)
- Profile photo (about): 800x800px
- Card thumbnails: 400x300px (4:3 ratio)
- Hero banners: 1600x1000px (16:10 ratio)
- Gallery images: 1200x800px (3:2 ratio)

**Responsive Images:**
```html
<img
  src="image.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Descriptive alt text"
  loading="lazy"
>
```

### Alt Text Guidelines

**Do:**
- Describe what's happening in the image
- Include relevant context
- Keep under 125 characters when possible
- Use proper punctuation

**Don't:**
- Start with "Image of..." or "Picture of..."
- Include "photo" or "graphic" (implied)
- Repeat information from surrounding text
- Leave alt text empty (unless purely decorative)

**Examples:**
- ❌ "Image of Paullina"
- ✅ "Paullina presenting research poster at regional science fair"
- ❌ "Construction photo"
- ✅ "Building home frame with Habitat for Humanity volunteers"

---

## ♿ Accessibility Standards

### WCAG 2.1 AA Compliance

**Color Contrast:**
- Text: Minimum 4.5:1 ratio
- Large text (18pt+): Minimum 3:1 ratio
- UI components: Minimum 3:1 ratio
- Test with WebAIM Contrast Checker

**Keyboard Navigation:**
- All interactive elements accessible via Tab
- Focus indicators visible (outline)
- Logical tab order (top to bottom, left to right)
- Skip to main content link

**Semantic HTML:**
- Proper heading hierarchy (H1 → H2 → H3)
- Use `<nav>`, `<main>`, `<article>`, `<section>`
- Use `<button>` for buttons, `<a>` for links
- Form labels associated with inputs

**ARIA Labels:**
```html
<!-- Icon buttons need labels -->
<button aria-label="Toggle dark mode">🌙</button>

<!-- Navigation landmark -->
<nav aria-label="Primary navigation">...</nav>

<!-- Expandable sections -->
<button aria-expanded="false" aria-controls="menu">☰</button>
```

**Focus Management:**
- Visible focus indicators (never `outline: none` without replacement)
- Focus trapping in modals
- Restore focus when closing dialogs
- Skip navigation link at top

### Testing Checklist

- [ ] Test with keyboard only (no mouse)
- [ ] Test with screen reader (VoiceOver, NVDA)
- [ ] Verify color contrast with WebAIM tool
- [ ] Run Lighthouse accessibility audit
- [ ] Check heading structure (browser extension)
- [ ] Verify all images have alt text
- [ ] Test form labels and error messages
- [ ] Check focus indicators visibility

---

## 🎬 Animation & Motion

### Motion Principles

**Purpose:**
- Provide feedback (button clicks, hovers)
- Guide attention (smooth scrolling)
- Add polish (subtle transitions)

**Never:**
- Animate for decoration alone
- Use jarring or distracting motion
- Ignore `prefers-reduced-motion`

### Animation Duration

```
Micro-interactions:  100-200ms   (Hover, focus)
Transitions:         200-300ms   (State changes)
Entrances/Exits:     300-400ms   (Modals, menus)
Page transitions:    400-500ms   (Route changes)
```

### Easing Functions

```css
--ease-in:      cubic-bezier(0.4, 0, 1, 1);       /* Accelerate */
--ease-out:     cubic-bezier(0, 0, 0.2, 1);       /* Decelerate */
--ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1);     /* Smooth */
--ease-bounce:  cubic-bezier(0.68, -0.55, 0.265, 1.55);  /* Playful */
```

### Standard Transitions

```scss
// Hover effects
.card {
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
}

// Theme switching
* {
  transition: background-color 0.3s ease, color 0.3s ease;
}

// Modal entrance
.modal {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Reduced Motion

```scss
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🔍 SEO & Metadata

### Page Titles

Format: `[Page Name] | Paullina Chacin`

Examples:
- Homepage: `Paullina Chacin | High School Portfolio`
- About: `About | Paullina Chacin`
- Resume: `Resume | Paullina Chacin`
- Collection: `Volunteering | Paullina Chacin`
- Entry: `Habitat for Humanity | Paullina Chacin`

### Meta Descriptions

**Length**: 150-160 characters
**Content**: Specific, relevant, includes keywords

Examples:
```html
<!-- Homepage -->
<meta name="description" content="Portfolio of Paullina Chacin, high school junior. Showcasing volunteer work, academic achievements, debate team leadership, and college preparation.">

<!-- About -->
<meta name="description" content="Learn about Paullina Chacin, a high school junior passionate about STEM, community service, and leadership. Preparing for college with strong academics and involvement.">

<!-- Activity Entry -->
<meta name="description" content="Paullina Chacin's experience as Debate Team Captain: leading team to state semifinals, mentoring debaters, and developing critical thinking skills.">
```

### Open Graph Tags

```html
<meta property="og:title" content="Paullina Chacin | High School Portfolio">
<meta property="og:description" content="Portfolio showcasing volunteer work, academic achievements, and extracurricular leadership.">
<meta property="og:image" content="https://paulinachacin.com/assets/og-image.jpg">
<meta property="og:url" content="https://paulinachacin.com">
<meta property="og:type" content="website">
```

### Structured Data (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Paullina Chacin",
  "url": "https://paulinachacin.com",
  "image": "https://paulinachacin.com/assets/profile.jpg",
  "jobTitle": "High School Student",
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "[High School Name]"
  },
  "sameAs": [
    "https://www.linkedin.com/in/paullina-chacin"
  ]
}
```

---

## 📋 Quality Checklist

### Before Publishing Any Page

**Content:**
- [ ] Proofread for spelling and grammar
- [ ] Check facts and dates for accuracy
- [ ] Verify links work (no 404s)
- [ ] Ensure consistent voice and tone
- [ ] Remove placeholder text

**Design:**
- [ ] Test on mobile, tablet, desktop
- [ ] Verify color contrast passes WCAG AA
- [ ] Check typography hierarchy is clear
- [ ] Ensure proper spacing and alignment
- [ ] Test dark and light modes

**Technical:**
- [ ] Validate HTML (W3C Validator)
- [ ] Check page load speed (< 2s)
- [ ] Verify images are optimized
- [ ] Test all interactive elements
- [ ] Run Lighthouse audit (score > 90)

**Accessibility:**
- [ ] All images have alt text
- [ ] Heading hierarchy is logical
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Screen reader tested

**SEO:**
- [ ] Title tag is descriptive and unique
- [ ] Meta description under 160 characters
- [ ] Open Graph tags present
- [ ] Structured data added (if applicable)
- [ ] URL is clean and descriptive

---

This style guide ensures consistency across the portfolio. Refer to it when creating new content or making design decisions!
