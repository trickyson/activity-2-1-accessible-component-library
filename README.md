# Activity 2.1 Accessible Component Library

**Student Name:** Patrick Jason L. Torres  
**Activity:** Create and Submit an Accessible Component Library  
**Framework Used:** React 19 with Vite  

## Project Overview

This project is a small accessible component library built with React 19. It demonstrates three reusable UI components required for Activity 2.1: Button, Input Form, and Navigation Menu. The components follow basic accessibility practices such as visible labels, semantic HTML, keyboard focus support, and ARIA attributes where appropriate.

## Components Created

| Component | File | Accessibility Feature |
|---|---|---|
| Accessible Button | `src/components/AccessibleButton.jsx` | Uses a visible button label and `aria-label` |
| Accessible Input Form | `src/components/AccessibleInput.jsx` | Uses `label`, `htmlFor`, `id`, `required`, and `aria-describedby` |
| Accessible Navigation Menu | `src/components/AccessibleNav.jsx` | Uses semantic `nav`, `aria-label`, keyboard-friendly links, and skip link |

## Accessibility Issues Fixed

| Issue | Fix Applied |
|---|---|
| Button action may be unclear to screen readers | Added `aria-label` and visible text |
| Input may be hard to identify | Added a visible label connected to the input with `htmlFor` and `id` |
| Helper text may not be announced | Added `aria-describedby` to connect the input with its helper text |
| Keyboard users may not see where focus is located | Added visible `:focus-visible` outline styles |
| Users may need to skip navigation | Added a skip link that goes directly to the main content |
| Navigation landmark may be unclear | Added semantic `<nav>` with `aria-label="Main navigation"` |

## Accessibility Testing

The project includes a static accessibility check:

```bash
npm run audit:static
# Activity 2.1 Accessible Component Library

**Student Name:** Patrick Jason L. Torres  
**Activity:** Create and Submit an Accessible Component Library  
**Framework Used:** React 19 with Vite  

## Project Overview

This project is a small accessible component library built with React 19. It demonstrates three reusable UI components required for Activity 2.1: Button, Input Form, and Navigation Menu. The components follow basic accessibility practices such as visible labels, semantic HTML, keyboard focus support, and ARIA attributes where appropriate.

## Components Created

| Component | File | Accessibility Feature |
|---|---|---|
| Accessible Button | `src/components/AccessibleButton.jsx` | Uses a visible button label and `aria-label` |
| Accessible Input Form | `src/components/AccessibleInput.jsx` | Uses `label`, `htmlFor`, `id`, `required`, and `aria-describedby` |
| Accessible Navigation Menu | `src/components/AccessibleNav.jsx` | Uses semantic `nav`, `aria-label`, keyboard-friendly links, and skip link |

## Accessibility Issues Fixed

| Issue | Fix Applied |
|---|---|
| Button action may be unclear to screen readers | Added `aria-label` and visible text |
| Input may be hard to identify | Added a visible label connected to the input with `htmlFor` and `id` |
| Helper text may not be announced | Added `aria-describedby` to connect the input with its helper text |
| Keyboard users may not see where focus is located | Added visible `:focus-visible` outline styles |
| Users may need to skip navigation | Added a skip link that goes directly to the main content |
| Navigation landmark may be unclear | Added semantic `<nav>` with `aria-label="Main navigation"` |

## Accessibility Testing

The project includes a static accessibility check:

```bash
npm run audit:static
```

Official browser testing should be completed with:

- Axe DevTools
- Chrome Lighthouse Accessibility Audit

## Screenshot List

Include the following screenshots in the final PDF report:

1. Running application home screen
2. Accessible Button component
3. Accessible Input Form component
4. Accessible Navigation Menu component
5. Axe DevTools result
6. Lighthouse Accessibility result
7. GitHub repository page

## GitHub Repository

GitHub link: `https://github.com/trickyson/activity-2-1-accessible-component-library`

## Run the Project

```bash
npm install
npm run dev
```

Open the local development URL shown in the terminal.

## Build the Project

```bash
npm run build
```
```

Official browser testing should be completed with:

- Axe DevTools
- Chrome Lighthouse Accessibility Audit

## Screenshot List

Include the following screenshots in the final PDF report:

1. Running application home screen
2. Accessible Button component
3. Accessible Input Form component
4. Accessible Navigation Menu component
5. Axe DevTools result
6. Lighthouse Accessibility result
7. GitHub repository page

## GitHub Repository

GitHub link: https://github.com/trickyson/activity-2-1-accessible-component-library

## Run the Project

```bash
npm install
npm run dev
```

Open the local development URL shown in the terminal.

## Build the Project

```bash
npm run build
```
