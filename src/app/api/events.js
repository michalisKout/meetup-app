import { groupByDateOption } from '../utils/date-utils';
import { constructErrorMessage } from '../utils/api-utils';
import axios from './axios.instance';

export const getAllEvents = async stateHandler => {
  try {
    const eventsResponse = await axios.get('events');
    const { data } = eventsResponse;
    stateHandler(data);
  } catch (error) {
    throw new Error(constructErrorMessage(error));
  }
};

const getGroupedByDateData = data => {
  const groupedEvents = groupByDateOption(data);
  const groupedEventsListed = Object.values(groupedEvents);

  return groupedEventsListed;
};

export const getEventByName = async (stateHandler, eventName) => {
  try {
    const searchQueryByName = `?name=${eventName}`;
    const eventsResponse = await axios.get(`events${searchQueryByName}`);

    const { data } = eventsResponse;
    const eventsByName = getGroupedByDateData(data);

    stateHandler(eventsByName);
  } catch (error) {
    throw new Error(constructErrorMessage(error));
  }
};

export const getEventsByDate = async stateHandler => {
  try {
    const sortByStartDateQuery = '?_sort=startDate&_order=asc';
    const eventsResponse = await axios.get(`events${sortByStartDateQuery}`);

    const { data } = eventsResponse;
    const eventsPerDay = getGroupedByDateData(data);

    stateHandler(eventsPerDay);
  } catch (error) {
    throw new Error(constructErrorMessage(error));
  }
};
