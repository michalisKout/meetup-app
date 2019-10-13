import React, { useContext } from 'react';
import Button from '../common/Button';
import { updateFreeEvents } from '../../../api/eventsAPI';
import { SearchContext, FreeEventsContext } from '../../../hooks/event-hooks';

const EventFilters = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const { setFreeEvents } = useContext(FreeEventsContext);
  const inputHandler = event => setSearchValue(event.target.value);
  const clickHandler = () => updateFreeEvents(setFreeEvents);

  return (
    <section className="filters">
      <input
        aria-label="Close"
        id="searchinput"
        type="text"
        className="filters__event-search"
        value={searchValue}
        onChange={inputHandler}
        placeholder="Search an event..."
      />
      <Button
        buttonDisabled={false}
        cssClass="filters__free-events btn"
        clickHandler={clickHandler}
      >
        Discover Free Events
      </Button>
    </section>
  );
};

export default EventFilters;
