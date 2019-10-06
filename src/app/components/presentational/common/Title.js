import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text, isFree }) => {
  return (
    <div className="event__title">
      {text}
      <span className="event__title--free">{isFree ? ' FREE!!!' : null}</span>
    </div>
  );
};

Title.prototype = {
  text: PropTypes.string.isRequired,
};
export default Title;
