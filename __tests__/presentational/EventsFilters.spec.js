import React from 'react';
import renderer from 'react-test-renderer';
import EventsFilters from '../../src/app/components/presentational/events/EventFilters';

beforeEach(() => {
  jest.resetModules();
});

describe('EventsFilters Component', () => {
  it('should match snapshot including default props', () => {
    const component = renderer.create(<EventsFilters />);

    const componentTree = component.toJSON();

    expect(componentTree).toMatchSnapshot();
  });
});
