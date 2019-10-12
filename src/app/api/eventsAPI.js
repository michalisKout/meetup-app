import EventsDataTransformer from './EventsDataTransformer';
import { constructErrorMessage } from '../utils/error-utils';
import axios from './axios.instance';

const SORT_BY_DATE_QUERY = `_sort=startDate&_order=asc`;

const getAPIResponseWithQuery = query => axios.get(`events${query}`);

const updateStateWithTransformedResponseData = (eventsResponse, setHookHandler) => {
  const groupedEvents = new EventsDataTransformer(eventsResponse).eventsListGroupedByDay;
  setHookHandler(groupedEvents);
};

const responseHandler = async (stateHandler, queryParams) => {
  try {
    const eventsResponse = await getAPIResponseWithQuery(queryParams);

    updateStateWithTransformedResponseData(eventsResponse, stateHandler);
  } catch (error) {
    throw new Error(constructErrorMessage(error));
  }
};

export const getAllEvents = stateHandler => {
  responseHandler(stateHandler, '');
};

export const getEventsByName = (stateHandler, eventName) => {
  const eventsByNameQuery = `?name_like=${eventName}&${SORT_BY_DATE_QUERY}`;
  responseHandler(stateHandler, eventsByNameQuery);
};

export const getEventsByIdSortedByDate = (stateHandler, eventIdList) => {
  const bindedQueryParameters = eventIdList.map(eventId => `id=${eventId}`).join('&');
  const eventsByIdQuery = `?${bindedQueryParameters}&${SORT_BY_DATE_QUERY}`;
  responseHandler(stateHandler, eventsByIdQuery);
};

export const getFreeEvents = stateHandler => {
  const freeEventsQuery = `?isFree=true&${SORT_BY_DATE_QUERY}`;
  responseHandler(stateHandler, freeEventsQuery);
};

export const getEventsByDate = stateHandler => {
  const eventsByDateQuery = `?${SORT_BY_DATE_QUERY}`;
  responseHandler(stateHandler, eventsByDateQuery);
};
