import React from 'react';
import { mount } from 'enzyme';
import EventsWrapper from '../../src/app/components/presentational/events/EventsWrapper';
import EventSectionContainer from '../../src/app/components/container/AllEventsContainer';

describe('EventSectionContainer', () => {
  it('should call useEffect and match snapshot', () => {
    const event = {
      id: 0,
      isFree: false,
      name: 'testEvent',
      city: 1,
      startDate: new Date().toDateString(),
      endDate: new Date(1).toDateString(),
    };
    const wrapper = mount(<EventSectionContainer event={event} />);

    expect(wrapper.contains(EventsWrapper)).toEqual(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
