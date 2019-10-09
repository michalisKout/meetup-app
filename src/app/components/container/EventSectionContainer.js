import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import EventSections from '../presentational/events/EventSections';
import { getEventsByDate, getEventByName } from '../../api/events';

const initEventsPerDay = [];

export default function EventSectionContainer() {
  const [eventsPerDay, setEventsPerDay] = useState(initEventsPerDay);
  const [inputValue, setInputValue] = useState('');

  function eventsPerDayHandler(data) {
    setEventsPerDay(data);
  }

  function handleInputValue(event) {
    const validationRegex = RegExp("^[a-zA-Z0-9',:]+( [a-zA-Z0-9',:]+)*$");
    const eventName = event.target.value;

    if (validationRegex.test(eventName)) {
      console.log(eventName);
      setInputValue(eventName);
      getEventByName(eventsPerDayHandler, eventName);
    }

    if (eventName === '') {
      getEventsByDate(eventsPerDayHandler);
    }
  }
  useEffect(() => {
    console.log(eventsPerDay);
    getEventsByDate(eventsPerDayHandler);
  }, []);

  return (
    <EventSections
      eventsPerDay={eventsPerDay}
      handleValue={handleInputValue}
      inputValue={inputValue}
    />
  );
}

EventSectionContainer.prototype = {
  eventsPerDay: PropTypes.array.isRequired,
};
