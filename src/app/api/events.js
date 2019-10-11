import { constructErrorMessage, updateStateWithResponseData } from '../utils/api-utils';
import axios from './axios.instance';

const getAPIResponseWithQuery = query => axios.get(`events${query}`);

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
    const eventsResponse = await getAPIResponseWithQuery(`?name_like=${eventName}`);

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
    const bindedExcludeQueryParameters = eventIdsListToExclude
      .map(eventId => {
        return `id_ne=${eventId}`;
      })
      .join('&');
    const eventsResponse = await getAPIResponseWithQuery(
      `?${bindedExcludeQueryParameters}&_sort=startDate&_order=asc`,
    );

    updateStateWithResponseData(eventsResponse, stateHandler);
  } catch (error) {
    throw new Error(constructErrorMessage(error, 'getUnRegisteredEventsByDate'));
  }
};
