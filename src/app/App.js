import React, { useState } from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import EventSectionContainer from './components/container/EventSectionContainer';
import MyEvents from './components/presentational/events/MyEvents';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Header from './components/presentational/header/Header';
import NotFound from './components/presentational/NotFound';
import { SearchContext, FreeEventsContext } from './utils/hooks-utils';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [freeEvents, setFreeEvents] = useState([]);
  return (
    <Router>
      <ErrorBoundary>
        <FreeEventsContext.Provider value={{ freeEvents, setFreeEvents }}>
          <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <Header />
            <main>
              <Switch>
                <Route path={['/', '/events']} exact component={EventSectionContainer} />
                <Route path="/myevents" component={MyEvents} />

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
