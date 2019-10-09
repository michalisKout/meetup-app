import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getEventDuration, getEventStartTimeFromDate, getSignUpDate } from '../../utils/date-utils';
import { getCityById } from '../../api/cities';
import EventUI from '../presentational/events/Event';

const initCityData = {
  id: 0,
  name: '',
};

function getSingUpModanText(eventName, date, cityName) {
  return `You are about to sign up for ${eventName}. 
              This event takes place the ${date} in ${cityName}`;
}

function collectEventDisplayInfo(startDate, cityData, endDate) {
  const eventStartTime = getEventStartTimeFromDate(startDate);
  const singUpDate = getSignUpDate(startDate);
  const cityName = cityData && cityData.name;
  const eventDuration = getEventDuration(startDate, endDate);
  const singUpModanText = getSingUpModanText(eventStartTime, singUpDate, cityName);

  const eventDisplayInfo = {
    singUpModanText,
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

  const eventDisplayInfo = collectEventDisplayInfo(startDate, cityData, endDate);

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
