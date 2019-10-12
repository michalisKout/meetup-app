import { updateStateWithResponseData } from '../utils/api-utils';
import { constructErrorMessage } from '../utils/error-utils';
import axios from './axios.instance';

const SORT_BY_DATE_QUERY = `_sort=startDate&_order=asc`;

const getAPIResponseWithQuery = query => axios.get(`events${query}`);

export const getAllEvents = async stateHandler => {
  try {
    const eventsResponse = await getAPIResponseWithQuery('');

    updateStateWithResponseData(eventsResponse, stateHandler);
  } catch (error) {
    throw new Error(constructErrorMessage(error));
  }
};

export const getEventsByName = async (stateHandler, eventName) => {
  try {
    const eventsResponse = await getAPIResponseWithQuery(
      `?name_like=${eventName}&${SORT_BY_DATE_QUERY}`,
    );

    updateStateWithResponseData(eventsResponse, stateHandler);
  } catch (error) {
    throw new Error(constructErrorMessage(error));
  }
};

export const getEventsByIdSortedByDate = async (stateHandler, eventIdList) => {
  try {
    const bindedQueryParameters = eventIdList.map(eventId => `id=${eventId}`).join('&');

    const eventsResponse = await getAPIResponseWithQuery(
      `?${bindedQueryParameters}&${SORT_BY_DATE_QUERY}`,
    );

    updateStateWithResponseData(eventsResponse, stateHandler);
  } catch (error) {
    throw new Error(constructErrorMessage(error));
  }
};

export const getFreeEvents = async stateHandler => {
  try {
    const eventsResponse = await getAPIResponseWithQuery(`?isFree=true&${SORT_BY_DATE_QUERY}`);

    updateStateWithResponseData(eventsResponse, stateHandler);
  } catch (error) {
    throw new Error(constructErrorMessage(error));
  }
};

export const getEventsByDate = async stateHandler => {
  try {
    const eventsResponse = await getAPIResponseWithQuery(`?${SORT_BY_DATE_QUERY}`);

    updateStateWithResponseData(eventsResponse, stateHandler);
  } catch (error) {
    throw new Error(constructErrorMessage(error));
  }
};
