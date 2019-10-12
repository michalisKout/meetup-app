import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { getEventDuration, getEventStartTimeFromDate, getSignUpDate } from '../../utils/date-utils';

import {
  useEventCity,
  useEventRegistrationCheck,
  EventRegistrationsContext,
} from '../../utils/customHooks/event-hooks';
import { useModalDisplay } from '../../utils/customHooks/toolkit-hooks';
import EventUI from '../presentational/events/Event';

const Event = ({ event }) => {
  const { id, city, startDate, endDate, name } = event;
  const [displayModal, toggleModalDisplay] = useModalDisplay();
  const [eventIdRegistrations, setEventIdRegistrations] = useContext(EventRegistrationsContext);
  const [eventIsAlreadyRegistered] = useEventRegistrationCheck(id);
  const [cityData] = useEventCity(city);

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
    if (!eventIsAlreadyRegistered) {
      setEventIdRegistrations([...eventIdRegistrations, id]);
      toggleModalDisplay();
    }
  };

  const eventDisplayInfo = collectEventDisplayInfo(startDate, cityData, endDate);

  return (
    <EventUI
      event={event}
      eventIsAlreadyRegistered={eventIsAlreadyRegistered}
      eventIdRegistrations={eventIdRegistrations}
      setEventIdRegistrations={setEventIdRegistrations}
      signUpHandler={signUpHandler}
      displayModal={displayModal}
      toggleModalDisplay={toggleModalDisplay}
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
