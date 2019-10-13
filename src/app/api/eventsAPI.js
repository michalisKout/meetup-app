import EventsDataTransformer from './EventsDataTransformer';
import { constructErrorMessage } from '../helpers/error-helper';
import axios from './axios.instance';

const EVENTS_RESOURCE = 'events';
const CITIES_RESOURCE = 'cities';
const SORT_BY_DATE_QUERY = `_sort=startDate&_order=asc`;
const getApiErrorMessage = resource => `There is a problem by fetching ${resource} API resource`;

const getAPIResponseWithQuery = query => axios.get(`${EVENTS_RESOURCE}${query}`);

const updateStateWithTransformedResponseData = (eventsResponse, setHookHandler) => {
  const transformer = new EventsDataTransformer(eventsResponse);
  setHookHandler(transformer.eventsListGroupedByDay);
};

const eventsResponseHandler = async (eventStateHandler, queryParams) => {
  try {
    const eventsResponse = await getAPIResponseWithQuery(queryParams);

    updateStateWithTransformedResponseData(eventsResponse, eventStateHandler);
  } catch (error) {
    throw new Error(constructErrorMessage(`${getApiErrorMessage(EVENTS_RESOURCE)}, ${error}`));
  }
};

export const updateAllEvents = eventStateHandler => {
  eventsResponseHandler(eventStateHandler, '');
};

export const updateEventsByName = (eventStateHandler, eventName) => {
  const eventsByNameQuery = `?name_like=${eventName}&${SORT_BY_DATE_QUERY}`;
  eventsResponseHandler(eventStateHandler, eventsByNameQuery);
};

export const updateEventsByIdSortedByDate = (eventStateHandler, eventIdList) => {
  const hasEventIds = eventIdList.length > 0;
  if (hasEventIds) {
    const bindedQueryParameters = eventIdList.map(eventId => `id=${eventId}`).join('&');
    const eventsByIdQuery = `?${bindedQueryParameters}&${SORT_BY_DATE_QUERY}`;

    eventsResponseHandler(eventStateHandler, eventsByIdQuery);
  } else {
    eventStateHandler([]);
  }
};

export const updateFreeEvents = eventStateHandler => {
  const freeEventsQuery = `?isFree=true&${SORT_BY_DATE_QUERY}`;
  eventsResponseHandler(eventStateHandler, freeEventsQuery);
};

export const updateEventsByDate = eventStateHandler => {
  const eventsByDateQuery = `?${SORT_BY_DATE_QUERY}`;
  eventsResponseHandler(eventStateHandler, eventsByDateQuery);
};

export const updateCityEventById = async (cityId, cityHandler) => {
  const urlToFetch = `${CITIES_RESOURCE}/${cityId}`;
  try {
    const city = await axios.get(urlToFetch);
    cityHandler(city.data);
  } catch (e) {
    throw new Error(constructErrorMessage(getApiErrorMessage(CITIES_RESOURCE)));
  }
};
