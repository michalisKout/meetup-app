import React from 'react';
import { cleanup } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import EventsPerDay from '../../src/app/components/presentational/events/EventsPerDay';
import { EventRegistrationsContext } from '../../src/app/hooks/event-hooks';
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
  jest.resetModules();
});
afterEach(cleanup);
describe('EventsPerDay Component', () => {
  it('should match snapshot including default props', () => {
    const firstMondayJuneEvent = {
      id: 0,
      isFree: false,
      name: 'firstTestEvent',
      city: 1,
      startDate: '2019-07-14T15:00:00+00:00',
      endDate: 'Thu Jan 01 1970',
    };
    const secondMondayJuneEvent = {
      id: 1,
      isFree: false,
      name: 'secondTestEvent',
      city: 1,
      startDate: '2019-07-14T17:00:00+00:00',
      endDate: 'Thu Jan 01 1970',
    };
    const dayEvents = [firstMondayJuneEvent, secondMondayJuneEvent];
    const props = {
      date: 'Monday 29th June',
      events: dayEvents,
      cityDataList: [],
    };
    const component = TestRenderer.create(
      <EventRegistrationsContext.Provider value={[[0], () => true]}>
        <EventsPerDay {...props} />
      </EventRegistrationsContext.Provider>,
    );

    const componentTree = component.toJSON();

    expect(componentTree).toMatchSnapshot();
  });
});
