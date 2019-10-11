import { groupByDateOption } from './date-utils';

const getGroupedByDateData = data => {
  const groupedEvents = groupByDateOption(data);
  const groupedEventsListed = Object.values(groupedEvents);

  return groupedEventsListed;
};

export const updateStateWithResponseData = (eventsResponse = { data: {} }, stateHandler = null) => {
  const { data } = eventsResponse;
  const eventsByName = getGroupedByDateData(data);
  stateHandler(eventsByName);
};
