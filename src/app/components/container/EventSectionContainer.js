import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import EventSections from '../presentational/events/EventSections';
import { getEventsByDate } from '../../api/events';

const initEventsPerDay = [];

export default function EventSectionContainer() {
  const [eventsPerDay, setEventsPerDay] = useState(initEventsPerDay);

  function eventsPerDayHandler(data) {
    setEventsPerDay(data);
  }

  useEffect(() => {
    async function eventsPolling() {
      await getEventsByDate(eventsPerDayHandler);
    }
    eventsPolling();
  }, []);

  return <EventSections eventsPerDay={eventsPerDay} />;
}

EventSectionContainer.prototype = {
  eventsPerDay: PropTypes.array.isRequired,
};
