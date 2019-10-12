import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchContext,
  FreeEventsContext,
  EventRegistrationsContext,
  useEventSubScription,
} from '../../utils/customHooks/event-hooks';

const FilterProviders = ({ children }) => {
  const [eventIdRegistrations, setEventIdRegistrations] = useEventSubScription();
  const [searchValue, setSearchValue] = useState('');
  const [freeEvents, setFreeEvents] = useState([]);
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <FreeEventsContext.Provider value={{ freeEvents, setFreeEvents }}>
        <EventRegistrationsContext.Provider value={[eventIdRegistrations, setEventIdRegistrations]}>
          {children}
        </EventRegistrationsContext.Provider>
      </FreeEventsContext.Provider>
    </SearchContext.Provider>
  );
};

FilterProviders.propTypes = {
  children: PropTypes.object.isRequired,
};
export default FilterProviders;
