import React from 'react';
import PropTypes from 'prop-types';

const Event = ({ event }) => {
  const { id, isFree, name, city, startDate, endDate } = event;
  return (
    <>
      <div className="event">this is an meetup event </div>
      <div>
        {`id: ${id}, isFree: ${isFree}, name: ${name}, city: ${city}, start: ${startDate},
         end: ${endDate}`}
      </div>
    </>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isFree: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }).isRequired,
};
export default Event;
