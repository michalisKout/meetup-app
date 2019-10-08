import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import EventSections from '../presentational/events/EventSections';
import { getEventsGroupedByDate } from '../../api/events';

const initEventsPerDay = [];

export default function EventSectionContainer() {
  const [eventsPerDay, setEventsPerDay] = useState(initEventsPerDay);

  function eventsPerDayHandler(data) {
    setEventsPerDay(data);
  }

  useEffect(() => {
    getEventsGroupedByDate(eventsPerDayHandler);
  }, []);

  return <EventSections eventsPerDay={eventsPerDay} />;
}

EventSectionContainer.prototype = {
  eventsPerDay: PropTypes.array.isRequired,
};
