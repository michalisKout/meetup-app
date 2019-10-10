import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import EventSections from '../presentational/events/EventSections';
import { getEventsByDate, getEventsByName } from '../../api/events';
import { SearchContext, FreeEventsContext } from '../../utils/hooks-utils';

const initEventsPerDay = [];

export default function EventSectionContainer() {
  const [eventsListData, setEventsPerDay] = useState(initEventsPerDay);
  const { searchValue } = useContext(SearchContext);
  const { freeEvents } = useContext(FreeEventsContext);

  function eventsPerDayHandler(data) {
    setEventsPerDay(data);
  }

  useEffect(() => {
    const eventName = searchValue;
    const validationRegex = RegExp("^[a-zA-Z0-9',:]+( [a-zA-Z0-9',:]+)*$");
    const isValidInput = validationRegex.test(eventName);

    if (isValidInput) {
      getEventsByName(eventsPerDayHandler, eventName);
    } else {
      getEventsByDate(eventsPerDayHandler);
    }
  }, [searchValue]);

  useEffect(() => {
    eventsPerDayHandler(freeEvents);
  }, [freeEvents]);

  return <EventSections eventsListData={eventsListData} />;
}

EventSectionContainer.prototype = {
  eventsListData: PropTypes.array.isRequired,
};
