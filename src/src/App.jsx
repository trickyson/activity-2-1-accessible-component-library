import AccessibleButton from './components/AccessibleButton.jsx';
import AccessibleInput from './components/AccessibleInput.jsx';
import AccessibleNav from './components/AccessibleNav.jsx';

function App() {
  return (
    <>
      <AccessibleNav />

      <main id="main-content" className="page-shell">
        <section className="hero" aria-labelledby="page-title">
          <p className="eyebrow">Activity 2.1</p>
          <h1 id="page-title">Accessible Component Library</h1>
          <p>
            This React 19 project demonstrates three reusable user interface
            components designed with keyboard access, clear labels, and
            readable contrast.
          </p>
        </section>

        <section className="component-grid" aria-label="Component examples">
          <article className="component-panel">
            <h2>Accessible Button</h2>
            <p>
              The button includes a visible label and an aria-label so assistive
              technologies can identify the action clearly.
            </p>
            <AccessibleButton label="Save Component" />
          </article>

          <article className="component-panel">
            <h2>Accessible Input Form</h2>
            <p>
              The input uses a visible label, helper text, and required field
              information for users who rely on screen readers.
            </p>
            <AccessibleInput />
          </article>

          <article className="component-panel">
            <h2>Keyboard Navigation Menu</h2>
            <p>
              The navigation menu uses semantic links and focus styles so users
              can move through the menu using the keyboard.
            </p>
            <a className="secondary-link" href="#accessibility-notes">
              View accessibility notes
            </a>
          </article>
        </section>

        <section id="accessibility-notes" className="notes">
          <h2>Accessibility Notes</h2>
          <ul>
            <li>All interactive elements can be reached with the keyboard.</li>
            <li>Inputs and buttons include readable labels.</li>
            <li>Focus indicators are visible on links, inputs, and buttons.</li>
            <li>Colors were selected for strong text and background contrast.</li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
