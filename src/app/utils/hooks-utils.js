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
  const initSubscriptionsId = JSON.parse(localStorage.getItem('eventIdSubscriptionsStorage')) || [];
  const [eventIdSubscriptions, setEventIdSubscriptions] = useState(initSubscriptionsId);

  function subscribeEventToList() {
    localStorage.setItem('eventIdSubscriptionsStorage', JSON.stringify(eventIdSubscriptions));
  }

  useEffect(() => {
    subscribeEventToList();
  }, [eventIdSubscriptions]);

  return [eventIdSubscriptions, setEventIdSubscriptions];
};
