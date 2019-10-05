import React from 'react';
import TestComponent from './components/presentational/TestComponent';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>
    </>
  );
};
export default App;
