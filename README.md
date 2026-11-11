# Activity 2.1 — Accessible Component Library

**Student:** Patrick Jason L. Torres  
**Framework:** React 19 + Vite  
**Repository:** https://github.com/trickyson/activity-2-1-accessible-component-library

## Project overview
A responsive demonstration of three reusable, accessible React components.

| Component | File | Accessibility features |
|---|---|---|
| Button | `src/components/AccessibleButton.jsx` | Native button, keyboard activation, live status |
| Input Form | `src/components/AccessibleInput.jsx` | Visible label, required validation, accessible error feedback |
| Navigation Menu | `src/components/AccessibleNav.jsx` | Semantic navigation, skip link, keyboard-friendly links |

## Run and build
```bash
npm install
npm run dev
npm run build
```
Open the local URL shown by Vite.

## Implemented improvements
- Replaced blocking alert feedback with a live status message.
- Added email form validation with linked error text and success status.
- Preserved visible focus outlines, semantic navigation, and skip link.
- Maintained responsive layouts.

## Accessibility testing — not yet completed
1. Open the running application in Chrome.
2. Run axe DevTools and capture its actual findings.
3. Run Lighthouse Accessibility and capture its actual score.
4. Check Tab, Shift+Tab, Enter and skip-link navigation manually.
5. Obtain genuine peer feedback if required by the module.
6. Fix confirmed issues and repeat the relevant checks.

No axe, Lighthouse, or peer-test results are claimed until those tests are performed.

## Suggested report evidence
Screenshots of the application, button, input validation, navigation, axe results, Lighthouse results, and repository.

## Submission
Submit the source ZIP (excluding node_modules), GitHub URL, README, screenshots, and an official-template PDF report with genuine testing evidence.
