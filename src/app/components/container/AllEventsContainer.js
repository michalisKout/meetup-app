import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import EventSections from '../presentational/events/EventSections';
import { getUnRegisteredEventsByDate, getEventsByName } from '../../api/events';
import {
  SearchContext,
  FreeEventsContext,
  EventSubscriptionsContext,
} from '../../utils/hooks-utils';
import { getStoredEventIds } from '../../utils/storage-utils';

const initEventsPerDay = [];

export default function EventSectionContainer() {
  const [eventsListData, setEventsPerDay] = useState(initEventsPerDay);
  const { searchValue } = useContext(SearchContext);
  const { freeEvents } = useContext(FreeEventsContext);
  const { eventIdSubscriptions } = useContext(EventSubscriptionsContext);

  useEffect(() => {
    const eventName = searchValue;
    const validationRegex = RegExp("^[a-zA-Z0-9',:]+( [a-zA-Z0-9',:]+)*$");
    const isValidInput = validationRegex.test(eventName);
    const registeredEventIds = getStoredEventIds();
    const hasEventIdsRegistered = getStoredEventIds().length > 0;
    if (isValidInput) {
      getEventsByName(setEventsPerDay, eventName);
    } else if (hasEventIdsRegistered) {
      getUnRegisteredEventsByDate(setEventsPerDay, registeredEventIds);
    } else {
      getUnRegisteredEventsByDate(setEventsPerDay, eventIdSubscriptions);
    }
  }, [searchValue, eventIdSubscriptions]);

  useEffect(() => {
    setEventsPerDay(freeEvents);
  }, [freeEvents]);

  return <EventSections eventsListData={eventsListData} />;
}

EventSectionContainer.prototype = {
  eventsListData: PropTypes.array.isRequired,
};
