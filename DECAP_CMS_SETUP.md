# Decap CMS Setup Instructions

## What's Been Added

✅ **Admin Interface**: `/public/admin/` - CMS interface files  
✅ **Configuration**: `/public/admin/config.yml` - CMS configuration  
✅ **Identity Widget**: Added to BaseLayout.astro for authentication  
✅ **Media Folder**: `/static/img/` - For new image uploads

## Next Steps to Complete Setup

### 1. Deploy to Netlify (Recommended)

**Option A: Connect GitHub Repository**
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account
4. Select this repository
5. Deploy settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

**Option B: Manual Deploy**
1. Run `npm run build` locally
2. Drag the `dist` folder to Netlify

### 2. Enable Netlify Identity

1. In your Netlify dashboard → Site settings → Identity
2. Click "Enable Identity"
3. Under "Registration preferences" → "Invite only" (recommended)
4. Under "Git Gateway" → Enable Git Gateway
5. Add yourself as a user: Identity tab → "Invite users"

### 3. Access the CMS

1. Visit `https://your-site.netlify.app/admin/`
2. Click "Login with Netlify Identity"
3. Check your email for the invitation
4. Set your password and login

## Alternative Authentication Options

### GitHub Backend (No Netlify required)
Replace the backend in `config.yml`:
```yaml
backend:
  name: github
  repo: your-username/your-repo-name
```

Then set up GitHub OAuth app in your repository settings.

### Local Development
For testing locally:
```yaml
backend:
  name: proxy
  proxy_url: http://localhost:8081/api/v1
```

## What You Can Now Do

### ✅ Visual Content Editing
- Edit collection descriptions with rich text
- Manage specifications (dimensions, capacity, designer)
- Update PDF and metal options links

### ✅ Color Variation Management
- Add/remove/reorder color variations
- Select from predefined color names
- Update image URLs and alt text

### ✅ Image Management
- Upload new images to `/static/img/`
- Use existing Cloudflare R2 URLs
- Visual image picker interface

### ✅ SEO Management
- Edit meta titles and descriptions
- Manage keywords for each collection

## Tips for Using the CMS

1. **Images**: You can still use your existing Cloudflare R2 URLs
2. **Color Order**: Drag and drop to reorder color variations
3. **Validation**: Required fields are marked and validated
4. **Preview**: Changes are saved as drafts before publishing
5. **Backup**: All changes are committed to your Git repository

## Current Collections Mapped

All 9 existing collections are now editable:
- Canon Collection
- Facet Collection  
- Fillmore Collection
- Hillcrest Collection
- Metro Collection
- Montecito Collection
- Piru Collection
- Portola Collection
- Rodeo Collection

## Troubleshooting

### CMS won't load
- Check that you've enabled Netlify Identity
- Verify the admin files are in `/public/admin/`
- Check browser console for errors

### Can't login
- Make sure you've been invited as a user
- Check your email for the invitation link
- Try incognito/private browsing mode

### Changes not appearing
- Changes are committed to your repository
- Site needs to rebuild (automatic on Netlify)
- Check the Git history for commits

## Need Help?

- [Decap CMS Documentation](https://decapcms.org/docs/intro/)
- [Netlify Identity Docs](https://docs.netlify.com/visitor-access/identity/)
- Check the CMS config at `/public/admin/config.yml` 