# 🚀 Deployment Guide

This guide will walk you through deploying your hotel trash cans website to GitHub and Cloudflare Pages with Decap CMS.

## 📋 Prerequisites

- [x] GitHub account
- [x] Cloudflare account (free tier works)
- [x] Project built successfully locally (`npm run build`)

## Step 1: 📂 Create GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Click "New repository"** (green button)
3. **Repository settings:**
   - **Name:** `hoteltrashcans`
   - **Description:** `Modern hotel trash can website with CMS`
   - **Visibility:** Public (required for Decap CMS)
   - **Don't initialize** with README (we already have files)

4. **Click "Create repository"**

## Step 2: 🔗 Connect Local Project to GitHub

Run these commands in your terminal:

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/hoteltrashcans.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username.

## Step 3: 🌐 Deploy to Cloudflare Pages

1. **Go to Cloudflare Dashboard**
2. **Navigate to Pages** (left sidebar)
3. **Click "Connect to Git"**
4. **Connect GitHub account** if not already connected
5. **Select your repository:** `hoteltrashcans`
6. **Configure build settings:**
   ```
   Framework preset: Astro
   Build command: npm run build
   Build output directory: dist
   Root directory: (leave empty)
   ```
7. **Click "Save and Deploy"**

## Step 4: 🔐 Configure GitHub OAuth for CMS

1. **Go to GitHub Settings** → Developer settings → OAuth Apps
2. **Click "New OAuth App"**
3. **Fill in details:**
   ```
   Application name: Hotel Trash Cans CMS
   Homepage URL: https://your-site.pages.dev
   Authorization callback URL: https://your-site.pages.dev/admin
   ```
4. **Click "Register application"**
5. **Copy the Client ID** (you'll need this)

## Step 5: ⚙️ Update CMS Configuration

1. **Edit `public/admin/config.yml`**
2. **Replace placeholder with your info:**
   ```yaml
   backend:
     name: github
     repo: YOUR_USERNAME/hoteltrashcans  # ← Your GitHub username
     branch: main
   ```

## Step 6: 🔑 Configure Cloudflare Pages Environment

1. **In Cloudflare Pages** → Your site → Settings → Environment variables
2. **Add environment variable:**
   ```
   GITHUB_CLIENT_ID = your_github_oauth_client_id
   ```

## Step 7: 🎯 Final Steps

1. **Push updated config:**
   ```bash
   git add public/admin/config.yml
   git commit -m "Update CMS config with GitHub repo"
   git push
   ```

2. **Wait for deployment** (usually 1-2 minutes)

3. **Test your site:**
   - Visit: `https://your-site.pages.dev`
   - Test CMS: `https://your-site.pages.dev/admin`

## ✅ Verification Checklist

- [ ] Website loads correctly
- [ ] All collection pages work
- [ ] Contact form is functional
- [ ] `/admin` page loads Decap CMS
- [ ] CMS login works with GitHub
- [ ] Can edit and save content through CMS
- [ ] Content changes appear on website

## 🔧 Troubleshooting

### CMS Won't Load
- Check that repository is **public**
- Verify GitHub OAuth app settings
- Confirm config.yml has correct repo name

### Build Fails
- Check build logs in Cloudflare Pages
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

### Authentication Issues
- Double-check OAuth callback URL
- Ensure GitHub Client ID is correct
- Try clearing browser cache

## 🎨 Custom Domain (Optional)

1. **In Cloudflare Pages** → Custom domains
2. **Add your domain**
3. **Update DNS** to point to Cloudflare
4. **Update config.yml** with new domain

## 📚 Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Decap CMS Docs](https://decapcms.org/docs/)
- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/)

## 🆘 Need Help?

If you encounter issues:

1. Check the deployment logs in Cloudflare Pages
2. Verify all URLs and credentials
3. Test locally first with `npm run build`
4. Check browser console for JavaScript errors

---

**🎉 Once deployed, you'll have:**
- ✅ Professional website on Cloudflare's global CDN
- ✅ Easy content management through `/admin`
- ✅ Automatic deployments when you edit content
- ✅ No manual copy/paste required! 