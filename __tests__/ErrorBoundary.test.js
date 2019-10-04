import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/app/App';
import withErrorBoundary from '../src/app/hoc/ErrorBoundary';

describe('ErrorBoundary', () => {
  it('should catch the error', () => {
    const Component = withErrorBoundary(App);

    const test = shallow(<Component />);

    test.hasClass('error');
  });
});
