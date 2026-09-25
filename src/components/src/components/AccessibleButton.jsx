function AccessibleButton({ label = 'Save' }) {
  function handleClick() {
    window.alert('Accessible button clicked successfully.');
  }

  return (
    <button
      type="button"
      className="primary-button"
      aria-label={label}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

export default AccessibleButton;
