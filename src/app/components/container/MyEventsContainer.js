import React, { useState, useEffect, useContext } from 'react';
import Events from '../presentational/events/Events';
import { getStoredEventIds } from '../../utils/storageUtils';
import * as EventsAPI from '../../api/eventsAPI';
import { EventRegistrationsContext } from '../../utils/customHooks/event-hooks';

const MyEvents = () => {
  const [storedEvents, setStoredEvents] = useState([]);
  const [eventIdRegistrations] = useContext(EventRegistrationsContext);

  useEffect(() => {
    const storedEventIds = getStoredEventIds();
    const hasStoredEventIds = storedEventIds.length > 0;

    if (hasStoredEventIds) {
      EventsAPI.getEventsByIdSortedByDate(setStoredEvents, eventIdRegistrations);
    }
    console.log('check');
  }, [eventIdRegistrations]);

  return <Events cssClass="marginTop" eventsListData={storedEvents} />;
};

export default MyEvents;
