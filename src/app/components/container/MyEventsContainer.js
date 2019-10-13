import React, { useState, useEffect, useContext } from 'react';
import Events from '../presentational/events/Events';
import { getStoredEventIds } from '../../helpers/storage-helper';
import * as EventsAPI from '../../api/eventsAPI';
import { EventRegistrationsContext, useEventsCities } from '../../hooks/event-hooks';

const MyEvents = () => {
  const [storedEvents, setStoredEvents] = useState([]);
  const [eventIdRegistrations] = useContext(EventRegistrationsContext);
  const [cityDataList] = useEventsCities();

  useEffect(() => {
    const storedEventIds = getStoredEventIds();
    const hasStoredEventIds = storedEventIds.length > 0;

    if (hasStoredEventIds) {
      EventsAPI.updateEventsByIdSortedByDate(setStoredEvents, eventIdRegistrations);
    }
  }, [eventIdRegistrations]);

  return (
    <Events cssClass="marginTop" eventsListData={storedEvents} cityDataList={cityDataList || []} />
  );
};

export default MyEvents;
