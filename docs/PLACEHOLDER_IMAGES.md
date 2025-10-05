# Placeholder Images Guide

All missing images have been replaced with SVG placeholders featuring "PC" initials in the Catppuccin theme colors.

## Created Placeholders

### Profile & Social
- **profile-photo.svg** (400×400px) - Resume/About page profile image
- **og-image.svg** (1200×630px) - Social media sharing image
- **favicon.svg** (32×32px) - Browser tab icon

### Volunteering
- **habitat-2024.svg** (800×600px) - Habitat for Humanity activity
- **food-bank-2024.svg** (800×600px) - Community Food Bank activity

### Events
- **science-fair-2024.svg** (800×600px) - Regional Science Fair 2024

### Activities
- **debate-team-2024.svg** (800×600px) - Debate Team 2024
- **environmental-club.svg** (800×600px) - Environmental Club

## Design Specifications

All placeholders use:
- **Background**: Catppuccin Blue (#1e66f5)
- **Text**: Catppuccin Latte Base (#eff1f5)
- **Secondary Text**: Catppuccin Subtext (#bac2de)
- **Bold "PC" initials** with descriptive subtitle

## Optimal Image Sizes

When replacing with real photos:

| Image Type | Optimal Size | Aspect Ratio | Format |
|------------|--------------|--------------|--------|
| Profile Photo | 400×400px | 1:1 | JPG/WebP |
| OG Image | 1200×630px | 1.91:1 | JPG/WebP |
| Activity/Event Images | 800×600px | 4:3 | JPG/WebP |
| Favicon | 32×32px | 1:1 | SVG/PNG |

## Replacing Placeholders

To replace with real images:

1. **Resize your image** to the optimal dimensions above
2. **Compress** using tools like TinyPNG or Squoosh
3. **Save** with the same filename (e.g., `profile-photo.jpg`)
4. **Update the reference** in the markdown file to use `.jpg` instead of `.svg`

Example:
```yaml
# Before
image: /assets/images/profile-photo.svg

# After (with real photo)
image: /assets/images/profile-photo.jpg
```

## SVG Advantages

SVG placeholders provide:
- ✅ **Scalable** - Perfect quality at any size
- ✅ **Small file size** - ~400-600 bytes each
- ✅ **Fast loading** - No compression needed
- ✅ **Theme consistency** - Matches site colors
- ✅ **Professional appearance** - Clean, branded placeholders

## Next Steps

1. Gather real photos for each activity/event
2. Resize and compress images to optimal sizes
3. Replace SVG placeholders with real JPG/WebP images
4. Update file extensions in markdown files
5. Test image loading and lazy-load performance
