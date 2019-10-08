import { groupByDateOption } from '../utils/date-utils';
import { constructErrorMessage } from '../utils/api-utils';
import axios from './axios.instance';

export const getAllEvents = async handler => {
  try {
    const eventsResponse = await axios.get('events');
    const { data } = eventsResponse;
    handler(data);
  } catch (error) {
    throw new Error(constructErrorMessage(error));
  }
};

export const getEventsGroupedByDate = async handler => {
  try {
    const sortByStartDateQuery = '_sort=startDate&_order=asc';
    const eventsResponse = await axios.get(`events?${sortByStartDateQuery}`);

    const { data } = eventsResponse;

    const groupedEvents = groupByDateOption(data);
    const eventsPerDay = Object.values(groupedEvents);

    handler(eventsPerDay);
  } catch (error) {
    throw new Error(constructErrorMessage(error));
  }
};
