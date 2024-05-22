import React from 'react';

const RegistrationForm = () => {
  // Form logic for volunteer registration
  return (
    <form>
      <label>Name:</label>
      <input type='text' />
      <label>Email:</label>
      <input type='email' />
      <button type='submit'>Register</button>
    </form>
  );
};

export default RegistrationForm;