import React, { useState, useEffect } from 'react';
import EventsWrapper from '../presentational/events/EventsWrapper';
import { getStoredEventIds } from '../../utils/storage-utils';
import * as EventsAPI from '../../api/eventsAPI';

const MyEvents = () => {
  const [eventsRegistrations, setEventsRegistrations] = useState([]);

  useEffect(() => {
    const storedEventIds = getStoredEventIds();
    const hasStoredEventIds = storedEventIds.length > 0;

    if (hasStoredEventIds) {
      EventsAPI.getEventsByIdSortedByDate(setEventsRegistrations, storedEventIds);
    }
  }, []);

  return <EventsWrapper eventsListData={eventsRegistrations} />;
};

export default MyEvents;
