# Copilot Instructions for Koska Evenings

## Project Overview
- **Koska Radio** is a React-based web application for an online radio platform broadcasting music and visuals from undisclosed locations.
- Built with React 18.3.1, React Router DOM 7.5.3, and Create React App 5.0.1.
- Source code is in `src/`, with main entry point `src/index.js` and root component `src/App.jsx`.
- Static assets (videos, images, CSS) are in `public/` and `src/images/`.
- Production builds output to `build/`, deployed via Netlify.

## Architecture Overview
- **Routing:** Uses React Router DOM with `BrowserRouter` for client-side routing.
- **Main Routes:**
  - `/` - Home page (displays main layout with artist info, video, and setlist)
  - `/Gallery` - Gallery page
  - `/Archive` - Archive page showing all published tracks
- **API Integration:** Fetches live stream data and track archives from `https://api.evenings.co/v1/` endpoints.
- **Security Architecture:** Private API keys are protected using Netlify Functions (serverless functions) that proxy requests to evenings.co API, keeping credentials server-side only and never exposed to the browser.

## Developer Workflows
- **Development:** Run `npm start` from project root to launch dev server at `localhost:3000`. Hot reloading enabled.
- **Build:** Run `npm run build` to generate production build in `build/`.
- **Testing:** Tests are in `src/App.test.js` using Jest. Run `npm test` to execute tests.
- **Deployment:** 
  - Netlify handles automatic deployment from `build/` directory
  - Deploys from `github.com/Koska-radio/koska_evenings` (NewPages branch)
  - Live site: `koskaradio.net`
  - Environment variables are configured in Netlify dashboard (not in repository)
  - Auto-publishing is enabled for NewPages branch
  - **Serverless Functions:** Located in `netlify/functions/` and automatically deployed with the site
- **Formatting:** Run `npm run format` to format code with Prettier.
- **Debugging:** Use browser DevTools and React DevTools. Console logs are common for debugging API calls.

## Project-Specific Patterns

### Component Architecture
- **Functional Components:** All components use React hooks (useState, useEffect, useRef).
- **Page Components:** `Home.jsx`, `Gallery.jsx`, `Archive.jsx` - main route components.
- **Layout Components:** 
  - `App.jsx` - Root component with navigation and routing
  - `MainLayout.jsx` - Three-column layout with parallax scrolling
  - `BackgroundLogo.jsx` - Background visual element
- **Feature Components:**
  - `PlayButton.jsx` - Audio player for live stream (https://media.evenings.co/s/wLkwgp3q7)
  - `KoskaRadioMarquee.jsx` - Real-time stream info marquee (polls API every 3 seconds)
  - `ArtistImage.jsx` - Artist artwork display
  - `ArtistInfo.jsx` - Artist information display
  - `Setlist.jsx` - Track listing component
  - `Footer.jsx` - Footer with branding and external links
- **Utility Components:**
  - `getAllTracks.jsx` - API utility for fetching track data via Netlify Functions (does not contain authentication credentials)

### Styling Patterns
- **CSS Files:**
  - `src/App.css` - Main global styles
  - `src/index.css` - Root and typography styles
  - `src/MainLayout.css` - Three-column layout styles
  - `src/Marquee.css` - Marquee animation styles
- **Naming Convention:** kebab-case for CSS classes (e.g., `main-container`, `play-button`, `track-item`)
- **Responsive Design:** Mobile-first approach, uses flexbox and grid layouts

### Media Integration
- **Videos:** Stored in `public/videos/` and referenced as `/videos/filename.mp4`
  - Example: `/videos/DoomscrollShort.mp4` used in MainLayout with parallax effect
- **Images:** Stored in `src/images/` for component imports
  - Available images: koska.webp, DragonKoska.png, SYSTM-logo-logo.png, systmXkoska_waterfall.gif
- **Video Implementation:** Uses HTML5 `<video>` with `autoPlay`, `loop`, `muted`, `playsInline` attributes

### API Integration

#### evenings.co API
- **Base URL:** `https://api.evenings.co/v1/`
- **Authentication Method:** Bearer token (provided via API key from evenings.co Account dashboard)
- **Authentication Header Format:** `Authorization: Bearer YOUR_API_KEY`
- **Public Endpoints:**
  - `/streams/koska-radio/public/` - Live stream metadata (no auth required)
- **Protected Endpoints:**
  - `/tracks/` - Track archive (requires Bearer token authentication)

#### Security Pattern: Netlify Functions
- **Private API keys are NEVER exposed to the browser**
- All authenticated API calls to evenings.co are proxied through Netlify serverless functions in `netlify/functions/`
- Frontend calls `/.netlify/functions/functionName` instead of calling evenings.co API directly
- API keys are stored as environment variables in Netlify dashboard and only accessible server-side
- **HTTP Client:** Axios for API calls in both frontend and serverless functions
- **Data Fetching:** useEffect hooks with error handling and loading states

#### Netlify Functions Architecture
```
Browser → /.netlify/functions/getTracks → evenings.co API
                ↑
         (API key used here, server-side only)
```

#### Example Serverless Function Pattern
```javascript
// netlify/functions/getTracks.js
const axios = require('axios');

exports.handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = process.env.REACT_APP_API_URL;

    const response = await axios.get(`${apiUrl}/tracks/`, {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
};
```

### Interactive Features
- **Parallax Scrolling:** Components use `window.scrollY` for scroll-based transformations
- **Live Audio Streaming:** PlayButton component with play/pause/loading states
- **Real-time Updates:** KoskaRadioMarquee polls API every 3 seconds for current stream info
- **Archive Grid:** Clickable track items with hover overlays linking to track URLs

## External Dependencies
- **Core:** React 18.3.1, ReactDOM 18.2.0, React Scripts 5.0.1
- **Routing:** React Router DOM 7.5.3
- **HTTP Client:** Axios 1.5.0
- **3D Graphics:** Spline (@splinetool/react-spline, @splinetool/runtime)
- **Testing:** Jest, React Testing Library
- **Dev Tools:** Prettier, webpack-bundle-analyzer, source-map-explorer

## Environment Variables
- `REACT_APP_API_KEY` - Private API authentication token for evenings.co API (Bearer token from evenings.co Account dashboard)
- `REACT_APP_API_URL` - Base URL for evenings.co API (defaults to `https://api.evenings.co/v1`)

### Local Development
- Create a `.env` file in project root (gitignored for security)
- Add environment variables in this format:
  ```
  REACT_APP_API_KEY="your_api_key_here"
  REACT_APP_API_URL="https://api.evenings.co/v1"
  ```
- For local testing of Netlify Functions, use `netlify dev` (requires Netlify CLI)

### Production (Netlify)
- Environment variables are configured in Netlify dashboard under Site configuration → Environment variables
- **NEVER commit `.env` files to the repository**
- **CRITICAL:** Variables must have "Functions" scope enabled to be accessible to serverless functions
- **Security Note:** Mark `REACT_APP_API_KEY` as "Contains secret values" in Netlify dashboard to mask it in UI/logs
- To update production environment variables:
  1. Go to Netlify dashboard → Site configuration → Environment variables
  2. Add/update variables
  3. **Required Scopes:** Check "Functions" (required) and optionally "Builds"
  4. **Required Deploy Contexts:** Check "Production", "Deploy Previews", "Branch deploys"
  5. For `REACT_APP_API_KEY`: Check "Contains secret values"
  6. Trigger new deployment for changes to take effect

### Important Notes
- **Environment variables in `netlify.toml` are NOT available to Netlify Functions** (per official docs)
- Only variables set via Netlify UI/CLI/API with "Functions" scope are accessible at runtime
- Variables are accessed in serverless functions using `process.env.VARIABLE_NAME`

## Conventions
- **HTML:** Use semantic HTML5 elements with accessible attributes
- **Links:** External links use `rel="noopener noreferrer"` and `target="_blank"`
- **File Organization:**
  - Components in `src/` root (`.jsx` extension)
  - Serverless functions in `netlify/functions/` (`.js` extension)
  - Styles co-located or in component-specific CSS files
  - Images in `src/images/`
  - Public assets in `public/`
- **State Management:** Local component state with useState, no global state management library
- **Async Patterns:** async/await with try/catch for API calls
- **API Security:** Always use Netlify Functions for calls requiring private API keys - never expose credentials in browser code

## Key Files Reference
- `src/App.jsx` - Root component with routing, navbar, and layout
- `src/index.js` - React entry point with createRoot
- `src/MainLayout.jsx` - Three-column layout with parallax video
- `src/PlayButton.jsx` - Live stream audio player
- `src/KoskaRadioMarquee.jsx` - Real-time stream info display
- `src/Archive.jsx` - Track archive grid with API integration
- `src/getAllTracks.jsx` - Track fetching utility that calls Netlify Functions (not direct API)
- `netlify/functions/getTracks.js` - Serverless function for secure track fetching with authentication
- `src/App.css` - Main stylesheet
- `package.json` - Dependencies and scripts
- `netlify.toml` - Deployment and build configuration (includes functions directory)
- `.env` - Local environment variables (gitignored)
- `.env.example` - Template for environment variables (safe to commit)

## Common Tasks

### Adding a New Page
1. Create new component in `src/` (e.g., `NewPage.jsx`)
2. Import in `src/App.jsx`: `import NewPage from "./NewPage"`
3. Add route: `<Route path="/new-page" element={<NewPage />} />`
4. Add navigation link in navbar: `<NavLink to="/new-page">New Page</NavLink>`
5. Create component-specific CSS if needed
6. Test with `npm start`

### Adding a New Protected API Endpoint (Requires Authentication)
1. **Create serverless function** in `netlify/functions/` (e.g., `getNewData.js`)
2. Use the serverless function pattern with Bearer token authentication:
   ```javascript
   const axios = require('axios');
   exports.handler = async function(event, context) {
     // Include CORS headers
     // Handle OPTIONS preflight
     // Access API key via process.env.REACT_APP_API_KEY
     // Call evenings.co API with Bearer token
     // Return data to frontend
   };
   ```
3. **In frontend component:** Call `/.netlify/functions/getNewData` instead of calling API directly
4. Use axios with error handling and loading states in useEffect
5. Display loading/error/success states in JSX
6. Test locally with `netlify dev` or deploy to Netlify

### Adding a Public API Endpoint (No Authentication Required)
1. If the endpoint doesn't require authentication (like `/streams/koska-radio/public/`), you can call it directly from the frontend
2. Import axios in component
3. Use useEffect for data fetching with loading/error states
4. No need for Netlify Functions proxy
5. Example: `KoskaRadioMarquee.jsx` calls public stream endpoint directly

### Working with Media Assets
- **Images:** Import in component: `import imageName from "./images/filename.ext"`
- **Videos:** Reference public path: `<source src="/videos/filename.mp4" type="video/mp4" />`
- **Ensure videos are in both `public/videos/` and `build/videos/` for production**

### Managing API Keys
- **Never commit API keys to repository**
- For local development: Add to `.env` file (gitignored)
- For production: Add to Netlify dashboard environment variables with "Functions" scope
- To rotate keys:
  1. Generate new key from evenings.co Account dashboard
  2. Update in Netlify dashboard environment variables
  3. Update local `.env` file
  4. Trigger new Netlify deployment

### Testing Netlify Functions Locally
```bash
# Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# Run local dev server with functions
netlify dev

# Site will be available at http://localhost:8888
# Functions will be at http://localhost:8888/.netlify/functions/*
```

## Security Best Practices

### ✅ DO
- Store API keys in Netlify environment variables with "Functions" scope
- Mark sensitive variables as "Contains secret values"
- Use Netlify Functions for authenticated API calls
- Keep `.env` file in `.gitignore`
- Rotate API keys if exposed
- Access env vars in functions via `process.env.VARIABLE_NAME`

### ❌ DON'T
- Commit `.env` files to repository
- Put API keys in `netlify.toml` (they won't be available to functions)
- Call authenticated APIs directly from browser code
- Share API keys in code comments or documentation
- Use `REACT_APP_*` variables for secrets in browser-side code

---
For questions or improvements to these instructions, please update this file or contact the project maintainer.
