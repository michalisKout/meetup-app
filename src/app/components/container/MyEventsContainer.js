import React, { useState, useEffect } from 'react';
import Events from '../presentational/events/Events';
import { getStoredEventIds } from '../../utils/storageUtils';
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

  return <Events cssClass="marginTop" eventsListData={eventsRegistrations} />;
};

export default MyEvents;
