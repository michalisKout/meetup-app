import React from 'react';
import PropTypes from 'prop-types';
import Events from '../presentational/events/Events';
import { useEventsListData } from '../../hooks/event-hooks';
import EventFilters from '../presentational/events/EventFilters';

export default function AllEventsContainer() {
  const [eventsListData] = useEventsListData();

  return (
    <>
      <EventFilters />
      <Events cssClass="" eventsListData={eventsListData || []} />
    </>
  );
}

AllEventsContainer.prototype = {
  eventsListData: PropTypes.array.isRequired,
};
