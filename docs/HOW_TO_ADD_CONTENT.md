# How to Add Content to Your Portfolio

This guide shows you how to add new volunteering activities, events, and extracurricular activities to your portfolio website.

## Table of Contents
- [Adding Volunteering Activities](#adding-volunteering-activities)
- [Adding Events & Competitions](#adding-events--competitions)
- [Adding Extracurricular Activities](#adding-extracurricular-activities)
- [Adding Images](#adding-images)
- [Updating Your Resume](#updating-your-resume)
- [Testing Your Changes](#testing-your-changes)

---

## Adding Volunteering Activities

### Step 1: Create a New File

Create a new file in the `_volunteering/` directory with a descriptive name:

```
_volunteering/my-new-volunteer-work.md
```

**Naming convention:** Use lowercase letters and hyphens (no spaces). Example: `animal-shelter-volunteer.md`

### Step 2: Add Front Matter

Copy this template and fill in your information:

```yaml
---
layout: collection-item
title: "Your Volunteer Activity Title"
organization: "Organization Name"
date: 2024-01-15  # Start date (YYYY-MM-DD format)
end_date: 2024-06-30  # Optional: End date or "Present"
hours: 50  # Total volunteer hours
location: "City, State"
image: "/assets/images/volunteering/your-photo.jpg"  # Optional
tags:
  - community service
  - environment
  - youth
excerpt: >
  A brief one-sentence summary of your volunteer work that appears on listing pages.
---

# Main Content Goes Here

Write about your volunteer experience using Markdown:

## What I Did

Describe your responsibilities and activities.

## Skills Developed

- Time management
- Teamwork
- Communication

## Impact

Describe the impact of your work on the community.

## What I Learned

Share your personal growth and learning from this experience.
```

### Step 3: Fill in the Details

- **title**: The name of your volunteer activity
- **organization**: The organization you volunteered with
- **date**: Start date in YYYY-MM-DD format (e.g., 2024-01-15)
- **end_date**: Either end date or "Present" if ongoing
- **hours**: Total hours volunteered
- **location**: Where you volunteered
- **image**: Path to photo (see [Adding Images](#adding-images))
- **tags**: Categories that describe your work
- **excerpt**: One sentence summary (shows on index pages)

### Real Example:

```yaml
---
layout: collection-item
title: "Animal Shelter Volunteer"
organization: "Local Animal Rescue"
date: 2024-01-15
end_date: Present
hours: 60
location: "San Francisco, CA"
image: "/assets/images/volunteering/animal-shelter.jpg"
tags:
  - animal welfare
  - community service
excerpt: >
  Volunteer at local animal shelter providing care for rescue animals
  and assisting with adoption events.
---

# Animal Shelter Volunteer Experience

## Overview

Since January 2024, I've been volunteering at Local Animal Rescue, dedicating
over 60 hours to animal care and community outreach.

## Responsibilities

- Daily care of shelter animals (feeding, cleaning, exercise)
- Assisting with weekend adoption events
- Socializing animals to improve adoptability
- Maintaining shelter cleanliness and organization

## Impact

- Helped 15 animals find permanent homes
- Organized successful fundraiser raising $2,000
- Improved social skills of shy animals through daily interaction

## Skills Developed

- Compassion and patience
- Responsibility and time management
- Public speaking at adoption events
- Teamwork with other volunteers
```

---

## Adding Events & Competitions

### Step 1: Create a New File

```
_events/my-competition.md
```

### Step 2: Use This Template

```yaml
---
layout: collection-item
title: "Event or Competition Name"
date: 2024-03-15  # Event date (YYYY-MM-DD)
category: "Science Fair / Debate / Math Competition / etc."
result: "1st Place / Finalist / Participant"  # Optional
organization: "Organizing Body"  # Optional
location: "City, State"
image: "/assets/images/events/event-photo.jpg"  # Optional
tags:
  - science
  - competition
  - research
excerpt: >
  Brief description of the event and your achievement.
---

# Main Content

## The Competition

Describe the event and what it involved.

## My Project/Presentation

Detail your work or performance.

## Results

Share your results and what you learned.
```

### Real Example:

```yaml
---
layout: collection-item
title: "Regional Science Fair 2024"
date: 2024-03-15
category: "Science Fair"
result: "2nd Place - Environmental Science"
organization: "State Science Association"
location: "Sacramento, CA"
image: "/assets/images/events/science-fair-2024.jpg"
tags:
  - science
  - research
  - environment
excerpt: >
  Won 2nd place in Environmental Science category for project on
  microplastic filtration methods.
---

# Regional Science Fair Success

## The Project

I developed a novel approach to filtering microplastics from water using
sustainable, low-cost materials.

## Research Process

- 6 months of research and experimentation
- Tested 12 different filtration methods
- Collected data from 200+ water samples

## Results

- 2nd Place in Environmental Science category
- 87% filtration efficiency achieved
- Invited to present at State Science Symposium

## What I Learned

This project taught me the scientific method, data analysis, persistence
through setbacks, and the importance of environmental research.
```

---

## Adding Extracurricular Activities

### Step 1: Create a New File

```
_activities/my-club.md
```

### Step 2: Use This Template

```yaml
---
layout: collection-item
title: "Activity or Club Name"
role: "President / Member / Captain / etc."
organization: "School Name or Organization"  # Optional
date: 2023-09-01  # Start date
end_date: Present  # Or specific end date
location: "School or Location"
image: "/assets/images/activities/club-photo.jpg"  # Optional
tags:
  - leadership
  - STEM
  - arts
excerpt: >
  Brief description of your role and involvement.
---

# Main Content

## About the Activity

Describe what the club/activity is about.

## My Role

Detail your responsibilities and contributions.

## Achievements

Share accomplishments and impact.
```

### Real Example:

```yaml
---
layout: collection-item
title: "Robotics Club"
role: "Team Captain"
organization: "Lincoln High School"
date: 2023-09-01
end_date: Present
location: "Lincoln High School"
image: "/assets/images/activities/robotics.jpg"
tags:
  - STEM
  - leadership
  - robotics
excerpt: >
  Leading 15-member robotics team in designing and building competition
  robots for regional tournaments.
---

# Robotics Club Leadership

## About the Club

Our school's robotics team competes in FIRST Robotics Competition,
designing and building robots to solve annual challenges.

## My Role as Team Captain

- Lead team of 15 students in robot design and construction
- Coordinate build sessions and manage project timelines
- Mentor new members on mechanical design and programming
- Represent team at competitions and school events

## Achievements

- Qualified for Regional Championship 2024
- Increased club membership by 40%
- Organized successful fundraiser raising $5,000 for team expenses
- Led team to Innovation Award at Fall Competition

## Skills Developed

- Leadership and team management
- Engineering design and problem-solving
- Project planning and time management
- Public speaking and presentation
```

---

## Adding Images

### Step 1: Prepare Your Images

**Size recommendations:**
- Profile photo: 400x400px or larger (square)
- Activity photos: 1200x800px or smaller
- Keep file sizes under 500KB

**Format:** JPG or PNG

### Step 2: Organize Your Images

Save images in the appropriate folder:

```
assets/images/
  ├── profile-photo.jpg           # Your headshot
  ├── volunteering/
  │   ├── habitat-for-humanity.jpg
  │   └── animal-shelter.jpg
  ├── events/
  │   ├── science-fair-2024.jpg
  │   └── debate-tournament.jpg
  └── activities/
      ├── robotics.jpg
      └── debate-team.jpg
```

### Step 3: Reference Images in Your Content

In your markdown files, use this format:

```yaml
image: "/assets/images/volunteering/your-photo.jpg"
```

Or in the content body:

```markdown
![Photo description](/assets/images/volunteering/photo.jpg)
```

---

## Updating Your Resume

Edit the file `_data/resume.yml` to update your resume information.

### Key Sections to Update

**1. Basic Information:**

```yaml
basics:
  name: "Paullina Chacin"
  email: "your.email@example.com"  # Replace [to be added]
  phone: "(555) 123-4567"           # Replace [to be added]
  location:
    city: "Your City"                # Replace [City]
    region: "CA"                     # Replace [State]
```

**2. Education:**

```yaml
education:
  - institution: "Your High School Name"  # Replace [High School Name]
    gpa: "3.95"                           # Replace [X.XX]
    startDate: "2023-08"
    endDate: "2026-06"
```

**3. Volunteer Experience:**

Each volunteer entry in `resume.yml` can link to detailed pages:

```yaml
volunteer:
  - organization: "Habitat for Humanity"
    position: "Volunteer Builder"
    startDate: "2024-06"
    endDate: "Present"
    summary: "Build affordable housing"
    highlights:
      - "40+ hours of construction work"
      - "Led framing crew"
    detailPageUrl: "/volunteering/habitat-for-humanity/"  # Links to detail page
```

**4. Add Awards:**

```yaml
awards:
  - title: "Science Fair - 2nd Place"
    date: "2024-03"
    awarder: "State Science Association"
    summary: "Environmental Science category"
    detailPageUrl: "/events/science-fair-2024/"
```

**5. Add Skills:**

```yaml
skills:
  - name: "Technical Skills"
    keywords:
      - "Python Programming"
      - "Data Analysis"
      - "Lab Research"
  - name: "Soft Skills"
    keywords:
      - "Leadership"
      - "Communication"
      - "Team Collaboration"
```

---

## Testing Your Changes

### Option 1: Run Local Server

1. Open Terminal
2. Navigate to project directory:
   ```bash
   cd /Users/cchacin/Git/paulinachacin.com
   ```
3. Start Jekyll server:
   ```bash
   bundle exec jekyll serve --port 4000
   ```
4. Open browser to: `http://localhost:4000`

### Option 2: Quick Build Test

Just build the site to check for errors:

```bash
bundle exec jekyll build
```

If you see "done in X seconds" with no errors, your content is valid!

---

## Markdown Formatting Quick Reference

### Headers
```markdown
# Main Header (H1)
## Section Header (H2)
### Subsection Header (H3)
```

### Lists
```markdown
- Bullet point
- Another point
  - Nested point

1. Numbered item
2. Another numbered item
```

### Emphasis
```markdown
**bold text**
*italic text*
```

### Links
```markdown
[Link text](https://example.com)
[Internal link](/about/)
```

### Images
```markdown
![Image description](/assets/images/photo.jpg)
```

### Blockquotes
```markdown
> This is a quote or important note
```

---

## Common Questions

**Q: How do I know if my dates are correct?**
A: Use YYYY-MM-DD format (e.g., 2024-03-15 for March 15, 2024)

**Q: What if I'm still doing an activity?**
A: Use `end_date: Present` in the front matter

**Q: Can I reorder items?**
A: Yes! Items display in reverse chronological order (newest first) automatically

**Q: What if I don't have a photo?**
A: You can leave out the `image:` field entirely

**Q: How do I preview my changes?**
A: Run `bundle exec jekyll serve --port 4000` and visit http://localhost:4000

**Q: I made a mistake, how do I fix it?**
A: Just edit the file and save. If the server is running, it will auto-rebuild

---

## Need Help?

- Check the `samples/` directory for complete examples
- Look at existing entries in `_volunteering/`, `_events/`, `_activities/`
- Ask me (Claude) for help with any specific questions!

---

**Quick Checklist for New Content:**
- [ ] Created file in correct directory (`_volunteering/`, `_events/`, or `_activities/`)
- [ ] Added all required front matter (layout, title, date, excerpt)
- [ ] Filled in meaningful content with headers and sections
- [ ] Added relevant tags
- [ ] Referenced images correctly (if using images)
- [ ] Tested locally with `bundle exec jekyll serve`
- [ ] No build errors when running `bundle exec jekyll build`
