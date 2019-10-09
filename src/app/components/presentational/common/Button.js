import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ cssClass, text, clickHandler, buttonDisabled }) => {
  const btnText = buttonDisabled ? 'Signed' : text;
  return (
    <button
      type="button"
      className={`${cssClass} btn`}
      disabled={buttonDisabled}
      onClick={clickHandler}
    >
      {btnText}
    </button>
  );
};

Button.propTypes = {
  buttonDisabled: PropTypes.bool.isRequired,
  cssClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
export default Button;
