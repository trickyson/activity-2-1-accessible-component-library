import { useId, useState } from 'react';

function AccessibleInput() {
  const id = useId();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setError('Enter a valid email address before submitting.');
      setSubmitted(false);
      return;
    }
    setError('');
    setSubmitted(true);
  }

  return (
    <form className="input-form" onSubmit={handleSubmit} noValidate>
      <h3>Contact Information</h3>
      <label htmlFor={id}>Email address <span aria-hidden="true">*</span></label>
      <input
        id={id} name="email" type="email" autoComplete="email" required
        value={email}
        onChange={event => { setEmail(event.target.value); setError(''); setSubmitted(false); }}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-help ${id}-error` : `${id}-help`}
      />
      <p id={`${id}-help`} className="help-text">Required. Example: student@example.com</p>
      {error && <p id={`${id}-error`} className="error-text" role="alert">{error}</p>}
      <button type="submit" className="secondary-button">Submit email</button>
      <p role="status" aria-live="polite" className="feedback">
        {submitted ? 'Email validated successfully. Demo only; no data was sent.' : ''}
      </p>
    </form>
  );
}
export default AccessibleInput;
