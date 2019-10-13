import React from 'react';
import PropTypes from 'prop-types';
import Events from '../presentational/events/Events';
import { useEventsListData, useEventsCities } from '../../hooks/event-hooks';
import EventFilters from '../presentational/events/EventFilters';

export default function AllEventsContainer() {
  const [eventsListData] = useEventsListData();
  const [cityDataList] = useEventsCities();
  return (
    <>
      <EventFilters />
      <Events cssClass="" cityDataList={cityDataList || []} eventsListData={eventsListData || []} />
    </>
  );
}

AllEventsContainer.prototype = {
  eventsListData: PropTypes.array.isRequired,
};
