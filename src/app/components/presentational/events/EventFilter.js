import React, { useContext } from 'react';
import { getFreeEvents } from '../../../api/events';
import { SearchContext, FreeEventsContext } from '../../../utils/hooks-utils';

const EventFilter = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const { setFreeEvents } = useContext(FreeEventsContext);
  return (
    <section className="filters-container">
      <input
        type="text"
        className="filters-container__event-search"
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
        placeholder="Search an event..."
      />
      <button
        type="button"
        className="filters-container__free-events btn"
        onClick={() => getFreeEvents(setFreeEvents)}
      >
        Discover
        <span className="free-text"> Free </span>
        Events
      </button>
    </section>
  );
};

export default EventFilter;
