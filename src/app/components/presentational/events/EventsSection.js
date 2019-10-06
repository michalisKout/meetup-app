import React from 'react';
import PropTypes from 'prop-types';
import EventList from './EventList';
import Title from '../common/Title';

const EventsSection = ({ events }) => {
  return (
    <>
      <Title />
      <EventList events={events} />
    </>
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
