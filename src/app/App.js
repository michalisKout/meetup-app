import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Header from './components/presentational/header/Header';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Header />
        <main>
          <Routes />
        </main>
      </ErrorBoundary>
    </Router>
  );
};
export default App;
