import React, { useContext } from 'react';
import Button from '../common/Button';
import { getFreeEvents } from '../../../api/eventsAPI';
import { SearchContext, FreeEventsContext } from '../../../utils/customHooks/event-hooks';

const EventFilters = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const { setFreeEvents } = useContext(FreeEventsContext);
  const inputHandler = event => setSearchValue(event.target.value);
  const clickHandler = () => getFreeEvents(setFreeEvents);

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
        text="Discover Free Events"
        cssClass="filters__free-events btn"
        clickHandler={clickHandler}
      />
    </section>
  );
};

export default EventFilters;
