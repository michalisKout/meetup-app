import { createContext, useState, useEffect, useContext } from 'react';
import _ from 'lodash';
import * as EventsAPI from '../../api/eventsAPI';
import { getCityById } from '../../api/citiesAPI';

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

  useEffect(() => {
    let fetchIsFinished = true;

    if (fetchIsFinished) {
      const eventName = searchValue;
      const validationRegex = RegExp("^[a-zA-Z0-9',:]+( [a-zA-Z0-9',:]+)*$");
      const isValidInput = eventName && validationRegex.test(eventName);

      if (isValidInput) {
        EventsAPI.getEventsByName(setEventsListData, eventName);
      } else {
        EventsAPI.getEventsByDate(setEventsListData);
      }
    }

    return () => {
      fetchIsFinished = false;
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
    let cityIsFetched = true;
    if (cityId && cityIsFetched) {
      getCityById(cityId, setCityData);
    }
    return () => (cityIsFetched = false);
  }, [cityId]);

  return [cityData, setCityData];
};
