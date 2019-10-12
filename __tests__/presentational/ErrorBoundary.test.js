import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from '../../src/app/ErrorBoundary/ErrorBoundary';

const DummyComponentWithError = () => {
  return <div>test Component</div>;
};

beforeEach(() => {
  jest.resetModules();
});

describe('ErrorBoundary', () => {
  it('should catch the error', () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <DummyComponentWithError />
      </ErrorBoundary>,
    );
    const error = new Error('');
    wrapper.find(DummyComponentWithError).simulateError(error.toString());

    expect(wrapper.state().compomentHasError).toBeTruthy();
    expect(wrapper.state().errorMessage).toEqual('Error');
  });
});
