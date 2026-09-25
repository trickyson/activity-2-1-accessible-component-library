function AccessibleNav() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <nav className="site-nav" aria-label="Main navigation">
        <a href="#main-content">Home</a>
        <a href="#accessibility-notes">Accessibility Notes</a>
        <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noreferrer">
          WCAG Reference
        </a>
      </nav>
    </header>
  );
}

export default AccessibleNav;
