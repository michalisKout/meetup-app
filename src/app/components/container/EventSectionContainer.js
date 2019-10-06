import React, { useEffect, useState } from 'react';
import EventsSection from '../presentational/events/EventsSection';
import { getAllEvents } from '../../api/events';

export default function EventSectionContainer() {
  const [events, setEvents] = useState([]);

  function eventsHandler(data) {
    setEvents(data);
  }

  useEffect(() => {
    async function eventsPolling() {
      await getAllEvents(eventsHandler);
    }
    eventsPolling();
  }, []);

  return <EventsSection events={events} />;
}
