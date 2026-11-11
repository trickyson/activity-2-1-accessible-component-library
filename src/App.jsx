import AccessibleButton from './components/AccessibleButton.jsx';
import AccessibleInput from './components/AccessibleInput.jsx';
import AccessibleNav from './components/AccessibleNav.jsx';

function App() {
  return (
    <>
      <AccessibleNav />
      <main id="main-content" className="page-shell" tabIndex="-1">
        <section className="hero" aria-labelledby="page-title">
          <p className="eyebrow">Module 2 · Activity 2.1</p>
          <h1 id="page-title">Accessible Component Library</h1>
          <p>Three reusable React 19 components designed for inclusive interaction, clear feedback, and keyboard navigation.</p>
        </section>
        <section id="components" className="component-grid" aria-label="Component examples">
          <article className="component-panel">
            <span className="component-number">01 / ACTION</span>
            <h2>Accessible Button</h2>
            <p>Native button semantics, visible focus, and an announced status update.</p>
            <AccessibleButton label="Save Component" />
          </article>
          <article className="component-panel">
            <span className="component-number">02 / FORM</span>
            <h2>Accessible Input Form</h2>
            <p>Associated label, required-field validation, and accessible error messages.</p>
            <AccessibleInput />
          </article>
          <article className="component-panel">
            <span className="component-number">03 / NAVIGATION</span>
            <h2>Keyboard Navigation Menu</h2>
            <p>Use Tab to navigate the header links, Enter to activate them, and the skip link to reach the main content.</p>
            <a className="secondary-link" href="#accessibility-notes">View accessibility notes</a>
          </article>
        </section>
        <section id="accessibility-notes" className="notes" aria-labelledby="notes-title">
          <h2 id="notes-title">Accessibility by design</h2>
          <ul>
            <li>Native semantic controls and accessible names</li>
            <li>Visible focus indicators and keyboard-operable navigation</li>
            <li>Form error descriptions and live status announcements</li>
            <li>Responsive layouts and readable text contrast</li>
          </ul>
          <p className="help-text">Automated axe and Lighthouse results must be collected from a real browser session; these design measures do not certify WCAG conformance.</p>
        </section>
      </main>
    </>
  );
}
export default App;
