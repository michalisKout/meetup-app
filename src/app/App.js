import React from 'react';
import EventSectionContainer from './components/container/EventSectionContainer';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <ErrorBoundary>
        <EventSectionContainer />
      </ErrorBoundary>
    </>
  );
};
export default App;
