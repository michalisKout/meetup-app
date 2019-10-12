import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from '../../src/app/ErrorBoundary/NotFound';

beforeEach(() => {
  jest.resetModules();
});

describe('NotFound Component', () => {
  it('should match snapshot including default props', () => {
    const component = renderer.create(<NotFound />);

    const componentTree = component.toJSON();

    expect(componentTree).toMatchSnapshot();
  });
});
