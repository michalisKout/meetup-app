import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from '../../../utils/date-utils';
import EventsPerDay from './EventsPerDay';

const Events = ({ eventsListData, cssClass }) => {
  const getEventListPerDay = (eventsList, index) => {
    const listHasEvents = eventsList.length !== 0;
    const date = listHasEvents && getDate(eventsList[0].startDate);
    const key = `events-wrapper-${index}`;
    return (
      <div key={key} className="events-wrapper" role="list">
        <EventsPerDay date={date} events={eventsList} />
      </div>
    );
  };

  const shouldDisplayEventsPerDay = eventsListData.length !== 0;
  const eventListPerDay = shouldDisplayEventsPerDay ? (
    eventsListData.map(getEventListPerDay)
  ) : (
    <div className="events--fallback-text">There are no avaliable events... :(</div>
  );

  return (
    <>
      <section className={`events ${cssClass}`}>{eventListPerDay}</section>
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
