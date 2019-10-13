import { createContext, useState, useEffect, useContext, useReducer } from 'react';
import * as EventsAPI from '../api/eventsAPI';

const EVENT_NAME_VALIDATION = RegExp("^[a-zA-Z0-9',:]+( [a-zA-Z0-9',:]+)*$");

export const EventRegistrationsContext = createContext([]);
export const SearchContext = createContext('');
export const FreeEventsContext = createContext([]);

export const useEventRegistration = () => {
  const eventIdReducer = (state, action) => {
    const { type, id } = action;

    switch (type) {
      case 'insert':
        return [...state, id];
      case 'remove':
        return state.filter(eventId => eventId !== id);
      default:
        return [];
    }
  };
  const initRegistrationsId = JSON.parse(localStorage.getItem('eventIdRegistrationsStorage')) || [];
  const [eventIdRegistrations, dispatchEventId] = useReducer(eventIdReducer, initRegistrationsId);

  function registerEventToList() {
    localStorage.setItem('eventIdRegistrationsStorage', JSON.stringify(eventIdRegistrations));
  }

  useEffect(() => {
    registerEventToList();
  }, [eventIdRegistrations]);

  return [eventIdRegistrations, dispatchEventId];
};

export const useEventsListData = () => {
  const { searchValue } = useContext(SearchContext);
  const { freeEvents } = useContext(FreeEventsContext);

  const [eventsListData, setEventsListData] = useState([]);

  const searchValueIsEmpty = searchValue === '';

  const searchForEvents = () => {
    const eventName = searchValue;
    const isValidInput = eventName && EVENT_NAME_VALIDATION.test(eventName);

    if (isValidInput) {
      EventsAPI.updateEventsByName(setEventsListData, eventName);
    }
  };

  useEffect(() => {
    let isFetching = true;
    if (isFetching) {
      if (searchValue) {
        searchForEvents();
      }

      if (searchValueIsEmpty) {
        EventsAPI.updateEventsByDate(setEventsListData);
      }
    }

    return () => {
      isFetching = false;
    };
  }, [searchValue]);

  useEffect(() => {
    const hasFreeEvents = freeEvents && freeEvents.length > 0;
    if (hasFreeEvents) setEventsListData(freeEvents);
  }, [freeEvents]);

  return [eventsListData, setEventsListData];
};

export const useEventCity = (cityId, citiesList = []) => {
  const initCityData = {
    id: 0,
    name: '',
  };

  const [cityData, setCityData] = useState(initCityData);
  useEffect(() => {
    if (cityId && citiesList.length > 0) {
      setCityData(citiesList.find(city => city.id === cityId));
    }
  }, [citiesList]);

  return [cityData, setCityData];
};

export const useEventsCities = () => {
  const initCityData = [];

  const [cityDataList, setCityDataList] = useState(initCityData);
  useEffect(() => {
    EventsAPI.updateCitiesEventById(setCityDataList);
  }, []);

  return [cityDataList, setCityDataList];
};
