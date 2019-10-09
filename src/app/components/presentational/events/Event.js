import React from 'react';
import PropTypes from 'prop-types';
import Title from '../common/Title';
import Button from '../common/Button';
import Modal from '../common/Modal';
import { useModalDisplay } from '../../../utils/hooks-utils';

const BUTTON_TEXT = 'Sign up';

const Event = ({ event, eventStartTime, eventDuration, cityName, singUpModanText }) => {
  const { isFree, name } = event;
  const cityNameAndDuration = `${cityName} - ${`${eventDuration}h`}`;
  const { display, toggleModalDisplay } = useModalDisplay();
  return (
    <>
      <div className="event" role="listitem">
        <div className="event__time">{eventStartTime}</div>
        <div className="event__info">
          <Title text={name} isFree={isFree} />
          <div className="event__info__city-name">{cityNameAndDuration}</div>
        </div>
        <Button cssClass="event__sign-up" text={BUTTON_TEXT} clickHandler={toggleModalDisplay} />
        <Modal text={singUpModanText} display={display} closeHandler={toggleModalDisplay} />
      </div>
    </>
  );
};

Event.propTypes = {
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
};

export default Event;
