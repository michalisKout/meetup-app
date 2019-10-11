import React, { useContext } from 'react';
import Button from '../common/Button';
import { getFreeEvents } from '../../../api/eventsAPI';
import { SearchContext, FreeEventsContext } from '../../../utils/customHooks/event-hooks';

const EventFilters = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const { setFreeEvents } = useContext(FreeEventsContext);
  return (
    <section className="filters">
      <input
        type="text"
        className="filters__event-search"
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
        placeholder="Search an event..."
      />
      <Button
        buttonDisabled={false}
        text="Discover Free Events"
        cssClass="filters__free-events btn"
        clickHandler={() => getFreeEvents(setFreeEvents)}
      />
    </section>
  );
};

export default EventFilters;
