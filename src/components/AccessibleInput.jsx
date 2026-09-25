function AccessibleInput() {
  return (
    <form className="input-form" aria-labelledby="email-form-title">
      <h3 id="email-form-title">Contact Information</h3>

      <label htmlFor="email-address">Email address</label>
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        aria-describedby="email-help"
        required
      />
      <p id="email-help" className="help-text">
        Enter a valid email address. This field is required.
      </p>

      <button type="submit" className="secondary-button" aria-label="Submit email form">
        Submit
      </button>
    </form>
  );
}

export default AccessibleInput;
