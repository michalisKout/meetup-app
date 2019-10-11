import _ from 'lodash';

const LOCAL_STORAGE_EVENTS_SUBSCRIPTIONS = 'eventIdRegistrationsStorage';

export const getStoredEventIds = () => {
  const registeredEventsIds =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_EVENTS_SUBSCRIPTIONS)) || [];

  return registeredEventsIds;
};

export const checkEventRegistrationIsStored = eventId =>
  getStoredEventIds().some(registeredEvent => _.isEqual(registeredEvent, eventId));
