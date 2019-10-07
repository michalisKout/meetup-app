import React from 'react';
import EventSectionContainer from './components/container/EventSectionContainer';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Header from './components/presentational/header/Header';

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <main>
          <EventSectionContainer />
        </main>
      </ErrorBoundary>
    </>
  );
};
export default App;
