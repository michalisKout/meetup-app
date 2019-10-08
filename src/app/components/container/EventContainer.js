import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getEventDuration, getEventStartTimeFromDate } from '../../utils/date-utils';
import { getCityById } from '../../api/cities';
import EventUI from '../presentational/events/Event';

const initCityData = {
  id: 0,
  name: '',
};

function getEventDisplayInfo(startDate, cityData, endDate) {
  const eventStartTime = getEventStartTimeFromDate(startDate);
  const cityName = cityData && cityData.name;
  const eventDuration = getEventDuration(startDate, endDate);
  const eventDisplayInfo = {
    eventStartTime,
    cityName,
    eventDuration,
  };
  return eventDisplayInfo;
}

const Event = ({ event }) => {
  const { city, startDate, endDate } = event;
  const [cityData, setCityData] = useState(initCityData);

  useEffect(() => {
    if (city) {
      getCityById(city, setCityData);
    }
  }, []);

  const eventDisplayInfo = getEventDisplayInfo(startDate, cityData, endDate);

  return <EventUI event={event} {...eventDisplayInfo} />;
};

Event.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isFree: PropTypes.bool,
    name: PropTypes.string,
    city: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default Event;
