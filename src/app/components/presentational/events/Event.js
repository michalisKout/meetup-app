import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Title from '../common/Title';
import { getTimeFromDate, getDatesDiff } from '../../../utils/date-utils';
import { getCityById } from '../../../api/cities';

const BUTTON_TEXT = 'Sign up';
const initCityData = {
  id: 0,
  name: '',
};
const Event = ({ event }) => {
  const { isFree, name, city, startDate, endDate } = event;
  const [cityData, setCityData] = useState(initCityData);
  useEffect(() => {
    async function updateCityData() {
      getCityById(city, setCityData);
    }
    updateCityData();
  }, cityData);

  const eventStartTime = getTimeFromDate(startDate);
  const cityName = cityData && cityData.name;
  const eventDuration = getDatesDiff(startDate, endDate);

  return (
    <>
      <div className="event" role="listitem">
        <div className="event__time">{eventStartTime}</div>
        <div className="event__info">
          <Title text={name} isFree={isFree} />
          <div className="event__info__city-name">{`${cityName} - ${`${eventDuration}h`}`}</div>
        </div>
        <div className="event__sign-up">
          <button type="button" className="btn btn-blue">
            {BUTTON_TEXT}
          </button>
        </div>
      </div>
    </>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isFree: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default Event;
