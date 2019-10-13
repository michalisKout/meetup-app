import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from '../../../helpers/date-helper';
import EventsPerDay from './EventsPerDay';

const Events = ({ eventsListData, cssClass }) => {
  const getEventPerDay = (eventsList, index) => {
    const dayHasEvents = eventsList.length !== 0;
    const date = dayHasEvents && getDate(eventsList[0].startDate);
    const key = `events-wrapper-${index}`;
    return (
      <div key={key} className="events-wrapper" role="list">
        <EventsPerDay date={date} events={eventsList} />
      </div>
    );
  };

  const shouldDisplayEventsPerDay = eventsListData.length !== 0;
  const eventsPerDay = shouldDisplayEventsPerDay ? eventsListData.map(getEventPerDay) : null;

  return (
    <>
      <section className={`events ${cssClass}`}>{eventsPerDay}</section>
    </>
  );
};

Events.propTypes = {
  cssClass: PropTypes.string.isRequired,
  eventsListData: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isFree: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        city: PropTypes.number.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
      }).isRequired,
    ),
  ).isRequired,
};

export default Events;
