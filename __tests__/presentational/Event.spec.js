import React from 'react';
import renderer from 'react-test-renderer';
import Event from '../../src/app/components/presentational/events/Event';

describe('Event Component', () => {
  it('should match snapshot', () => {
    const event = {
      id: 0,
      isFree: false,
      name: 'testEvent',
      city: 1,
      startDate: new Date().toDateString(),
      endDate: new Date(1).toDateString(),
    };

    const component = renderer.create(
      <Event event={event} eventStartTime="" eventDuration={0} cityName="" />,
    );

    const componentTree = component.toJSON();

    expect(componentTree).toMatchSnapshot();
  });
});
