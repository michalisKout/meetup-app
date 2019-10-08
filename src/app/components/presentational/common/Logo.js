import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ smallText, largeText }) => {
  return (
    <div className="app-header__logo">
      <span className="app-header__logo--small">{smallText}</span>
      <span className="app-header__logo--large">{largeText}</span>
    </div>
  );
};

Logo.defaultProps = {
  smallText: 'my',
  largeText: 'Logo',
};

Logo.propTypes = {
  smallText: PropTypes.string,
  largeText: PropTypes.string,
};

export default Logo;
