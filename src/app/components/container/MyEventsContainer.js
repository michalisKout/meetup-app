import React, { useState, useEffect } from 'react';
import EventSections from '../presentational/events/EventSections';
import { getStoredEventIds } from '../../utils/storage-utils';
import { getEventsByIdSortedByDate } from '../../api/events';

const MyEvents = () => {
  const [eventsSubscriptions, setEventsSubscriptions] = useState([]);

  useEffect(() => {
    const storedEventIds = getStoredEventIds();
    const hasStoredEventIds = storedEventIds.length > 0;

    if (hasStoredEventIds) {
      getEventsByIdSortedByDate(setEventsSubscriptions, storedEventIds);
    }
  }, []);

  return <EventSections eventsListData={eventsSubscriptions} />;
};

export default MyEvents;
