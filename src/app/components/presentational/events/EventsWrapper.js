import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from '../../../utils/date-utils';
import EventsListPerDay from './EventsListPerDay';

const EventsWrapper = ({ eventsListData }) => {
  const getEventListPerDay = (eventsList, index) => {
    const listHasEvents = eventsList.length !== 0;
    const date = listHasEvents && getDate(eventsList[0].startDate);
    const key = `events-wrapper-${index}`;
    return (
      <div key={key} className="events-wrapper" role="list">
        <header>
          <h2>{date}</h2>
        </header>
        <EventsListPerDay events={eventsList} />
      </div>
    );
  };

  const shouldDisplayEventsPerDay = eventsListData.length !== 0;
  const eventListPerDay = shouldDisplayEventsPerDay ? eventsListData.map(getEventListPerDay) : null;

  return <section className="events">{eventListPerDay}</section>;
};

EventsWrapper.propTypes = {
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

export default EventsWrapper;
