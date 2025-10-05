# Visual Mockup & Design Specification

**Project**: Paullina Chacin Portfolio Website
**Date**: 2025-10-05
**Purpose**: Detailed visual descriptions for implementation reference

---

## 🎨 Design Philosophy

**Core Principles**:
- **Clean & Academic**: Professional design suitable for college admissions
- **Modern but Timeless**: Contemporary without being trendy
- **Content-First**: Design serves the content, not the other way around
- **Accessible**: WCAG AA compliant, readable for everyone
- **Catppuccin Colors**: Latte (light) and Macchiato (dark) palettes

---

## 📱 Responsive Breakpoints

```
Mobile:   320px - 767px   (single column, stacked)
Tablet:   768px - 1023px  (2 columns where appropriate)
Desktop:  1024px - 1439px (full layout)
Wide:     1440px+         (max-width container)
```

---

## 🏠 Homepage Design

### Desktop Layout (1024px+)

```
┌─────────────────────────────────────────────────────────────────┐
│  [LOGO/NAME]              [Home] [About] [...] [Resume] [Contact]│
│                                                    [🌙 Theme]     │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   ┌──────────────────┐    ┌──────────────────────────────┐      │
│   │                  │    │                              │      │
│   │   Professional   │    │   PAULLINA CHACIN            │      │
│   │   Headshot       │    │   High School Junior         │      │
│   │   (Circular)     │    │   Class of 2026              │      │
│   │   300x300px      │    │                              │      │
│   │                  │    │   Brief introduction para-   │      │
│   └──────────────────┘    │   graph highlighting passion │      │
│                           │   for learning, community    │      │
│                           │   service, and academic      │      │
│                           │   excellence.                │      │
│                           │                              │      │
│                           │   [Download Resume Button]   │      │
│                           └──────────────────────────────┘      │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                     FEATURED HIGHLIGHTS                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐ │
│   │ 🤝 Volunteering  │  │ 🎓 Events        │  │ ⚡ Activities │ │
│   ├──────────────────┤  ├──────────────────┤  ├──────────────┤ │
│   │ Habitat for      │  │ Science Fair     │  │ Debate Team  │ │
│   │ Humanity         │  │ Regional Winner  │  │ Captain      │ │
│   │                  │  │                  │  │              │ │
│   │ 40+ hours        │  │ 1st Place        │  │ State Semi-  │ │
│   │ building homes   │  │ Biology Project  │  │ finalist     │ │
│   │                  │  │                  │  │              │ │
│   │ [Read More]      │  │ [Read More]      │  │ [Read More]  │ │
│   └──────────────────┘  └──────────────────┘  └──────────────┘ │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                     EXPLORE MY PORTFOLIO                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   ┌────────────────┐  ┌────────────────┐  ┌────────────────┐   │
│   │ 📚             │  │ 🏆             │  │ 🎯             │   │
│   │ VOLUNTEERING   │  │ EVENTS         │  │ ACTIVITIES     │   │
│   │ Community      │  │ Competitions   │  │ Leadership &   │   │
│   │ Service        │  │ & Achievements │  │ Clubs          │   │
│   │ [Explore →]    │  │ [Explore →]    │  │ [Explore →]    │   │
│   └────────────────┘  └────────────────┘  └────────────────┘   │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│  Footer: © 2025 Paullina Chacin | Built with Jekyll             │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile Layout (320px - 767px)

```
┌────────────────────┐
│ PAULLINA CHACIN    │
│        [☰]   [🌙]  │
├────────────────────┤
│                    │
│   ┌──────────┐     │
│   │          │     │
│   │  Photo   │     │
│   │  200px   │     │
│   │          │     │
│   └──────────┘     │
│                    │
│  PAULLINA CHACIN   │
│  High School Junior│
│  Class of 2026     │
│                    │
│  Introduction text │
│  stacked below...  │
│                    │
│  [Download Resume] │
│                    │
├────────────────────┤
│ FEATURED HIGHLIGHTS│
├────────────────────┤
│                    │
│ ┌────────────────┐ │
│ │ 🤝 Volunteering│ │
│ │ Habitat for... │ │
│ │ [Read More]    │ │
│ └────────────────┘ │
│                    │
│ ┌────────────────┐ │
│ │ 🎓 Events      │ │
│ │ Science Fair...| │
│ │ [Read More]    │ │
│ └────────────────┘ │
│                    │
│ ┌────────────────┐ │
│ │ ⚡ Activities  │ │
│ │ Debate Team... │ │
│ │ [Read More]    │ │
│ └────────────────┘ │
│                    │
├────────────────────┤
│   EXPLORE          │
├────────────────────┤
│ [Volunteering →]   │
│ [Events →]         │
│ [Activities →]     │
└────────────────────┘
```

---

## 📄 Collection List Pages

### Volunteering, Events, Activities (Similar Layout)

**Desktop:**

```
┌─────────────────────────────────────────────────────────────────┐
│  Navigation (same as homepage)                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   VOLUNTEERING                                                    │
│   ═══════════════════════════════════════════════              │
│                                                                   │
│   Community service activities and volunteer work                │
│                                                                   │
│   [Filter: All | Community | Environment | Education]            │
│   [Sort: Most Recent | Oldest | Hours]                           │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   ┌────────────────────────────────────────────────────────┐    │
│   │ ┌──────┐                                               │    │
│   │ │Image │  Habitat for Humanity - House Build           │    │
│   │ │150px │  June 2024 | 40 hours                         │    │
│   │ └──────┘                                               │    │
│   │           Helped build homes for two local families.   │    │
│   │           Led framing crew of 5 volunteers.            │    │
│   │                                                         │    │
│   │           Skills: Leadership, Teamwork, Construction   │    │
│   │                                            [Read More →]│    │
│   └────────────────────────────────────────────────────────┘    │
│                                                                   │
│   ┌────────────────────────────────────────────────────────┐    │
│   │ ┌──────┐                                               │    │
│   │ │Image │  Food Bank Volunteer                          │    │
│   │ │150px │  Jan 2024 - Present | 25 hours                │    │
│   │ └──────┘                                               │    │
│   │           Weekly volunteer sorting and packing food... │    │
│   │                                                         │    │
│   │           Skills: Community Service, Organization      │    │
│   │                                            [Read More →]│    │
│   └────────────────────────────────────────────────────────┘    │
│                                                                   │
│   [Load More]                                                     │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Mobile:** Same but stacked vertically, image above title.

---

## 📝 Individual Entry Page

**Desktop:**

```
┌─────────────────────────────────────────────────────────────────┐
│  Navigation                                                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   ← Back to Volunteering                                         │
│                                                                   │
│   HABITAT FOR HUMANITY - HOUSE BUILD                             │
│   ═══════════════════════════════════════                        │
│                                                                   │
│   📅 June 2024 | ⏱️ 40 hours | 📍 Local Chapter                 │
│   🏷️ Tags: Construction, Leadership, Teamwork                    │
│                                                                   │
│   ┌────────────────────────────────────────┐                     │
│   │                                        │                     │
│   │         Featured Image                 │                     │
│   │         (800x500px)                    │                     │
│   │                                        │                     │
│   └────────────────────────────────────────┘                     │
│                                                                   │
│   OVERVIEW                                                        │
│   ─────────────────────────────────────────                     │
│   Participated in building two homes for local families in need. │
│   Worked alongside experienced contractors and fellow volunteers │
│   over 5 weekend sessions.                                       │
│                                                                   │
│   MY ROLE                                                         │
│   ─────────────────────────────────────────                     │
│   • Led framing crew of 5 volunteers                             │
│   • Assisted with electrical wiring installation                 │
│   • Coordinated tool inventory and safety equipment              │
│                                                                   │
│   IMPACT                                                          │
│   ─────────────────────────────────────────                     │
│   Helped provide safe, affordable housing for two families.      │
│   Learned construction skills and project management.            │
│                                                                   │
│   SKILLS DEVELOPED                                                │
│   ─────────────────────────────────────────                     │
│   [Leadership] [Teamwork] [Construction] [Project Management]    │
│                                                                   │
│   GALLERY (Optional)                                              │
│   ─────────────────────────────────────────                     │
│   [Image 1] [Image 2] [Image 3]                                  │
│                                                                   │
│   ────────────────────────────────────────────────────           │
│                                                                   │
│   RELATED ACTIVITIES                                              │
│   • Food Bank Volunteer                                           │
│   • Community Clean-up Day                                        │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 👤 About Page

**Desktop:**

```
┌─────────────────────────────────────────────────────────────────┐
│  Navigation                                                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   ┌──────────────┐        ABOUT ME                               │
│   │              │        ════════════════                        │
│   │  Photo       │                                                │
│   │  (Larger)    │        Hi, I'm Paullina Chacin, a high school │
│   │  400x400px   │        junior passionate about science,       │
│   │  Circular    │        community service, and leadership.     │
│   │              │                                                │
│   └──────────────┘        I'm currently preparing for college... │
│                                                                   │
│                           [Extended bio paragraph]                │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   MY SKILLS                                                       │
│   ══════════════════════════════════════════                     │
│                                                                   │
│   Leadership & Communication                                      │
│   ████████████████░░░░  80%                                      │
│                                                                   │
│   Research & Analysis                                             │
│   ██████████████████░░  90%                                      │
│                                                                   │
│   Public Speaking                                                 │
│   ██████████████░░░░░░  75%                                      │
│                                                                   │
│   Project Management                                              │
│   ██████████████░░░░░░  70%                                      │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   INTERESTS & PASSIONS                                            │
│   ══════════════════════════════════════════                     │
│                                                                   │
│   🔬 STEM Education                                               │
│   Passionate about biology and environmental science              │
│                                                                   │
│   🤝 Community Service                                            │
│   Dedicated to helping underserved communities                    │
│                                                                   │
│   📚 Debate & Public Speaking                                     │
│   Love engaging in intellectual discourse and persuasion          │
│                                                                   │
│   🌍 Environmental Conservation                                   │
│   Committed to sustainability and protecting natural resources    │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   ACADEMIC GOALS                                                  │
│   ══════════════════════════════════════════                     │
│                                                                   │
│   I aspire to study [field] at a university that values both     │
│   academic excellence and community engagement...                 │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📄 Resume Page

### Web View (Desktop)

```
┌─────────────────────────────────────────────────────────────────┐
│  Navigation                                                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   RESUME                                    [📥 Download PDF]     │
│   ═══════════════════════════════════════                        │
│                                             [🖨️ Print Version]    │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   PAULLINA CHACIN                                                 │
│   High School Junior • Class of 2026                              │
│   [Email to be added] • [Phone to be added]                      │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   EDUCATION                                                       │
│   ─────────────────────────────────────────                     │
│                                                                   │
│   High School Name                              2023 - 2026      │
│   High School Diploma (Expected)                                 │
│   GPA: X.XX / 4.0                                                 │
│                                                                   │
│   Relevant Coursework:                                            │
│   • AP Biology                                                    │
│   • AP US History                                                 │
│   • Honors English                                                │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   VOLUNTEERING                                                    │
│   ─────────────────────────────────────────                     │
│                                                                   │
│   Habitat for Humanity                     June 2024 - Present   │
│   Volunteer Builder                                               │
│   • Built homes for two local families (40+ hours)                │
│   • Led framing crew of 5 volunteers                              │
│                                              [View Details →]     │
│                                                                   │
│   Food Bank Volunteer                       Jan 2024 - Present   │
│   Weekly Volunteer                                                │
│   • Sort and pack food for 100+ families weekly                   │
│   • Assist with inventory management                              │
│                                              [View Details →]     │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   ACTIVITIES & LEADERSHIP                                         │
│   ─────────────────────────────────────────                     │
│                                                                   │
│   Debate Team                               Sept 2023 - Present  │
│   Varsity Captain                                                 │
│   • Led team to state semifinals (2024)                           │
│   • Mentor 3 junior debaters                                      │
│                                              [View Details →]     │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   AWARDS & HONORS                                                 │
│   ─────────────────────────────────────────                     │
│                                                                   │
│   • Honor Roll (2023, 2024)                                       │
│   • Regional Science Fair - 1st Place (Biology, 2024)            │
│   • Student of the Month (March 2024)                             │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   SKILLS                                                          │
│   ─────────────────────────────────────────                     │
│                                                                   │
│   Leadership: Team Management, Project Coordination               │
│   Communication: Public Speaking, Writing, Presentation           │
│   Technical: Research, Data Analysis, Microsoft Office            │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### Print View

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│                     PAULLINA CHACIN                               │
│              High School Junior • Class of 2026                   │
│         [email@example.com] • [(123) 456-7890]                   │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   EDUCATION                                                       │
│                                                                   │
│   High School Name                              2023 - 2026      │
│   High School Diploma (Expected)                                 │
│   GPA: X.XX / 4.0                                                 │
│   Coursework: AP Biology, AP US History, Honors English          │
│                                                                   │
│   VOLUNTEERING                                                    │
│                                                                   │
│   Habitat for Humanity, Volunteer Builder      June 2024 - Now   │
│   • Built homes for two local families (40+ hours)                │
│   • Led framing crew of 5 volunteers                              │
│                                                                   │
│   Food Bank, Weekly Volunteer                   Jan 2024 - Now   │
│   • Sort and pack food for 100+ families weekly                   │
│                                                                   │
│   ACTIVITIES & LEADERSHIP                                         │
│                                                                   │
│   Debate Team, Varsity Captain                 Sept 2023 - Now   │
│   • Led team to state semifinals (2024)                           │
│   • Mentor 3 junior debaters                                      │
│                                                                   │
│   AWARDS & HONORS                                                 │
│                                                                   │
│   • Honor Roll (2023, 2024)                                       │
│   • Regional Science Fair - 1st Place, Biology (2024)            │
│   • Student of the Month (March 2024)                             │
│                                                                   │
│   SKILLS                                                          │
│                                                                   │
│   Leadership, Public Speaking, Research, Data Analysis            │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘

[Optimized for printing - no navigation, single page, black & white friendly]
```

---

## 📧 Contact Page

```
┌─────────────────────────────────────────────────────────────────┐
│  Navigation                                                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   GET IN TOUCH                                                    │
│   ════════════════════════════════════════                       │
│                                                                   │
│   I'd love to hear from college admissions officers,             │
│   potential mentors, or collaboration opportunities.              │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   ┌────────────────┐          CONTACT INFORMATION                │
│   │                │          ══════════════════════              │
│   │   Photo        │                                              │
│   │   (Optional)   │          📧 Email                            │
│   │                │          [To be added]                       │
│   └────────────────┘                                              │
│                              📱 Phone                             │
│                              [To be added]                        │
│                                                                   │
│                              💼 LinkedIn                          │
│                              linkedin.com/in/paullina-chacin      │
│                                                                   │
│                              📄 Resume                            │
│                              [Download PDF]                       │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   QUICK LINKS                                                     │
│   ──────────────────────────────────────────                    │
│                                                                   │
│   → View my Volunteering Experience                               │
│   → See my Competition Results & Events                           │
│   → Explore my Extracurricular Activities                         │
│   → Read my Full Resume                                           │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Color Application Guide

### Light Mode (Catppuccin Latte)

**Layout:**
- Background: `#eff1f5` (latte-base)
- Text: `#4c4f69` (latte-text)
- Headings: `#4c4f69` (latte-text, bold)
- Subtext: `#6c6f85` (latte-subtext0)

**Accents:**
- Primary (links, buttons): `#1e66f5` (latte-blue)
- Hover: `#1e66f5` with 10% opacity increase
- Success/positive: `#40a02b` (latte-green)
- Warning/attention: `#d20f39` (latte-red)

**Components:**
- Cards: `#ffffff` with subtle `#ccd0da` border
- Navigation: `#ffffff` background, `#1e66f5` active state
- Buttons: `#1e66f5` background, `#ffffff` text

### Dark Mode (Catppuccin Macchiato)

**Layout:**
- Background: `#24273a` (macchiato-base)
- Text: `#cad3f5` (macchiato-text)
- Headings: `#cad3f5` (macchiato-text, bold)
- Subtext: `#a5adcb` (macchiato-subtext0)

**Accents:**
- Primary (links, buttons): `#8aadf4` (macchiato-blue)
- Hover: `#8aadf4` with 10% brightness increase
- Success/positive: `#a6da95` (macchiato-green)
- Warning/attention: `#ed8796` (macchiato-red)

**Components:**
- Cards: `#363a4f` (macchiato-surface0) with subtle border
- Navigation: `#363a4f` background, `#8aadf4` active state
- Buttons: `#8aadf4` background, `#24273a` text

---

## 🔄 Interactive Elements

### Theme Switcher (Top Right)

```
Desktop:
┌────────────────┐
│ ☀️ 🌙 Auto    │  ← Toggle buttons
└────────────────┘

Mobile:
┌──────┐
│  🌙  │  ← Icon only, opens modal
└──────┘
```

**Behavior:**
- Click sun: Switch to light mode
- Click moon: Switch to dark mode
- Click "Auto": Use system preference
- Save preference to localStorage
- Smooth transition (0.3s ease)

### Buttons

**Primary Button:**
```
Normal:     [Download Resume]  ← Blue background, white text
Hover:      [Download Resume]  ← Slightly brighter, subtle lift
Active:     [Download Resume]  ← Slightly darker, pressed effect
```

**Secondary Button:**
```
Normal:     [Read More →]     ← Blue text, transparent background
Hover:      [Read More →]     ← Blue background, white text
```

### Navigation Hover

```
Normal:     About              ← Default text color
Hover:      About              ← Blue color, subtle underline animation
Active:     About              ← Blue color, full underline
```

---

## 📐 Spacing & Typography

### Spacing Scale (rem units)

```
xs:  0.25rem  (4px)
sm:  0.5rem   (8px)
md:  1rem     (16px)
lg:  1.5rem   (24px)
xl:  2rem     (32px)
2xl: 3rem     (48px)
3xl: 4rem     (64px)
```

### Typography Scale

```
Display (H1):  3rem    (48px)  - Bold - Line height: 1.1
Heading (H2):  2rem    (32px)  - Bold - Line height: 1.2
Subhead (H3):  1.5rem  (24px)  - Semibold - Line height: 1.3
Body:          1rem    (16px)  - Regular - Line height: 1.6
Small:         0.875rem (14px) - Regular - Line height: 1.5
Tiny:          0.75rem  (12px) - Regular - Line height: 1.4
```

### Font Families

```css
--font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             "Helvetica Neue", Arial, sans-serif;
--font-serif: Georgia, "Times New Roman", serif;
--font-mono: "SF Mono", Monaco, "Cascadia Code", monospace;
```

**Usage:**
- Headings: `--font-sans` (bold)
- Body: `--font-sans` (regular)
- Code/technical: `--font-mono`

---

## 🖼️ Image Guidelines

### Profile Photos
- **Homepage Hero**: 300x300px (circular crop)
- **About Page**: 400x400px (circular crop)
- **Contact Page**: 200x200px (circular crop)
- Format: JPG or WebP, optimized < 150KB

### Collection Entry Images
- **List View**: 150x150px (square or 4:3)
- **Detail View Hero**: 800x500px (16:10 ratio)
- **Gallery Images**: 600x400px (3:2 ratio)
- Format: JPG or WebP, optimized < 200KB each

### Image Optimization
- Use responsive images with `srcset`
- Provide 1x and 2x versions for retina
- Lazy load images below fold
- Alt text for all images (accessibility)

---

## ♿ Accessibility Features

### Must-Haves
- ✅ Keyboard navigation (tab through all interactive elements)
- ✅ Focus indicators (visible outline on focused elements)
- ✅ ARIA labels for icon buttons
- ✅ Skip to main content link
- ✅ Semantic HTML (proper heading hierarchy)
- ✅ Color contrast ratios ≥ 4.5:1 (text) and ≥ 3:1 (UI)
- ✅ Alt text for all images
- ✅ Responsive text sizing (no fixed px for body text)

### Testing
- Use Lighthouse accessibility audit
- Test with keyboard only (no mouse)
- Test with screen reader (VoiceOver on Mac, NVDA on Windows)
- Verify color contrast with WebAIM checker

---

## 📱 Mobile-Specific Considerations

### Touch Targets
- Minimum 44x44px for all clickable elements
- Extra padding around links in paragraphs
- Larger tap areas for navigation

### Mobile Navigation
```
Closed:
┌──────────────────┐
│ Logo      [☰][🌙]│
└──────────────────┘

Open:
┌──────────────────┐
│ Logo      [✕][🌙]│
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

**Behavior:**
- Slide from right with smooth animation
- Overlay with semi-transparent backdrop
- Close on backdrop click or X button
- Disable body scroll when open

### Mobile Optimizations
- Stack all multi-column layouts
- Increase font sizes slightly (18px base)
- Reduce hero image sizes
- Simplify featured highlights (one per row)
- Sticky header on scroll (optional)

---

## 🎭 Animation & Transitions

### Subtle Animations

**Page Load:**
- Fade in content: `opacity 0.5s ease`
- Slide up hero: `transform translateY(20px) → 0, 0.6s ease`

**Hover Effects:**
- Cards lift: `transform translateY(-4px), box-shadow increase, 0.2s ease`
- Buttons brighten: `background-color 0.2s ease`
- Links underline: `border-bottom-width 0.2s ease`

**Theme Switch:**
- Colors transition: `background-color 0.3s ease, color 0.3s ease`
- No jarring flashes

### Performance
- Use `transform` and `opacity` only (GPU accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- Reduce motion for users with `prefers-reduced-motion`

---

## 📊 Component Library

### Card Component

```
┌────────────────────────────┐
│ ┌────┐                     │
│ │Img │ Title               │
│ └────┘                     │
│        Metadata (date, etc)│
│                            │
│        Short description   │
│        text here...        │
│                            │
│        [Button/Link →]     │
└────────────────────────────┘

Styles:
- Background: card color
- Border: 1px subtle
- Border radius: 8px
- Padding: 1.5rem
- Shadow: subtle on hover
```

### Button Component

```
Primary:    [Text]  ← Filled background
Secondary:  [Text]  ← Outline only
Text Only:  Text →  ← No background, arrow on hover
```

### Badge/Tag Component

```
[Tag Name]  ← Small, rounded, colored background, uppercase
```

---

This mockup document provides visual guidance for implementation. Use it as a reference throughout development to ensure consistent, professional design.
