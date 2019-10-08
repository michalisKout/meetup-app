import React from 'react';
import PropTypes from 'prop-types';
import Title from '../common/Title';
import Button from '../common/Button';

const Event = ({ event, eventStartTime, eventDuration, cityName }) => {
  const { isFree, name } = event;
  const cityNameAndDuration = `${cityName} - ${`${eventDuration}h`}`;

  return (
    <>
      <div className="event" role="listitem">
        <div className="event__time">{eventStartTime}</div>
        <div className="event__info">
          <Title text={name} isFree={isFree} />
          <div className="event__info__city-name">{cityNameAndDuration}</div>
        </div>
        <Button />
      </div>
    </>
  );
};

Event.propTypes = {
  eventStartTime: PropTypes.string.isRequired,
  eventDuration: PropTypes.number.isRequired,
  cityName: PropTypes.string.isRequired,
  event: PropTypes.shape({
    id: PropTypes.number,
    isFree: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.number,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }).isRequired,
};

export default Event;
