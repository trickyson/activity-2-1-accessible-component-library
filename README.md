# Activity 2.1 — Accessible Component Library

**Student:** Patrick Jason L. Torres  
**Framework:** React 19 + Vite  
**Repository:** https://github.com/trickyson/activity-2-1-accessible-component-library  
**Development branch:** `improve/activity-2-1-accessibility`  
**Verified GitHub Actions run:** [Accessibility audit #16](https://github.com/trickyson/activity-2-1-accessible-component-library/actions/runs/43042036646)  
**Audit date:** November 11, 2026

## Project overview

This activity demonstrates three reusable React components designed with semantic HTML, keyboard access, visible focus indicators, accessible feedback, and responsive layouts. The page presents a button, an email input form, and a navigation menu. This is a demonstration application; it does not persist button state or transmit submitted email addresses.

## Components and accessibility features

| Component | Source file | Implementation |
| --- | --- | --- |
| Accessible Button | `src/components/AccessibleButton.jsx` | Native `<button>`, Enter/Space activation, toggled label, `role="status"` and `aria-live="polite"` feedback |
| Accessible Input Form | `src/components/AccessibleInput.jsx` | Explicit `<label>`, `useId()`-based association, required email validation, `aria-invalid`, `aria-describedby`, `role="alert"` errors and success status |
| Accessible Navigation Menu | `src/components/AccessibleNav.jsx` | Semantic `<nav aria-label="Main navigation">`, keyboard-operable links and a skip-to-main-content link |

Additional page structure includes a `<main id="main-content" tabIndex="-1">` destination for the skip link, meaningful headings, and visible focus styles.

## Setup and local execution

**Prerequisites:** Node.js and npm.

```bash
npm install
npm run dev
```

Open the local address displayed by Vite. To verify a production build:

```bash
npm run build
npm run preview
```

## Accessibility issues addressed

The implementation includes the following preventive fixes and accessibility improvements:

1. **Action feedback:** Uses a live status message rather than a blocking JavaScript alert.
2. **Form identification:** Associates the email input with a visible label and a stable generated ID.
3. **Form validation:** Exposes invalid state and links error descriptions to the input; announces errors and success feedback.
4. **Keyboard access:** Uses native buttons and links, with a skip link to bypass repetitive navigation.
5. **Focus visibility and layout:** Provides visible keyboard focus and responsive component presentation.

These describe implemented changes, not a claim that a complete manual WCAG conformance review was performed.

## Verified testing results

The GitHub Actions workflow in `.github/workflows/accessibility-audit.yml` builds the React application, launches Chromium through Playwright, exercises the components, runs `@axe-core/playwright`, and generates a Lighthouse accessibility report.

**Evidence source:** [Successful GitHub Actions Run #16](https://github.com/trickyson/activity-2-1-accessible-component-library/actions/runs/43042036646), commit `9e6e2394e10569f01ada6757c816db74a18e73b9`.

| Check | Verified result | Evidence |
| --- | --- | --- |
| Production build | Passed | GitHub Actions build step |
| Button click and status announcement | Passed | `interaction-results.txt`, `02-button.png` |
| Invalid and valid email submissions | Passed | `interaction-results.txt`, `03-form-error.png` |
| First Tab, skip link and Enter | Passed | `interaction-results.txt`, `04-keyboard-skip-link.png` |
| Shift+Tab navigation and Enter/Space button activation | Passed | `interaction-results.txt` |
| axe-core automated accessibility scan | **0 detected violation categories** (40 passed checks; 0 incomplete) | `axe-results.json` |
| Lighthouse Accessibility | **100/100** | `lighthouse.report.html`, `lighthouse.report.json` |

The axe and Lighthouse results reflect the audited page and browser state at the time of this run. Automated checks alone do not establish complete WCAG compliance; manual assistive-technology and peer review remain useful additional steps. A separate manual axe DevTools extension screenshot or peer-review result is **not claimed** here.

## Genuine screenshots and audit evidence

The workflow uploads the **`activity-2-1-audit-evidence`** artifact, available under the successful run's **Artifacts** section. Download and extract it to access:

| File | Description |
| --- | --- |
| `01-application.png` | Full-page React application overview |
| `02-button.png` | Accessible Button after interaction |
| `03-form-error.png` | Input Form displaying validation feedback |
| `04-keyboard-skip-link.png` | Visible keyboard focus on the skip link |
| `interaction-results.txt` | Recorded automated interaction and keyboard test outcomes |
| `axe-results.json` | Raw axe-core audit findings |
| `lighthouse.report.html` | Human-readable Lighthouse audit report |
| `lighthouse.report.json` | Machine-readable Lighthouse audit results |

Screenshots and audit files were captured by the automated browser workflow; they are not generated or simulated test results.

## Project structure

```text
src/
  App.jsx
  components/
    AccessibleButton.jsx
    AccessibleInput.jsx
    AccessibleNav.jsx
  styles/
    global.css
scripts/
  browser-accessibility-audit.mjs
  static-accessibility-check.mjs
.github/
  workflows/
    accessibility-audit.yml
README.md
package.json
```

## Submission checklist

- [x] Three accessible React components
- [x] Source code pushed to GitHub development branch
- [x] Successful production build and automated browser checks
- [x] Genuine axe-core and Lighthouse audit reports
- [x] Actual browser screenshots and audit artifact
- [x] Final README with testing results and evidence references
- [ ] Merge the verified development branch into `main`
- [ ] Prepare the final NEUST-format PDF report and submission ZIP
- [ ] Complete peer testing if specifically required by the instructor

## References

- [W3C Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [WAI: Keyboard Accessibility](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html)
- [axe-core](https://github.com/dequelabs/axe-core)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview)
- [React documentation](https://react.dev/)
