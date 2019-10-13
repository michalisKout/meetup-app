import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  getEventDuration,
  getEventStartTimeFromDate,
  getSignUpDate,
} from '../../helpers/date-helper';
import { useEventCity, EventRegistrationsContext } from '../../hooks/event-hooks';
import { useModalDisplay } from '../../hooks/modal-hooks';
import EventUI from '../presentational/events/Event';

const Event = ({ event, cityDataList }) => {
  const { id, city, startDate, endDate, name } = event;
  const [displayModal, toggleModalDisplay] = useModalDisplay();
  const [eventIdRegistrations, dispatchEventId] = useContext(EventRegistrationsContext);
  const eventIsAlreadyRegistered =
    eventIdRegistrations && eventIdRegistrations.some(subEventId => _.isEqual(subEventId, id));
  const [cityData] = useEventCity(city, cityDataList);

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
      dispatchEventId({ type: 'insert', id });
      toggleModalDisplay();
    }
  };

  const cancelHandler = () => {
    const hasAtLeastAnEventRegistered = eventIdRegistrations && eventIdRegistrations.length > 0;
    if (hasAtLeastAnEventRegistered) {
      dispatchEventId({ type: 'remove', id });
    }
  };

  const eventDisplayInfo = collectEventDisplayInfo(startDate, cityData, endDate);

  return (
    <EventUI
      event={event}
      eventIsAlreadyRegistered={eventIsAlreadyRegistered}
      eventIdRegistrations={eventIdRegistrations}
      signUpHandler={signUpHandler}
      cancelHandler={cancelHandler}
      displayModal={displayModal}
      toggleModalDisplay={toggleModalDisplay}
      {...eventDisplayInfo}
    />
  );
};

Event.propTypes = {
  cityDataList: PropTypes.array.isRequired,
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
