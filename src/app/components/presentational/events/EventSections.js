import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from '../../../utils/date-utils';
import EventList from './EventList';

const getSectionsPerDay = (eventList, index) => {
  const listHasEvents = eventList.length !== 0;
  const date = listHasEvents && getDate(eventList[0].startDate);
  const key = `event-section-${index}`;
  return (
    <section key={key} className="event-section" role="list">
      <h2>{date}</h2>
      <EventList events={eventList} />
    </section>
  );
};

const EventSections = ({ eventsPerDay }) => {
  const shouldDisplayEventsPerDay = eventsPerDay.length !== 0;
  const sectionsPerDay = shouldDisplayEventsPerDay ? eventsPerDay.map(getSectionsPerDay) : null;

  return <>{sectionsPerDay}</>;
};

EventSections.propTypes = {
  eventsPerDay: PropTypes.arrayOf(
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
