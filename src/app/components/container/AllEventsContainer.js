import React from 'react';
import PropTypes from 'prop-types';
import EventsWrapper from '../presentational/events/EventsWrapper';
import { useEventsListData } from '../../utils/customHooks/event-hooks';
import EventFilters from '../presentational/events/EventFilters';

export default function EventSectionContainer() {
  const [eventsListData] = useEventsListData();

  return (
    <>
      <EventFilters />
      <EventsWrapper eventsListData={eventsListData} />
    </>
  );
}

EventSectionContainer.prototype = {
  eventsListData: PropTypes.array.isRequired,
};
