import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './presentational/NotFound';
import EventSectionContainer from './container/AllEventsContainer';
import MyEventsContainer from './container/MyEventsContainer';
import Providers from './Providers';

const Routes = () => {
  return (
    <Providers>
      <Switch>
        <Route path={['/', '/events']} exact component={EventSectionContainer} />
        <Route path="/myevents" component={MyEventsContainer} />
        <Route component={NotFound} />
      </Switch>
    </Providers>
  );
};

export default Routes;
