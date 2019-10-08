import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from '../../src/app/ErrorBoundary/ErrorBoundary';

const DummyComponentWithError = () => {
  return <div>test Component</div>;
};

describe('ErrorBoundary', () => {
  it('should catch the error', () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <DummyComponentWithError />
      </ErrorBoundary>,
    );
    const error = new Error('error');
    wrapper.find(DummyComponentWithError).simulateError(error);

    expect(wrapper.state().compomentHasError).toEqual(true);
  });
});
