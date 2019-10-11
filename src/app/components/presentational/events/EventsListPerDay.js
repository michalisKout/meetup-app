import React from 'react';
import PropTypes from 'prop-types';
import EventContainer from '../../container/EventContainer';

const EventsListPerDay = ({ events }) => {
  const eventsCollection = events.map(event => {
    const key = `key_${event.id}`;
    return <EventContainer key={key} event={event} />;
  });
  return (
    <>
      <div role="listitem">
        <div className="event-list" role="list">
          {eventsCollection}
        </div>
      </div>
    </>
  );
};

EventsListPerDay.propTypes = {
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

export default EventsListPerDay;
