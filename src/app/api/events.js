import axios from './axios.instance';

export const getAllEvents = async handler => {
  const eventsResponse = await axios.get('events');
  const { data } = eventsResponse;
  handler(data);
};

export const getEventsByDate = async () => {
  const eventsResponse = await axios.get('events');
  console.log(eventsResponse);
  const { data } = eventsResponse;
  //   setEvents(data);
  return data;
};
