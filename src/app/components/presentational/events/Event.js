import React from 'react';
import PropTypes from 'prop-types';
import Title from '../common/Title';
import Button from '../common/Button';
import Modal from '../common/Modal';

const BUTTON_TEXT = 'Sign up';
const TITLE_TEXT = 'Join the event';
const Event = ({
  event,
  eventStartTime,
  eventDuration,
  cityName,
  singUpModanText,
  display,
  toggleModalDisplay,
  setEventSubscriptions,
  eventSubscriptions,
  eventIsAlreadySubscribed,
}) => {
  const { isFree, name } = event;
  const cityNameAndDuration = `${cityName} - ${`${eventDuration}h`}`;
  const buttonDisabled = eventIsAlreadySubscribed;
  return (
    <>
      <div className="event" role="listitem">
        <div className="event__time">{eventStartTime}</div>
        <div className="event__info">
          <Title text={name} isFree={isFree} />
          <div className="event__info__city-name">{cityNameAndDuration}</div>
        </div>
        <Button
          cssClass="event__sign-up"
          buttonDisabled={buttonDisabled}
          text={BUTTON_TEXT}
          clickHandler={toggleModalDisplay}
        />
        <Modal
          titleText={TITLE_TEXT}
          text={singUpModanText}
          display={display}
          closeHandler={toggleModalDisplay}
          submitHandler={() => {
            if (!eventIsAlreadySubscribed) {
              setEventSubscriptions([...eventSubscriptions, event]);
              toggleModalDisplay();
            }
          }}
        />
      </div>
    </>
  );
};

Event.propTypes = {
  eventIsAlreadySubscribed: PropTypes.bool.isRequired,
  display: PropTypes.bool.isRequired,
  toggleModalDisplay: PropTypes.func.isRequired,
  singUpModanText: PropTypes.string.isRequired,
  eventStartTime: PropTypes.string.isRequired,
  eventDuration: PropTypes.number.isRequired,
  cityName: PropTypes.string.isRequired,
  event: PropTypes.shape({
    id: PropTypes.number,
    isFree: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.number,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }).isRequired,
  setEventSubscriptions: PropTypes.func.isRequired,
  eventSubscriptions: PropTypes.array.isRequired,
};

export default Event;
