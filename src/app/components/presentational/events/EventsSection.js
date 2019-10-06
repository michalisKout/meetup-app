import React from 'react';
import PropTypes from 'prop-types';
import EventList from './EventList';

const EventsSection = ({ events }) => {
  return (
    <section className="wrapper">
      <h2>Tuseday 28th June</h2>
      <EventList events={events} />
    </section>
  );
};

EventsSection.prototype = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isFree: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventsSection;
