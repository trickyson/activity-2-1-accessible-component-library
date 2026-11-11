import { useState } from 'react';

function AccessibleButton({ label = 'Save Component' }) {
  const [saved, setSaved] = useState(false);
  return (
    <div className="button-demo">
      <button type="button" className="primary-button" onClick={() => setSaved(value => !value)}>
        {saved ? 'Reset saved state' : label}
      </button>
      <p role="status" aria-live="polite" className="feedback">
        {saved ? 'Component saved successfully in this demonstration.' : 'Ready to save.'}
      </p>
    </div>
  );
}
export default AccessibleButton;
