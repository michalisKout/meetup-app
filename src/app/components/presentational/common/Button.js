import React from 'react';

const BUTTON_TEXT = 'Sign up';
const Button = () => {
  return (
    <div className="event__sign-up">
      <button type="button" className="btn btn-blue">
        {BUTTON_TEXT}
      </button>
    </div>
  );
};

export default Button;
