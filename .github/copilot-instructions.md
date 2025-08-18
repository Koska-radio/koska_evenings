# Copilot Instructions for Koska Evenings

## Project Overview
- This is a React-based web application for an online radio platform, focused on broadcasting music and visuals from undisclosed locations.
- Source code is in `src/`, with main entry point `src/index.js` and root component `src/App.jsx`.
- Static assets (videos, images, CSS) are in `public/` and `src/images/`.
- Production builds output to `build/`, but development should use the React dev server for hot reloading.

## Developer Workflows
- **Development:** Run `npm start` from the project root to launch the local dev server (`localhost:3000`). Changes in `src/` are reflected live.
- **Build:** Run `npm run build` to generate the production build in `build/`.
- **Testing:** Tests are in `src/App.test.js` and use Jest. Run `npm test` to execute tests.
- **Debugging:** Use browser dev tools and React DevTools for component inspection. Console logs are common for debugging.

## Project-Specific Patterns
- **Component Structure:** Most UI is in functional components (e.g., `Home.jsx`, `Gallery.jsx`). Components import CSS from `src/style.css` or their own CSS files.
- **Media Integration:** Videos and images are referenced via relative paths (e.g., `/videos/DoomscrollShort.mp4`). Ensure assets are present in both `public/` and `build/` for correct serving.
- **Footer and Branding:** Footer uses custom images and external links. See `Home.jsx` for example of external link conventions (`rel="noopener noreferrer"`, `target="_blank"`).
- **Scrolling Effects:** Some components use scroll position (`window.scrollY`) for dynamic UI (see `Home.jsx`).

## External Dependencies
- React, ReactDOM, and standard React ecosystem packages (see `package.json`).
- No custom backend; all data is static or fetched from external APIs.

## Conventions
- Use semantic HTML and accessible attributes for links and images.
- CSS classes follow kebab-case (e.g., `soundcloud-link`, `main-container`).
- Keep assets organized in their respective folders (`src/images/`, `public/videos/`).

## Key Files
- `src/Home.jsx`: Example of main page structure, scroll effects, external links, and asset usage.
- `src/App.jsx`: Root component, entry point for routing and global layout.
- `src/style.css`: Main styling for components.
- `public/index.html`: HTML template for React app.

## Example: Adding a New Page
1. Create a new component in `src/` (e.g., `NewPage.jsx`).
2. Import and add it to `src/App.jsx` for routing/display.
3. Add any assets to `public/` or `src/images/` as needed.
4. Use `npm start` to verify live updates.

---
If any section is unclear or missing important project-specific details, please provide feedback to improve these instructions.
