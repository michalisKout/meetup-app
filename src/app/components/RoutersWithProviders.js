import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './presentational/NotFound';
import {
  SearchContext,
  FreeEventsContext,
  EventRegistrationsContext,
  useEventSubScription,
} from '../utils/customHooks/event-hooks';
import EventSectionContainer from './container/AllEventsContainer';
import MyEventsContainer from './container/MyEventsContainer';

const RoutersWithProviders = () => {
  const [eventIdRegistrations, setEventIdRegistrations] = useEventSubScription();
  const [searchValue, setSearchValue] = useState('');
  const [freeEvents, setFreeEvents] = useState([]);
  return (
    <Switch>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <FreeEventsContext.Provider value={{ freeEvents, setFreeEvents }}>
          <EventRegistrationsContext.Provider
            value={[eventIdRegistrations, setEventIdRegistrations]}
          >
            <Route path={['/', '/events']} exact component={EventSectionContainer} />
            <Route path="/myevents" component={MyEventsContainer} />
          </EventRegistrationsContext.Provider>
        </FreeEventsContext.Provider>
      </SearchContext.Provider>
      <Route component={NotFound} />
    </Switch>
  );
};

export default RoutersWithProviders;
