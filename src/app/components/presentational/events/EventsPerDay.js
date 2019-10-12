import React from 'react';
import PropTypes from 'prop-types';
import EventContainer from '../../container/EventContainer';

const EventsPerDay = ({ date, events }) => {
  const eventsCollection = events.map(event => {
    const key = `key_${event.id}`;
    return <EventContainer key={key} event={event} />;
  });
  return (
    <>
      <header>
        <h2>{date}</h2>
      </header>
      <div role="listitem">
        <div className="event-list-perday" role="list">
          {eventsCollection}
        </div>
      </div>
    </>
  );
};

EventsPerDay.propTypes = {
  date: PropTypes.string.isRequired,
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

export default EventsPerDay;
