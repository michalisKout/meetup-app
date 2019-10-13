import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ cssClass, children, clickHandler }) => {
  return (
    <button type="button" data-hover="CANCEL" className={`${cssClass} btn`} onClick={clickHandler}>
      {children}
    </button>
  );
};

Button.propTypes = {
  cssClass: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
export default Button;
