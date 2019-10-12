import React from 'react';
import { mount } from 'enzyme';
import { SearchContext, FreeEventsContext } from '../../src/app/utils/customHooks/event-hooks';
import Events from '../../src/app/components/presentational/events/Events';
import AllEventsContainer from '../../src/app/components/container/AllEventsContainer';

describe('AllEventsContainer', () => {
  it('should use searchContext and FreeContext to match snapshot', () => {
    const searchContextValues = { searchValue: 'Git' };
    const freeContextValues = { freeEvents: [] };

    jest.spyOn(SearchContext, 'setSearchValue').mockImplementation(() => searchContextValues);
    jest.spyOn(FreeEventsContext, 'setFreeEvents').mockImplementation(() => freeContextValues);
    const wrapper = mount(<AllEventsContainer />);
    expect(wrapper.contains(Events)).toEqual(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
