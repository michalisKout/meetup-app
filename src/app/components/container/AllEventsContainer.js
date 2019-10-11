import React from 'react';
import PropTypes from 'prop-types';
import EventSections from '../presentational/events/EventSections';
import { useEventsListData } from '../../utils/customHooks/event-hooks';
import EventFilter from '../presentational/events/EventFilter';

export default function EventSectionContainer() {
  const [eventsListData] = useEventsListData();

  return (
    <>
      <EventFilter />
      <EventSections eventsListData={eventsListData} />
    </>
  );
}

EventSectionContainer.prototype = {
  eventsListData: PropTypes.array.isRequired,
};
