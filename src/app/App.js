import React from 'react';
import EventSectionContainer from './components/container/EventSectionContainer';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <EventSectionContainer />
      </ErrorBoundary>
    </>
  );
};
export default App;
