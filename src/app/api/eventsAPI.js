import EventsDataTransformer from './EventsDataTransformer';
import { constructErrorMessage } from '../utils/error-utils';
import axios from './axios.instance';

const EVENTS_RESOURCE = 'events';
const CITIES_RESOURCE = 'cities';
const SORT_BY_DATE_QUERY = `_sort=startDate&_order=asc`;
const CITIES_ERROR_MESSAGE = 'There is a problem by fetching cities API resource';
const EVENTS_ERROR_MESSAGE = 'There is a problem by fetching events API resource';

const getAPIResponseWithQuery = query => axios.get(`${EVENTS_RESOURCE}${query}`);

const updateStateWithTransformedResponseData = (eventsResponse, setHookHandler) => {
  const transformer = new EventsDataTransformer(eventsResponse);
  setHookHandler(transformer.eventsListGroupedByDay);
};

const eventsResponseHandler = async (stateHandler, queryParams) => {
  try {
    const eventsResponse = await getAPIResponseWithQuery(queryParams);

    updateStateWithTransformedResponseData(eventsResponse, stateHandler);
  } catch (error) {
    throw new Error(constructErrorMessage(`${EVENTS_ERROR_MESSAGE}, ${error}`));
  }
};

export const getAllEvents = stateHandler => {
  eventsResponseHandler(stateHandler, '');
};

export const getEventsByName = (stateHandler, eventName) => {
  const eventsByNameQuery = `?name_like=${eventName}&${SORT_BY_DATE_QUERY}`;
  eventsResponseHandler(stateHandler, eventsByNameQuery);
};

export const getEventsByIdSortedByDate = (stateHandler, eventIdList) => {
  const bindedQueryParameters = eventIdList.map(eventId => `id=${eventId}`).join('&');
  const eventsByIdQuery = `?${bindedQueryParameters}&${SORT_BY_DATE_QUERY}`;
  eventsResponseHandler(stateHandler, eventsByIdQuery);
};

export const getFreeEvents = stateHandler => {
  const freeEventsQuery = `?isFree=true&${SORT_BY_DATE_QUERY}`;
  eventsResponseHandler(stateHandler, freeEventsQuery);
};

export const getEventsByDate = stateHandler => {
  const eventsByDateQuery = `?${SORT_BY_DATE_QUERY}`;
  eventsResponseHandler(stateHandler, eventsByDateQuery);
};

export const getCityEventById = async (cityId, cityHandler) => {
  const urlToFetch = `${CITIES_RESOURCE}/${cityId}`;
  try {
    const city = await axios.get(urlToFetch);
    cityHandler(city.data);
  } catch (e) {
    throw new Error(constructErrorMessage(CITIES_ERROR_MESSAGE));
  }
};
