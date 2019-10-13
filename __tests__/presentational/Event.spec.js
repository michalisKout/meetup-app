import React from 'react';
import renderer from 'react-test-renderer';
import Event from '../../src/app/components/presentational/events/Event';

beforeEach(() => {
  jest.resetModules();
});

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

    const props = {
      event,
      eventStartTime: '19:00',
      eventDuration: 1,
      cityName: 'Mallorca',
      singUpModalText: 'This is a test modal',
      displayModal: true,
      toggleModalDisplay: () => true,
      eventIsAlreadyRegistered: true,
      signUpHandler: () => true,
      cancelHandler: () => true,
    };

    const component = renderer.create(<Event {...props} />);

    const componentTree = component.toJSON();

    expect(componentTree).toMatchSnapshot();
  });
});
