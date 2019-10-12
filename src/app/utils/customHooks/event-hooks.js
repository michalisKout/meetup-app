import { createContext, useState, useEffect, useContext } from 'react';
import _ from 'lodash';
import * as EventsAPI from '../../api/eventsAPI';
import { getCityById } from '../../api/citiesAPI';

const EVENT_NAME_VALIDATION = RegExp("^[a-zA-Z0-9',:]+( [a-zA-Z0-9',:]+)*$");

export const EventRegistrationsContext = createContext([]);
export const SearchContext = createContext(null);
export const FreeEventsContext = createContext(null);

export const useEventSubScription = () => {
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
  const [optimizedSearchLength, setOptimizedSearchLength] = useState(3);
  const inputIsEmpty = searchValue === '';

  const isSearchValueOptimized = () => {
    const searchValueLetterLength = searchValue.split('').length;
    const hasTheRequiredLength = searchValueLetterLength >= optimizedSearchLength;
    if (hasTheRequiredLength) {
      setOptimizedSearchLength(optimizedSearchLength + searchValue.split('').length);
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
    let fetchNotFinished = true;

    if (fetchNotFinished) {
      if (searchValue) {
        searchForEvents();
      }

      if (inputIsEmpty) {
        EventsAPI.getEventsByDate(setEventsListData);
      }
    }

    return () => {
      fetchNotFinished = false;
      setOptimizedSearchLength(3);
    };
  }, [searchValue]);

  useEffect(() => {
    setEventsListData(freeEvents);
  }, [freeEvents]);

  return [eventsListData, setEventsListData];
};

export const useEventRegistrationCheck = id => {
  const [eventIsAlreadyRegistered, setEventIsAlreadyRegistered] = useState(false);

  const [eventIdRegistrations] = useContext(EventRegistrationsContext);

  useEffect(() => {
    const hasRegistrationIds = eventIdRegistrations.length > 0;

    if (hasRegistrationIds) {
      const eventIdRegistered = eventIdRegistrations.some(subEventId => _.isEqual(subEventId, id));
      setEventIsAlreadyRegistered(eventIdRegistered);
    }
  }, [eventIdRegistrations]);

  return [eventIsAlreadyRegistered, setEventIsAlreadyRegistered];
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
      getCityById(cityId, setCityData);
    }
    return () => (cityCleanup = false);
  }, [cityId]);

  return [cityData, setCityData];
};
