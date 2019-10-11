import { constructErrorMessage, updateStateWithResponseData } from '../utils/api-utils';
import axios from './axios.instance';

const getAPIResponseWithQuery = (query, eventIdsListToExclude = []) => {
  const bindedExcludeQueryParameters = eventIdsListToExclude
    .map(eventId => {
      return `id_ne=${eventId}`;
    })
    .join('&');

  return axios.get(`events?${bindedExcludeQueryParameters}&${query}`);
};

export const getAllEvents = async stateHandler => {
  try {
    const eventsResponse = await getAPIResponseWithQuery('');
    const { data } = eventsResponse;
    stateHandler(data);
  } catch (error) {
    throw new Error(constructErrorMessage(error, 'getAllUnRegisteredEvents'));
  }
};

export const getEventsByName = async (stateHandler, eventName) => {
  try {
    const eventsResponse = await getAPIResponseWithQuery(`name_like=${eventName}`);

    updateStateWithResponseData(eventsResponse, stateHandler);
  } catch (error) {
    throw new Error(constructErrorMessage(error, 'getEventsByName'));
  }
};

export const getEventsById = async (stateHandler, eventIdList) => {
  try {
    const bindedQueryParameters = eventIdList
      .map(eventId => {
        return `id=${eventId}`;
      })
      .join('&');

    const eventsResponse = await getAPIResponseWithQuery(`?${bindedQueryParameters}`);

    updateStateWithResponseData(eventsResponse, stateHandler);
  } catch (error) {
    throw new Error(constructErrorMessage(error, 'getEventsById'));
  }
};

export const getFreeEvents = async stateHandler => {
  try {
    const eventsResponse = await getAPIResponseWithQuery(`?isFree=true`);

    updateStateWithResponseData(eventsResponse, stateHandler);
  } catch (error) {
    throw new Error(constructErrorMessage(error, 'getFreeEvents'));
  }
};

export const getUnRegisteredEventsByDate = async (stateHandler, eventIdsListToExclude) => {
  try {
    const eventsResponse = await getAPIResponseWithQuery(
      `_sort=startDate&_order=asc`,
      eventIdsListToExclude,
    );

    updateStateWithResponseData(eventsResponse, stateHandler);
  } catch (error) {
    throw new Error(constructErrorMessage(error, 'getUnRegisteredEventsByDate'));
  }
};
