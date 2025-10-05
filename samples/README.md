# Sample Content Directory

This directory contains **reference examples** of content for Paullina's portfolio website.

## 📁 Contents

### Volunteering Samples
- `_volunteering/habitat-for-humanity.md` - Complete volunteering entry example
- `_volunteering/food-bank.md` - Weekly volunteer commitment example

### Events Samples
- `_events/science-fair-2024.md` - Competition/research project example

### Activities Samples
- `_activities/debate-team.md` - Leadership and extracurricular example

### Data Samples
- `_data/resume.yml` - Complete resume data structure with examples

## 🎯 How to Use These Samples

### As Reference
- Review structure and formatting
- See examples of good content writing
- Understand front matter requirements
- Copy sections that are relevant

### As Templates
```bash
# Copy sample to create new entry
cp samples/_volunteering/habitat-for-humanity.md _volunteering/my-activity.md

# Edit to add your own content
# Update front matter (title, date, tags, etc.)
# Replace example content with your own
```

### As Placeholders During Development
- Use these samples to test layouts
- Verify collections are working
- Test navigation and links
- Check responsive design

## ⚠️ Important Notes

**DO NOT**:
- Commit samples to production site
- Leave placeholder content in live site
- Use sample data in final resume.yml

**DO**:
- Replace all sample content with real content before launch
- Use samples as inspiration for structure
- Follow the writing style demonstrated
- Maintain the front matter schema

## 🔄 Replacing Samples with Real Content

When you're ready to add real content:

1. **Create actual collection directories** (if not already created):
```bash
mkdir -p _volunteering _events _activities _data
```

2. **Copy sample as starting point**:
```bash
cp samples/_volunteering/habitat-for-humanity.md _volunteering/my-real-activity.md
```

3. **Edit with real information**:
- Update all front matter fields
- Replace content with actual experiences
- Add real images (update image paths)
- Update tags to reflect reality

4. **Delete or update sample references**:
- Remove sample content from production
- Update `_config.yml` to exclude `samples/` from build

## 📋 Content Checklist

Before launch, ensure:
- [ ] All sample content replaced with real content
- [ ] Resume data (`_data/resume.yml`) updated with accurate information
- [ ] All placeholder images replaced
- [ ] Sample directory excluded from build (`_config.yml`)
- [ ] No "TODO" or "[to be added]" text remains
- [ ] All dates, numbers, and facts are accurate

## 📚 Related Documentation

- **CONTENT_TEMPLATES.md** - Detailed templates and writing guidance
- **STYLE_GUIDE.md** - Voice, tone, and writing standards
- **IMPLEMENTATION_PLAN.md** - Phase 4 covers collections implementation

---

**Remember**: These are examples to guide you. Real content should reflect Paullina's unique experiences, voice, and achievements!
