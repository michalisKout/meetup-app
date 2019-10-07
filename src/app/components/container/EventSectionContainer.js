import React, { useEffect, useState } from 'react';
import EventSections from '../presentational/events/EventSections';
import { getEventsByDate } from '../../api/events';

export default function EventSectionContainer() {
  const [eventsPerDay, setEventsPerDay] = useState([]);

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
