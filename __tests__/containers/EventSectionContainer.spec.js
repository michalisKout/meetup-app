import React from 'react';
import { mount } from 'enzyme';
import Events from '../../src/app/components/presentational/events/Events';
import AllEventsContainer from '../../src/app/components/container/AllEventsContainer';

beforeEach(() => {
  jest.resetModules();
});

describe('AllEventsContainer', () => {
  it('should render container without events included', () => {
    const wrapper = mount(<AllEventsContainer />);
    expect(wrapper.contains(Events)).toEqual(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
