import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text, isFree }) => {
  const freeLabel = isFree ? ' FREE!!!' : null;
  return (
    <div className="event__title" role="heading" aria-level="4">
      {text}
      <span className="event__title--free">{freeLabel}</span>
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  isFree: PropTypes.bool.isRequired,
};
export default Title;
