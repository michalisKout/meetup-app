import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllEventsContainer from './container/AllEventsContainer';
import NotFound from './presentational/NotFound';
import MyEventsContainer from './container/MyEventsContainer';
import FilterProviders from './providers/FilterProviders';

const Routes = () => {
  return (
    <FilterProviders>
      <Switch>
        <Route path={['/', '/events']} exact component={AllEventsContainer} />
        <Route path="/myevents" component={MyEventsContainer} />
        <Route component={NotFound} />
      </Switch>
    </FilterProviders>
  );
};

export default Routes;
