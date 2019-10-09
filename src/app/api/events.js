import { groupByDateOption } from '../utils/date-utils';
import { constructErrorMessage } from '../utils/api-utils';
import axios from './axios.instance';

const getGroupedByDateData = data => {
  const groupedEvents = groupByDateOption(data);
  const groupedEventsListed = Object.values(groupedEvents);

  return groupedEventsListed;
};

const updateStateWithResponseData = (eventsResponse, stateHandler) => {
  const { data } = eventsResponse;
  const eventsByName = getGroupedByDateData(data);
  stateHandler(eventsByName);
};

export const getAllEvents = async stateHandler => {
  try {
    const eventsResponse = await axios.get('events');
    const { data } = eventsResponse;
    stateHandler(data);
  } catch (error) {
    throw new Error(constructErrorMessage(error));
  }
};

export const getEventByName = async (stateHandler, eventName) => {
  try {
    const searchQueryByName = `?name_like=${eventName}`;
    const eventsResponse = await axios.get(`events${searchQueryByName}`);

    updateStateWithResponseData(eventsResponse, stateHandler);
  } catch (error) {
    throw new Error(constructErrorMessage(error));
  }
};

export const getFreeEvents = async stateHandler => {
  try {
    const searchQueryByFreeEvents = `?isFree=true`;
    const eventsResponse = await axios.get(`events${searchQueryByFreeEvents}`);

    updateStateWithResponseData(eventsResponse, stateHandler);
  } catch (error) {
    throw new Error(constructErrorMessage(error));
  }
};

export const getEventsByDate = async stateHandler => {
  try {
    const sortByStartDateQuery = '?_sort=startDate&_order=asc';
    const eventsResponse = await axios.get(`events${sortByStartDateQuery}`);

    updateStateWithResponseData(eventsResponse, stateHandler);
  } catch (error) {
    throw new Error(constructErrorMessage(error));
  }
};
