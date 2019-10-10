import React, { useState, useEffect, useContext } from 'react';
import EventSections from '../presentational/events/EventSections';
import { getStoredEventIds } from '../../utils/storage-utils';
import { getEventsById } from '../../api/events';
import { EventSubscriptionsContext } from '../../utils/hooks-utils';

const MyEvents = ({ location }) => {
  const [eventsSubscriptions, setEventsSubscriptions] = useState([]);
  const { eventIdSubscriptions } = useContext(EventSubscriptionsContext);

  useEffect(() => {
    const storedEventIds = getStoredEventIds();
    const hasStoredEventIds = storedEventIds.length > 0;

    if (hasStoredEventIds) {
      getEventsById(setEventsSubscriptions, storedEventIds);
    }
  }, []);

  useEffect(() => {
    getEventsById(setEventsSubscriptions, eventIdSubscriptions);
  }, [eventIdSubscriptions]);
  return <EventSections eventsListData={eventsSubscriptions} location={location} />;
};

export default MyEvents;
