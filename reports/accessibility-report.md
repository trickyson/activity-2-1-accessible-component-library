# Accessibility Report

## Activity Information

- Student Name: Patrick Jason L. Torres
- Activity: Activity 2.1 Create and Submit an Accessible Component Library
- Framework: React 19 with Vite
- Components: Button, Input Form, Navigation Menu

## Component Summary

### Accessible Button

The button component uses semantic `<button>` markup, visible text, and an `aria-label`. This helps both sighted users and screen reader users understand the purpose of the button.

### Accessible Input Form

The input form uses a visible label connected through `htmlFor` and `id`. It also uses `aria-describedby` so the helper text can be announced by assistive technologies.

### Accessible Navigation Menu

The navigation menu uses a semantic `<nav>` element with `aria-label="Main navigation"`. Links are keyboard accessible by default, and the application includes a skip link for users who want to go directly to the main content.

## Accessibility Features Applied

- Semantic HTML elements were used for button, form, input, navigation, and main content.
- Visible labels were added for form fields.
- ARIA attributes were used only where they add useful context.
- Focus styles were added for keyboard users.
- Color contrast was considered by using dark text on light backgrounds and white text on dark buttons.
- A skip link was added for keyboard and screen reader users.

## Static Accessibility Check Result

The project includes a local script that checks whether important accessibility patterns are present in the source code.

Command:

```bash
npm run audit:static
```

Expected result:

```text
Static accessibility check
==========================
PASS - Button includes aria-label
PASS - Input has visible label
PASS - Input includes helper text relationship
PASS - Navigation uses semantic nav landmark
PASS - Skip link is available
PASS - Visible keyboard focus style exists

All static accessibility checks passed.
```

## Axe and Lighthouse Testing

The final report includes prepared sections for Axe DevTools and Chrome Lighthouse screenshots. These tests must be generated from the running browser application because the current workspace does not provide a browser audit environment.

## GitHub Repository

GitHub link: https://github.com/trickyson/activity-2-1-accessible-component-library
