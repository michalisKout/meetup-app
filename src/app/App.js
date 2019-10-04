import React from 'react';
import withErrorBoundary from './hoc/ErrorBoundary';

const App = () => <h1>Hello World</h1>;
export default withErrorBoundary(App);
