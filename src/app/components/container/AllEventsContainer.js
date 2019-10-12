import React from 'react';
import PropTypes from 'prop-types';
import Events from '../presentational/events/Events';
import { useEventsListData } from '../../utils/customHooks/event-hooks';
import EventFilters from '../presentational/events/EventFilters';

export default function EventSectionContainer() {
  const [eventsListData] = useEventsListData();

  return (
    <>
      <EventFilters />
      <Events cssClass="" eventsListData={eventsListData} />
    </>
  );
}

EventSectionContainer.prototype = {
  eventsListData: PropTypes.array.isRequired,
};
