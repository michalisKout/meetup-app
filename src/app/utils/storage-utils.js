import _ from 'lodash';

export const checkEventSubscriptionIsStored = event => {
  const subscribedEvents = JSON.parse(localStorage.getItem('eventSubscriptionsStorage')) || [];
  return subscribedEvents.some(subscribedEvent => _.isEqual(subscribedEvent, event));
};
