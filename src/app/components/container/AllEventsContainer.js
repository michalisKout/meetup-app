import React from 'react';
import PropTypes from 'prop-types';
import EventSections from '../presentational/events/EventSections';
import { useEventsListData } from '../../utils/customHooks/event-hooks';
import EventFilters from '../presentational/events/EventFilters';

export default function EventSectionContainer() {
  const [eventsListData] = useEventsListData();

  return (
    <>
      <EventFilters />
      <EventSections eventsListData={eventsListData} />
    </>
  );
}

EventSectionContainer.prototype = {
  eventsListData: PropTypes.array.isRequired,
};
