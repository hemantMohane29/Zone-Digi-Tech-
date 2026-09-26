# Zone Digi Tech - Deployment Guide

## 🚀 Quick Start Deployment

### **Step 1: Build for Production**

```bash
# Install dependencies (if not already installed)
npm install

# Build the production bundle
npm run build
```

This creates an optimized `dist/` folder with all compiled assets.

---

### **Step 2: Deploy to InfinityFree**

#### **Option A: Manual Upload (FTP/File Manager)**

1. **Login to InfinityFree Control Panel**
   - Go to: https://infinityfreeapp.com/
   - Login with your credentials

2. **Open File Manager**
   - Navigate to `htdocs/` folder
   - Delete any existing files (backup first!)

3. **Upload Files**
   - Upload **all contents** from `dist/` folder
   - Ensure `.htaccess` is uploaded (enable "Show Hidden Files")
   - Verify `index.html` is at root level of `htdocs/`

4. **Verify Structure**
   ```
   htdocs/
   ├── .htaccess
   ├── index.html
   ├── favicon.ico
   ├── robots.txt
   ├── sitemap.xml
   ├── assets/
   │   ├── index-[hash].css
   │   └── index-[hash].js
   └── [all other public files]
   ```

#### **Option B: FTP Upload (Recommended)**

**Using FileZilla or any FTP client:**

1. **FTP Credentials** (from InfinityFree dashboard)
   - Host: `ftpupload.net` or similar
   - Username: Your site username
   - Password: Your FTP password
   - Port: 21

2. **Connect & Upload**
   - Connect to FTP server
   - Navigate to `/htdocs/` directory
   - Upload all files from `dist/` folder
   - Set permissions if needed (usually 644 for files, 755 for folders)

3. **Important Files to Check**
   - ✅ `.htaccess` uploaded and visible
   - ✅ `index.html` at root
   - ✅ `assets/` folder with CSS and JS
   - ✅ All images in place

---

### **Step 3: Post-Deployment Checks**

1. **Visit Your Site**
   - https://zonedigitech.infinityfreeapp.com/
   - Clear browser cache if needed (Ctrl+Shift+R)

2. **Test All Pages**
   - [ ] Home page loads
   - [ ] About page
   - [ ] Services page
   - [ ] Projects page
   - [ ] Contact page
   - [ ] Policies page
   - [ ] 404 page (test any invalid URL)

3. **Test Navigation**
   - [ ] All nav links work
   - [ ] Direct URLs work (e.g., `/about`, `/contact`)
   - [ ] Back/forward browser buttons work
   - [ ] Mobile menu works

4. **Test Features**
   - [ ] Dark mode toggle works
   - [ ] Language selector works
   - [ ] Contact form submits (check Web3Forms dashboard)
   - [ ] All external links open
   - [ ] All images load

5. **Verify Analytics**
   - [ ] Open Google Tag Manager
   - [ ] Use GTM Preview mode
   - [ ] Verify tags fire on page views
   - [ ] Check Google Analytics (if configured)

---

## 🔧 Troubleshooting

### **Problem: Pages show 404 or blank screen**

**Solution:** The `.htaccess` file is missing or not working.

```apache
# Ensure this is in your .htaccess file:
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### **Problem: CSS/JS not loading**

**Solution:** Check file paths in `index.html`. Ensure assets are in `/assets/` folder.

### **Problem: Images not loading**

**Solution:** 
1. Ensure images are in the root of `htdocs/` (not in a subfolder)
2. Check image paths in code (should be `/image-name.png`, not `./image-name.png`)
3. Verify image files uploaded correctly

### **Problem: Contact form not working**

**Solution:** 
1. Check Web3Forms access key in `Contact.jsx`
2. Verify CORS settings (should work for any domain)
3. Check browser console for errors
4. Test form at: https://web3forms.com/

### **Problem: Google Translate not loading**

**Solution:**
1. Check browser console for script errors
2. Ensure Google Translate script is in `<head>`
3. Wait 2-3 seconds for script to initialize
4. Clear cache and reload

---

## 📊 Performance Optimization

### **Already Implemented:**
- ✅ Vite build optimization
- ✅ CSS minification (61.98 kB → 10.06 kB gzip)
- ✅ JS minification (361.91 kB → 99.46 kB gzip)
- ✅ Browser caching via `.htaccess`
- ✅ GZIP compression enabled
- ✅ Lazy loading for images
- ✅ Code splitting

### **Additional Optimizations (Optional):**

1. **Use CDN for Images**
   - Upload large images to Cloudinary or ImgIX
   - Replace image URLs in code

2. **Enable Cloudflare**
   - Add site to Cloudflare (free plan)
   - Enable caching and minification
   - Use Cloudflare CDN

3. **Optimize Images Further**
   - Convert PNG to WebP/AVIF
   - Use responsive images with `<picture>` element
   - Compress with TinyPNG or Squoosh

---

## 🔐 Security Checklist

### **Already Configured:**
- ✅ Security headers in `.htaccess`
- ✅ XSS protection enabled
- ✅ Clickjacking protection
- ✅ MIME sniffing prevention
- ✅ Directory browsing disabled

### **Additional Security (Recommended):**

1. **Environment Variables**
   - Never commit `.env` file to git
   - Use `.env.example` template only
   - Regenerate API keys for production

2. **HTTPS (SSL)**
   - InfinityFree provides free SSL
   - Enable in control panel: SSL/TLS → Install SSL
   - Force HTTPS in `.htaccess`:
   ```apache
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

3. **Content Security Policy (Advanced)**
   ```apache
   Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://translate.google.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;"
   ```

---

## 📈 SEO & Analytics Setup

### **1. Google Tag Manager (Already Installed)**
- Container ID: `GTM-PZG97ZZ9`
- Verify in GTM dashboard: https://tagmanager.google.com/

### **2. Google Search Console**
- Add property: https://search.google.com/search-console
- Verify ownership (already verified: meta tag in `index.html`)
- Submit sitemap: `https://zonedigitech.infinityfreeapp.com/sitemap.xml`

### **3. Google Analytics 4 (via GTM)**
1. Create GA4 property in Google Analytics
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add GA4 tag in Google Tag Manager
4. Publish container

### **4. Bing Webmaster Tools (Optional)**
1. Add site: https://www.bing.com/webmasters
2. Verify ownership
3. Submit sitemap

---

## 🎯 Custom Domain Setup (Optional)

If you want to use `www.zonedigitech.in` instead of InfinityFree subdomain:

### **Step 1: Purchase Domain**
- Buy from: GoDaddy, Namecheap, Google Domains, etc.

### **Step 2: Update DNS Settings**
In your domain registrar's DNS settings:

```
Type    Name    Value                       TTL
A       @       185.27.134.10 (InfinityFree IP)    3600
CNAME   www     zonedigitech.infinityfreeapp.com   3600
```

### **Step 3: Add Domain in InfinityFree**
1. Control Panel → Addon Domains
2. Add `zonedigitech.in`
3. Wait 24-48 hours for DNS propagation

### **Step 4: Update GTM & Analytics**
- Change domain in Google Tag Manager
- Update Google Analytics property
- Update all meta tags with new domain

---

## 🔄 Update Workflow

### **Making Changes After Deployment:**

1. **Make changes locally**
   ```bash
   npm run dev
   # Test changes at http://localhost:5173
   ```

2. **Build new version**
   ```bash
   npm run build
   ```

3. **Upload to InfinityFree**
   - Upload only changed files from `dist/`
   - Or upload entire `dist/` folder

4. **Clear Cache**
   - Browser: Ctrl+Shift+R (hard refresh)
   - Cloudflare: Purge cache (if using)
   - InfinityFree: Wait 5-10 minutes for cache

---

## 📦 Version Control (Git)

### **Before Committing:**

```bash
# Make sure these are in .gitignore:
node_modules/
dist/
.env
.DS_Store

# Commit changes
git add .
git commit -m "Deploy version 1.0.0 - All issues fixed"
git push origin main
```

### **Deployment from Git (Advanced):**

1. **Option A: Manual**
   - Pull latest code: `git pull`
   - Build: `npm run build`
   - Upload `dist/` to server

2. **Option B: CI/CD (Vercel/Netlify)**
   - Connect GitHub repo to Vercel/Netlify
   - Auto-deploy on every push
   - Free tier available

---

## ✅ Pre-Launch Checklist

### **Critical**
- [ ] Build successful (`npm run build`)
- [ ] No console errors
- [ ] All pages load correctly
- [ ] Forms submit properly
- [ ] GTM tracking active
- [ ] Mobile responsive
- [ ] Dark mode works
- [ ] `.htaccess` uploaded

### **Important**
- [ ] Sitemap submitted to Google
- [ ] Google Analytics configured
- [ ] Meta tags correct for all pages
- [ ] Favicon loads correctly
- [ ] Images optimized
- [ ] HTTPS enabled (SSL)
- [ ] 404 page works

### **Nice to Have**
- [ ] Custom domain connected
- [ ] Cloudflare enabled
- [ ] Backup of old site (if applicable)
- [ ] Performance tested (Lighthouse)
- [ ] Accessibility tested

---

## 📞 Support & Resources

### **InfinityFree**
- Dashboard: https://infinityfreeapp.com/
- Support Forum: https://forum.infinityfree.com/
- Knowledge Base: https://infinityfree.com/support/

### **Web3Forms**
- Dashboard: https://web3forms.com/
- Documentation: https://docs.web3forms.com/

### **Google Tools**
- Tag Manager: https://tagmanager.google.com/
- Analytics: https://analytics.google.com/
- Search Console: https://search.google.com/search-console

### **Development Tools**
- Lighthouse: https://developers.google.com/web/tools/lighthouse
- PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/

---

## 🎉 You're Live!

Once deployed, your site will be accessible at:
- **Staging:** https://zonedigitech.infinityfreeapp.com/
- **Production:** https://www.zonedigitech.in/ (after custom domain setup)

**Congratulations on your deployment! 🚀**

---

**Last Updated:** September 25, 2026  
**Version:** 1.0.0  
**Status:** Production Ready
