import React from 'react';
import PropTypes from 'prop-types';
import EventContainer from '../../container/EventContainer';

const EventList = ({ events }) => {
  const eventsCollection = events.map(event => {
    const key = `key_${event.id}`;
    return <EventContainer key={key} event={event} />;
  });
  return <div className="event-list">{eventsCollection}</div>;
};

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isFree: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      city: PropTypes.number.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default EventList;
