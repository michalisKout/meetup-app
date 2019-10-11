import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ cssClass, text, clickHandler }) => {
  return (
    <button type="button" className={`${cssClass} btn`} onClick={clickHandler}>
      {text}
    </button>
  );
};

Button.propTypes = {
  cssClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
export default Button;
