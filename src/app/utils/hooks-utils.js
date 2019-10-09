import { createContext, useState, useEffect } from 'react';

export const SearchContext = createContext(null);

export const FreeEventsContext = createContext(null);

export const useModalDisplay = () => {
  const [display, setDisplay] = useState(false);

  function toggleModalDisplay() {
    setDisplay(!display);
  }

  return {
    display,
    toggleModalDisplay,
  };
};

export const EventSubscriptionsContext = createContext([]);

export const useEventSubScription = () => {
  const initSubscriptions = JSON.parse(localStorage.getItem('eventSubscriptionsStorage')) || [];
  const [eventSubscriptions, setEventSubscriptions] = useState(initSubscriptions);

  function subscribeEventToList() {
    localStorage.setItem('eventSubscriptionsStorage', JSON.stringify(eventSubscriptions));
  }

  useEffect(() => {
    subscribeEventToList();
  }, [eventSubscriptions]);

  return [eventSubscriptions, setEventSubscriptions];
};
