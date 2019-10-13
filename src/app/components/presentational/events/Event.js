import React from 'react';
import PropTypes from 'prop-types';
import Title from '../common/Title';
import Button from '../common/Button';
import Modal from '../common/Modal';

const BUTTON = {
  SIGNUP: 'Sign up',
  YOU_ARE_IN: "You're in",
  CANCEL: 'Cancel',
};
const TITLE_TEXT = 'Join the event';
const Event = ({
  event,
  eventStartTime,
  eventDuration,
  cityName,
  singUpModalText,
  displayModal,
  toggleModalDisplay,
  eventIsAlreadyRegistered,
  signUpHandler,
  cancelHandler,
}) => {
  const { isFree, name } = event;
  const { YOU_ARE_IN, SIGNUP } = BUTTON;
  const cityNameAndDuration = `${cityName} - ${`${eventDuration}h`}`;
  const buttonText = <span>{eventIsAlreadyRegistered ? YOU_ARE_IN : SIGNUP}</span>;
  const buttonClickHandler = eventIsAlreadyRegistered ? cancelHandler : toggleModalDisplay;
  const cancelTextClass = eventIsAlreadyRegistered ? 'cancel' : '';
  return (
    <>
      <div className="event" role="listitem">
        <div className="event__time" role="heading" aria-level="3">
          {eventStartTime}
        </div>
        <div className="event__info">
          <Title text={name} isFree={isFree} />
          <div className="event__info__city-name">{cityNameAndDuration}</div>
        </div>
        <Button cssClass={`event__sign-up ${cancelTextClass}`} clickHandler={buttonClickHandler}>
          {buttonText}
        </Button>
        {!eventIsAlreadyRegistered ? (
          <Modal
            titleText={TITLE_TEXT}
            text={singUpModalText}
            display={displayModal}
            closeHandler={toggleModalDisplay}
            submitHandler={signUpHandler}
          />
        ) : null}
      </div>
    </>
  );
};

Event.propTypes = {
  cancelHandler: PropTypes.func.isRequired,
  signUpHandler: PropTypes.func.isRequired,
  eventIsAlreadyRegistered: PropTypes.bool.isRequired,
  displayModal: PropTypes.bool.isRequired,
  toggleModalDisplay: PropTypes.func.isRequired,
  singUpModalText: PropTypes.string.isRequired,
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
};

export default Event;
