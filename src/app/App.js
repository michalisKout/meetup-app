import React, { useState } from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import EventSectionContainer from './components/container/AllEventsContainer';
import MyEventsContainer from './components/container/MyEventsContainer';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Header from './components/presentational/header/Header';
import NotFound from './components/presentational/NotFound';
import {
  SearchContext,
  FreeEventsContext,
  useEventSubScription,
  EventSubscriptionsContext,
} from './utils/hooks-utils';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [freeEvents, setFreeEvents] = useState([]);
  const [eventIdSubscriptions, setEventIdSubscriptions] = useEventSubScription();
  return (
    <Router>
      <ErrorBoundary>
        <FreeEventsContext.Provider value={{ freeEvents, setFreeEvents }}>
          <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <Header />
            <main>
              <Switch>
                <EventSubscriptionsContext.Provider
                  value={{ eventIdSubscriptions, setEventIdSubscriptions }}
                >
                  <Route path={['/', '/events']} exact component={EventSectionContainer} />
                  <Route path="/myevents" component={MyEventsContainer} />
                </EventSubscriptionsContext.Provider>
                <Route component={NotFound} />
              </Switch>
            </main>
          </SearchContext.Provider>
        </FreeEventsContext.Provider>
      </ErrorBoundary>
    </Router>
  );
};
export default App;
