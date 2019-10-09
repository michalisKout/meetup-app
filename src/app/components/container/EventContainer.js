import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { getEventDuration, getEventStartTimeFromDate, getSignUpDate } from '../../utils/date-utils';
import { getCityById } from '../../api/cities';
import { checkEventSubscriptionIsStored } from '../../utils/storage-utils';
import { useModalDisplay, EventSubscriptionsContext } from '../../utils/hooks-utils';
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

// localStorage.setItem(localStorageKey, value);
// localStorage.getItem(localStorageKey);
const Event = ({ event }) => {
  const { city, startDate, endDate } = event;
  const [cityData, setCityData] = useState(initCityData);
  const [eventIsAlreadySubscribed, setEventIsAlreadySubscribed] = useState(false);
  const useModal = useModalDisplay();
  const { eventSubscriptions, setEventSubscriptions } = useContext(EventSubscriptionsContext);

  useEffect(() => {
    if (city) {
      getCityById(city, setCityData);
    }
  }, [city]);

  useEffect(() => {
    if (eventSubscriptions.length > 0) {
      const eventSubscribed = eventSubscriptions.some(subEvent => _.isEqual(subEvent, event));
      setEventIsAlreadySubscribed(eventSubscribed);
    }
  }, [eventSubscriptions]);

  useEffect(() => {
    setEventIsAlreadySubscribed(checkEventSubscriptionIsStored(event));
  }, []);

  const eventDisplayInfo = collectEventDisplayInfo(startDate, cityData, endDate);

  return (
    <EventUI
      event={event}
      eventIsAlreadySubscribed={eventIsAlreadySubscribed}
      eventSubscriptions={eventSubscriptions}
      setEventSubscriptions={setEventSubscriptions}
      {...useModal}
      {...eventDisplayInfo}
    />
  );
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
