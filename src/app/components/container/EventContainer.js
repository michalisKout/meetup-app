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

const Event = ({ event }) => {
  const { id, city, startDate, endDate, name } = event;

  const [cityData, setCityData] = useState(initCityData);
  const [eventIsAlreadySubscribed, setEventIsAlreadySubscribed] = useState(false);
  const useModal = useModalDisplay();
  const { eventIdSubscriptions, setEventIdSubscriptions } = useContext(EventSubscriptionsContext);

  useEffect(() => {
    if (city) {
      getCityById(city, setCityData);
    }
  }, [city]);

  useEffect(() => {
    const hasSubscriptionIds = eventIdSubscriptions.length > 0;

    if (hasSubscriptionIds) {
      const eventIdSubscribed = eventIdSubscriptions.some(subEventId => _.isEqual(subEventId, id));
      setEventIsAlreadySubscribed(eventIdSubscribed);
    }
  }, [eventIdSubscriptions]);

  useEffect(() => {
    setEventIsAlreadySubscribed(checkEventSubscriptionIsStored(id));
  }, []);

  const getSingUpModalText = (eventName, date, cityName) => {
    return `You are about to sign up for ${eventName}. 
                This event takes place the ${date} in ${cityName}`;
  };

  const collectEventDisplayInfo = () => {
    const eventStartTime = getEventStartTimeFromDate(startDate);
    const singUpDate = getSignUpDate(startDate);
    const cityName = cityData && cityData.name;
    const eventDuration = getEventDuration(startDate, endDate);
    const singUpModalText = getSingUpModalText(name, singUpDate, cityName);

    const eventDisplayInfo = {
      singUpModalText,
      eventStartTime,
      cityName,
      eventDuration,
    };
    return eventDisplayInfo;
  };

  const signUpHandler = () => {
    if (!eventIsAlreadySubscribed) {
      setEventIdSubscriptions([...eventIdSubscriptions, id]);
      useModal.toggleModalDisplay();
    }
  };

  const eventDisplayInfo = collectEventDisplayInfo(startDate, cityData, endDate);

  return (
    <EventUI
      event={event}
      eventIsAlreadySubscribed={eventIsAlreadySubscribed}
      eventIdSubscriptions={eventIdSubscriptions}
      setEventIdSubscriptions={setEventIdSubscriptions}
      signUpHandler={signUpHandler}
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
