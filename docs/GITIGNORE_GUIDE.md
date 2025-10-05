# .gitignore Guide

Comprehensive guide to the Git ignore patterns for this Jekyll + GitHub Pages project.

## ✅ What's Ignored

### Jekyll & Build Files
- `_site/` - Jekyll build output (regenerated on every build)
- `_gh_pages/` - GitHub Pages staging directory
- `.jekyll-cache/` - Jekyll's cache directory
- `.jekyll-metadata` - Jekyll metadata file
- `.sass-cache/` - Sass compilation cache

### Ruby & Bundler
- `.ruby-version` - Ruby version manager files
- `.ruby-gemset` - Ruby gemset configuration
- `.bundle/` - Bundler configuration
- `vendor/bundle/` - Bundled gems (local installation)
- `vendor/cache/` - Cached gem files
- `*.gem` - Ruby gem packages

**Note**: `Gemfile.lock` is **NOT ignored** - it should be committed for GitHub Pages to ensure consistent dependency versions.

### Development Tools
- `node_modules/` - Node.js dependencies
- `npm-debug.log*` - NPM debug logs
- `bower_components/` - Bower dependencies

### Operating System Files
**macOS:**
- `.DS_Store` - Finder metadata
- `._*` - Resource forks
- `.Spotlight-V100` - Spotlight index
- `.Trashes` - Trash folder data

**Windows:**
- `Thumbs.db` - Thumbnail cache
- `Desktop.ini` - Folder settings
- `$RECYCLE.BIN/` - Recycle bin

**Linux:**
- `*~` - Backup files
- `.directory` - KDE folder settings

### Editor & IDE Files
- **VS Code**: `.vscode/`, `*.code-workspace`
- **JetBrains**: `.idea/`, `*.iml`
- **Sublime**: `*.sublime-project`, `*.sublime-workspace`
- **Vim**: `*.swp`, `*.swo`, `.netrwhist`
- **Emacs**: `*~`, `.emacs.desktop`

### Temporary & Build Files
- `*.log` - Log files
- `*.tmp`, `*.temp` - Temporary files
- `*.swp`, `*.swo` - Swap files
- `*.bak` - Backup files
- `*.cache` - Cache files

### Archive Files
- `*.zip`, `*.tar`, `*.tar.gz`
- `*.rar`, `*.7z`
- `*.diff`, `*.patch`

## ✅ What's Tracked (Not Ignored)

### Essential Project Files
- `Gemfile` - Ruby dependencies
- `Gemfile.lock` - Locked dependency versions (important for GitHub Pages!)
- `_config.yml` - Jekyll configuration
- `CNAME` - Custom domain configuration (if used)
- `.nojekyll` - GitHub Pages configuration (if used)

### Source Code & Content
- All `.md` files (content)
- All layout files in `_layouts/`
- All include files in `_includes/`
- All Sass files in `_sass/`
- All JavaScript files in `assets/js/`
- All collection files (`_volunteering/`, `_events/`, `_activities/`)
- All page files in `_pages/`
- Data files in `_data/`

### Documentation
- All files in `docs/` folder
- `README.md`
- `CLAUDE.md` (development instructions)

### Assets
- Images in `assets/images/`
- SVG files (placeholders and icons)
- CSS files (if manually created)

## 📝 Special Cases

### Gemfile.lock
**Status**: Tracked (committed to repository)

**Why**: GitHub Pages needs `Gemfile.lock` to ensure all deployments use the exact same gem versions. This prevents "works on my machine" issues.

**When to update**: After running `bundle update` or `bundle install`

### CNAME
**Status**: Explicitly not ignored (`!CNAME`)

**Why**: Required for custom domain configuration on GitHub Pages.

**When to create**: When setting up a custom domain like `paulinachacin.com`

### .nojekyll
**Status**: Explicitly not ignored (`!.nojekyll`)

**Why**: Tells GitHub Pages to skip Jekyll processing if needed (rare use case).

**When to create**: Usually not needed for Jekyll sites

### docs/ folder
**Status**: Tracked in Git, excluded from Jekyll build

**Configuration**:
- Git: Tracked (committed to repository)
- Jekyll: Excluded via `_config.yml` exclude list
- GitHub Pages: Will not appear on the live site

**Why**: Documentation is valuable for development but shouldn't be published to the live site.

## 🔧 Common Operations

### Check if a file is ignored
```bash
git check-ignore -v filename
```

### List all ignored files
```bash
git status --ignored
```

### Force add an ignored file (rarely needed)
```bash
git add -f filename
```

### See what would be ignored in a directory
```bash
git check-ignore *
```

## 🚨 What NOT to Commit

**Never commit these**:
- Build output (`_site/`)
- Cache directories (`.jekyll-cache/`, `.sass-cache/`)
- System files (`.DS_Store`, `Thumbs.db`)
- Editor files (`.vscode/`, `.idea/`)
- Secrets or credentials (API keys, passwords)
- Large binary files (use Git LFS if needed)
- Personal configuration files

## ✅ Pre-Commit Checklist

Before committing, ensure you're not tracking:
- [ ] No `_site/` directory
- [ ] No `.jekyll-cache/` or `.sass-cache/`
- [ ] No `.DS_Store` or `Thumbs.db`
- [ ] No editor configuration (`.vscode/`, `.idea/`)
- [ ] No log files (`*.log`)
- [ ] No temporary files (`*.tmp`, `*.swp`)

Verify with: `git status --short`

## 🔍 Troubleshooting

### File tracked that should be ignored

If a file is already tracked but should be ignored:

```bash
# Remove from Git tracking but keep locally
git rm --cached filename

# Commit the removal
git commit -m "Remove filename from tracking"
```

### .gitignore not working

If changes to `.gitignore` aren't taking effect:

```bash
# Clear Git cache and re-add all files
git rm -r --cached .
git add .
git commit -m "Update .gitignore"
```

### Accidentally committed ignored file

```bash
# Remove from latest commit (if not pushed)
git rm --cached filename
git commit --amend --no-edit

# If already pushed, create new commit
git rm --cached filename
git commit -m "Remove accidentally committed file"
```

## 📚 References

- [GitHub's Jekyll .gitignore template](https://github.com/github/gitignore/blob/main/Jekyll.gitignore)
- [GitHub Pages documentation](https://docs.github.com/en/pages)
- [Jekyll documentation on deployment](https://jekyllrb.com/docs/deployment/)

---

**Last Updated**: December 2024
