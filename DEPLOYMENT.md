# Deployment Guide for Koska Radio

## Environment Variables Setup

### For Local Development
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your actual API credentials in `.env`:
   ```
   REACT_APP_API_KEY="your-actual-api-key"
   REACT_APP_API_URL="https://api.evenings.co/v1"
   ```

3. **Never commit `.env` to git** - it's already in `.gitignore`

### For Netlify Production Deployment

#### Setting Environment Variables in Netlify:
1. Log in to [Netlify Dashboard](https://app.netlify.com)
2. Select your site: **koskaradio**
3. Navigate to: **Site configuration** → **Environment variables**
4. Add the following variables:
   - `REACT_APP_API_KEY`: Your evenings.co API key
   - `REACT_APP_API_URL`: `https://api.evenings.co/v1`
5. Set scopes to "All" or "Builds"
6. Click **Save**

#### Triggering a Deployment with New Variables:
After adding/updating environment variables, trigger a new build:

**Option 1: Push a commit**
```bash
git commit --allow-empty -m "Trigger rebuild with env vars"
git push origin NewPages
```

**Option 2: Manual deploy from Netlify**
- Go to **Deploys** → **Trigger deploy** → **Deploy site**

## Deployment Configuration

- **Live Site:** koskaradio.net
- **Repository:** github.com/Koska-radio/koska_evenings
- **Branch:** NewPages (auto-publishing enabled)
- **Build Command:** `npm run build`
- **Publish Directory:** `build`

## Verifying Deployment

After deployment, check:
1. Build logs in Netlify for any errors
2. Live site at koskaradio.net
3. Archive page to confirm API connection works
4. Browser console for any API errors

## Troubleshooting

### Archive Page Not Loading
- Verify environment variables are set in Netlify dashboard
- Check build logs for successful compilation
- Inspect browser console for API errors
- Verify API key is valid on evenings.co

### Build Failures
- Check that all dependencies are in `package.json`
- Verify Node.js version compatibility (using v22.20.0)
- Review build logs for specific error messages


## Contact

For deployment issues or questions, contact the project maintainer.
