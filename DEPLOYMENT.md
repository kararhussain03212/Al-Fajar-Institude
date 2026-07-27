# Deployment Guide - Netlify

This project is configured for deployment on Netlify's free tier.

## Prerequisites

1. A Netlify account (create at https://netlify.com)
2. Node.js 20+ installed locally

## Deployment Steps

### Option 1: Connect Git Repository (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify Dashboard](https://app.netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 2: Manual Deployment (CLI)

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=dist
   ```

## Configuration Files

- **netlify.toml**: Build configuration, redirects, and headers
- **_redirects**: SPA routing redirects (fallback to index.html)
- **.env.example**: Environment variables template

## Important Notes

### SPA Routing
The `netlify.toml` and `_redirects` files ensure that all routes redirect to `index.html`, allowing React Router to handle client-side navigation.

### Caching Strategy
- Static assets (JS/CSS): Cached for 1 year (immutable)
- HTML files: No caching (always fresh)
- JSON files: Cached for 1 hour

### Security Headers
The following security headers are configured:
- X-Content-Type-Options: Prevents MIME type sniffing
- X-Frame-Options: Prevents clickjacking
- X-XSS-Protection: Browser XSS protection
- Referrer-Policy: Controls referrer information

## Environment Variables

If you need to add environment variables:

1. Create a `.env.local` file (not committed to git)
2. Use `VITE_` prefix for variables accessible in the browser
3. Access in code: `import.meta.env.VITE_YOUR_VAR`

## Post-Deployment Checklist

- [ ] Test all navigation links work (no 404 errors)
- [ ] Verify responsive design on mobile/tablet
- [ ] Check that images load correctly
- [ ] Test forms and interactions
- [ ] Verify social media links work
- [ ] Check contact information is correct

## Troubleshooting

### Page refreshes show 404
- Ensure `netlify.toml` and `_redirects` are committed
- Both files are needed for proper SPA routing

### Images not loading
- Use relative paths starting with `/` (e.g., `/image.png`)
- Ensure images are in the `public/` folder

### Routes not working
- Check React Router paths match exactly
- Clear browser cache (Ctrl+Shift+Delete)

## Domain Setup

To connect a custom domain:

1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL certificate is automatic (Let's Encrypt)

## Performance Tips

- Images use Cloudinary CDN (external, fast)
- Build is optimized with code splitting
- Consider adding image optimization for local assets
- Netlify provides free CDN globally

## Support

For Netlify-specific issues: https://docs.netlify.com
For project issues: Check the repository or contact your team
