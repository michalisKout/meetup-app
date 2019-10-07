import { groupByDateOption } from '../utils/date-utils';
import axios from './axios.instance';

export const getAllEvents = async handler => {
  try {
    const eventsResponse = await axios.get('events');
    const { data } = eventsResponse;
    handler(data);
  } catch (error) {
    throw new Error(`Server Error ${error}`);
  }
};

export const getEventsByDate = async handler => {
  try {
    const sortByStartDatequery = '?_sort=startDate&_order=asc';
    const eventsResponse = await axios.get(`events${sortByStartDatequery}`);

    const { data } = eventsResponse;

    const groupedEvents = groupByDateOption(data);
    const eventsPerDay = Object.values(groupedEvents);

    handler(eventsPerDay);
  } catch (error) {
    throw new Error(`Server Error ${error}`);
  }
};
