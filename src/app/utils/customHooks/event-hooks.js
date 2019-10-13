import { createContext, useState, useEffect, useContext } from 'react';
import * as EventsAPI from '../../api/eventsAPI';

const EVENT_NAME_VALIDATION = RegExp("^[a-zA-Z0-9',:]+( [a-zA-Z0-9',:]+)*$");

export const EventRegistrationsContext = createContext([]);
export const SearchContext = createContext('');
export const FreeEventsContext = createContext([]);

export const useEventRegistration = () => {
  const initRegistrationsId = JSON.parse(localStorage.getItem('eventIdRegistrationsStorage')) || [];
  const [eventIdRegistrations, setEventIdRegistrations] = useState(initRegistrationsId);

  function registerEventToList() {
    localStorage.setItem('eventIdRegistrationsStorage', JSON.stringify(eventIdRegistrations));
  }

  useEffect(() => {
    registerEventToList();
  }, [eventIdRegistrations]);

  return [eventIdRegistrations, setEventIdRegistrations];
};

export const useEventsListData = () => {
  const { searchValue } = useContext(SearchContext);
  const { freeEvents } = useContext(FreeEventsContext);

  const [eventsListData, setEventsListData] = useState([]);
  const [optimizedSearchLengthOnQuickTyping, setOptimizedSearchLengthOnQuickTyping] = useState(3);
  const searchValueIsEmpty = searchValue === '';

  const isSearchValueOptimized = () => {
    const searchValueLetterLength = searchValue.split('').length;
    const hasTheRequiredLength = searchValueLetterLength >= optimizedSearchLengthOnQuickTyping;
    if (hasTheRequiredLength) {
      const dyncamicValidSearchLength =
        optimizedSearchLengthOnQuickTyping + searchValue.split('').length;

      setOptimizedSearchLengthOnQuickTyping(dyncamicValidSearchLength);
    }

    return hasTheRequiredLength;
  };

  const searchForEvents = () => {
    const eventName = searchValue;
    const isOptimizedAndValidInput =
      eventName && EVENT_NAME_VALIDATION.test(eventName) && isSearchValueOptimized();

    if (isOptimizedAndValidInput) {
      EventsAPI.getEventsByName(setEventsListData, eventName);
    }
  };

  useEffect(() => {
    let isFetching = true;
    if (isFetching) {
      if (searchValue) {
        searchForEvents();
      }

      if (searchValueIsEmpty) {
        EventsAPI.getEventsByDate(setEventsListData);
      }
    }

    return () => {
      isFetching = false;
      setOptimizedSearchLengthOnQuickTyping(3);
    };
  }, [searchValue]);

  useEffect(() => {
    const hasFreeEvents = freeEvents && freeEvents.length > 0;
    if (hasFreeEvents) setEventsListData(freeEvents);
  }, [freeEvents]);

  return [eventsListData, setEventsListData];
};

export const useEventCity = cityId => {
  const initCityData = {
    id: 0,
    name: '',
  };

  const [cityData, setCityData] = useState(initCityData);
  useEffect(() => {
    let cityCleanup = true;
    if (cityId && cityCleanup) {
      EventsAPI.getCityEventById(cityId, setCityData);
    }
    return () => (cityCleanup = false);
  }, [cityId]);

  return [cityData, setCityData];
};
