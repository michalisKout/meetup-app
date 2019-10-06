import React from 'react';
import PropTypes from 'prop-types';
import Title from '../common/Title';

const Event = ({ event }) => {
  const { isFree, name, city } = event;
  return (
    <>
      <div className="event">
        <div className="event__time">18:00</div>
        <div className="event__info">
          <Title text={name} isFree={isFree} />
          <div>{` city name ${city}`}</div>
        </div>
        <div className="event__sign-up">
          <button type="button" className="btn btn-blue">
            sing up
          </button>
        </div>
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

/* <div>
{`id: ${id}, isFree: ${isFree}, name: ${name}, city: ${city}, start: ${startDate},
 end: ${endDate}`}
</div> */
