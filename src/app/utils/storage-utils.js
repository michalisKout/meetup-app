import _ from 'lodash';

const LOCAL_STORAGE_EVENTS_SUBSCRIPTIONS = 'eventIdSubscriptionsStorage';

export const getStoredEventIds = () => {
  const subscribedEventsIds =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_EVENTS_SUBSCRIPTIONS)) || [];

  return subscribedEventsIds;
};

export const checkEventSubscriptionIsStored = eventId =>
  getStoredEventIds().some(subscribedEvent => _.isEqual(subscribedEvent, eventId));
