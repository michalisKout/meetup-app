import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from '../../../utils/date-utils';
import EventsListPerDay from './EventsListPerDay';

const EventSections = ({ eventsListData }) => {
  const getSectionsPerDay = (eventsList, index) => {
    const listHasEvents = eventsList.length !== 0;
    const date = listHasEvents && getDate(eventsList[0].startDate);
    const key = `event-section-${index}`;
    return (
      <div key={key} className="event-section" role="list">
        <header>
          <h2>{date}</h2>
        </header>
        <EventsListPerDay events={eventsList} />
      </div>
    );
  };

  const shouldDisplayEventsPerDay = eventsListData.length !== 0;
  const sectionsPerDay = shouldDisplayEventsPerDay ? eventsListData.map(getSectionsPerDay) : null;

  return <>{sectionsPerDay}</>;
};

EventSections.propTypes = {
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

export default EventSections;
