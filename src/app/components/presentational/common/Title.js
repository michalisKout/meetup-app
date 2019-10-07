import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text, isFree }) => {
  const freeLabel = isFree ? ' FREE!!!' : null;
  return (
    <div className="event__title">
      {text}
      <span className="event__title--free">{freeLabel}</span>
    </div>
  );
};

Title.prototype = {
  text: PropTypes.string.isRequired,
};
export default Title;
