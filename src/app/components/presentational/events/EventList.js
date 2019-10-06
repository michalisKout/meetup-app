import React from 'react';
import PropTypes from 'prop-types';
import Event from './Event';

const EventList = ({ events }) => {
  const eventsCollection = events.map(event => {
    const key = `key_${event.id}`;
    return <Event key={key} event={event} />;
  });
  return <div className="event-list">{eventsCollection}</div>;
};

EventList.prototype = {
  events: PropTypes.array.isRequired,
};

export default EventList;
