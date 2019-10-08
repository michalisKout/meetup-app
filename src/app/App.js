import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import EventSectionContainer from './components/container/EventSectionContainer';
import MyEvents from './components/presentational/events/MyEvents';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Header from './components/presentational/header/Header';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Header />
        <main>
          <Switch>
            <Route path={['/', '/events']} exact component={EventSectionContainer} />
            <Route path="/myevents" component={MyEvents} />
          </Switch>
        </main>
      </ErrorBoundary>
    </Router>
  );
};
export default App;
