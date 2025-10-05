# Hosting Platform Reference

This document explains hosting-specific configurations and why certain files were removed from the main project.

## GitHub Pages (Current Platform)

**Status**: ✅ Active - Configured for GitHub Pages deployment

GitHub Pages is a free static site hosting service that:
- Automatically builds Jekyll sites
- Provides HTTPS via `username.github.io` subdomain
- Supports custom domains with HTTPS
- Uses its own caching and CDN configuration

### What GitHub Pages Provides

**Automatic Features:**
- Jekyll build on every push to main branch
- HTTPS/SSL certificates (automatic)
- Global CDN distribution
- DDoS protection via GitHub infrastructure

**Configuration:**
- Build settings: Configured via `_config.yml`
- Custom domain: Configure via `CNAME` file (if needed)
- HTTPS: Automatic, no configuration needed
- Caching: Automatic, cannot be customized

### What GitHub Pages Does NOT Support

❌ **Custom server configurations** (.htaccess, nginx.conf, etc.)
- GitHub Pages uses its own server configuration
- Cannot customize HTTP headers beyond what Jekyll provides
- Cannot set custom cache-control headers

❌ **Build plugins** (most third-party Jekyll plugins)
- Only [approved plugins](https://pages.github.com/versions/) work
- Cannot use custom Ruby gems for build process

❌ **Server-side processing**
- No PHP, Python, Node.js, or other server languages
- Static files only

### GitHub Pages Limitations

- **Build time**: ~1 minute typical, 10 minutes maximum
- **Repository size**: 1 GB recommended maximum
- **Site size**: 1 GB published site size limit
- **Bandwidth**: 100 GB/month soft limit
- **Builds**: 10 builds per hour limit

## Alternative Hosting Platforms

If you need more control or features not available on GitHub Pages, consider these alternatives:

### Netlify

**Advantages:**
- Custom HTTP headers via `_headers` file
- Custom redirects and rewrites
- Build plugins and extensions
- Deploy previews for pull requests
- Form handling
- Serverless functions
- Faster build times

**Configuration Files:**
- `_headers` - HTTP header configuration (see `docs/reference_headers`)
- `netlify.toml` - Build and deploy settings

**Migration:**
1. Connect GitHub repository to Netlify
2. Copy `docs/reference_headers` to `_headers` in project root
3. Configure build command: `bundle exec jekyll build`
4. Set publish directory: `_site`

### Cloudflare Pages

**Advantages:**
- Global CDN with excellent performance
- Custom headers via `_headers` file
- Automatic HTTPS
- Unlimited bandwidth (on free tier)
- Fast build times
- Workers for serverless functions

**Configuration:**
Same as Netlify - uses `_headers` file

### Vercel

**Advantages:**
- Fast build and deploy
- Custom headers via `vercel.json`
- Serverless functions
- Automatic HTTPS

**Configuration:**
- `vercel.json` - Custom configuration

### Self-Hosting (Apache/nginx)

**Advantages:**
- Complete control over server configuration
- Custom caching strategies
- Advanced security headers
- Server-side processing if needed

**Configuration Files:**
- `.htaccess` - Apache configuration (see `docs/reference.htaccess`)
- `nginx.conf` - nginx configuration

## Reference Configuration Files

The following files have been moved to `/docs` for reference as they don't work with GitHub Pages:

### docs/reference.htaccess

Apache server configuration with:
- Cache-Control headers for static assets (1 year)
- Cache-Control for CSS/JS (1 month)
- No-cache for HTML
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- Gzip and Brotli compression

**Use Case:** Self-hosting on Apache server or alternative platforms supporting .htaccess

### docs/reference_headers

Netlify/Cloudflare Pages header configuration with:
- Static asset caching (1 year immutable)
- CSS/JS caching (1 month)
- HTML no-cache
- Security headers for all pages

**Use Case:** Migrating to Netlify or Cloudflare Pages

## GitHub Pages Deployment Guide

### Initial Setup

1. **Create GitHub repository** named `username.github.io` (replace `username` with your GitHub username)

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main`
   - Folder: `/ (root)`
   - Click Save

4. **Wait for build:**
   - First build takes ~1-2 minutes
   - Check Actions tab for build status
   - Site available at `https://username.github.io`

### Custom Domain Setup (Optional)

1. **Create CNAME file** in project root:
   ```
   paulinachacin.com
   ```

2. **Configure DNS** at your domain registrar:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153

   Type: A
   Name: @
   Value: 185.199.109.153

   Type: A
   Name: @
   Value: 185.199.110.153

   Type: A
   Name: @
   Value: 185.199.111.153

   Type: CNAME
   Name: www
   Value: username.github.io
   ```

3. **Enable HTTPS** in GitHub Pages settings
   - Wait for DNS propagation (up to 24 hours)
   - Check "Enforce HTTPS"

## Performance on GitHub Pages

GitHub Pages provides good performance out of the box:

**What's Included:**
- ✅ Global CDN distribution
- ✅ Automatic Gzip compression
- ✅ HTTP/2 support
- ✅ HTTPS/TLS 1.3
- ✅ Caching headers (automatic)

**What You Can Optimize:**
- ✅ Image optimization (compress before upload)
- ✅ Minified CSS (configured in _config.yml)
- ✅ Deferred JavaScript (implemented)
- ✅ Lazy loading images (implemented)
- ✅ Resource hints (implemented)

**What You Cannot Control:**
- ❌ Custom cache-control headers
- ❌ Custom security headers (beyond what Jekyll provides)
- ❌ Server-side compression settings
- ❌ CDN configuration

## Migration Checklist

If migrating from GitHub Pages to another platform:

### To Netlify/Cloudflare Pages

- [ ] Copy `docs/reference_headers` to project root as `_headers`
- [ ] Connect repository to platform
- [ ] Configure build command: `bundle exec jekyll build`
- [ ] Set publish directory: `_site`
- [ ] Test deployment
- [ ] Update DNS if using custom domain

### To Self-Hosted Apache

- [ ] Copy `docs/reference.htaccess` to project root as `.htaccess`
- [ ] Build site locally: `bundle exec jekyll build`
- [ ] Upload `_site/` contents to web server
- [ ] Configure web server (virtual host, SSL, etc.)
- [ ] Test functionality

### To Vercel

- [ ] Create `vercel.json` configuration
- [ ] Connect repository
- [ ] Configure build settings
- [ ] Deploy and test

## Recommendations

**For this portfolio site, GitHub Pages is recommended because:**

1. ✅ **Free hosting** - No cost for public repositories
2. ✅ **Simple deployment** - Push to GitHub = automatic deploy
3. ✅ **Reliable** - GitHub infrastructure with 99.9% uptime
4. ✅ **Sufficient features** - Static site needs are fully met
5. ✅ **Custom domain support** - Can use paulinachacin.com
6. ✅ **Automatic HTTPS** - No SSL certificate management needed
7. ✅ **Good performance** - CDN and caching included

**Consider alternatives only if you need:**
- Custom HTTP headers for advanced caching strategies
- Build plugins not approved by GitHub Pages
- Serverless functions or dynamic content
- Sub-100ms build times for rapid iteration
- Advanced deployment workflows (deploy previews, A/B testing)

---

**Current Status**: Configured for GitHub Pages deployment. Alternative hosting configurations preserved in `/docs` for future reference.
