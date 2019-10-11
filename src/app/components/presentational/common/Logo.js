import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ smallText, largeText }) => {
  return (
    <div className="topheader__logo">
      <span className="topheader__logo--small">{smallText}</span>
      <span className="topheader__logo--large">{largeText}</span>
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
