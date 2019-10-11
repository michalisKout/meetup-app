import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import RoutersWithProviders from './components/RoutersWithProviders';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Header from './components/presentational/header/Header';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Header />
        <main>
          <RoutersWithProviders />
        </main>
      </ErrorBoundary>
    </Router>
  );
};
export default App;
