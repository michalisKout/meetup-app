import React from 'react';
import { mount } from 'enzyme';
import axios from '../../src/app/api/axios.instance';
import AllEventsContainer from '../../src/app/components/container/AllEventsContainer';

describe('AllEventsContainer', () => {
  it('should render container without events included', done => {
    const mockSuccessResponse = {
      events: [
        {
          id: 0,
          isFree: true,
          name: 'CSS Grids: fact or fiction',
          city: 9,
          startDate: '2019-07-14T02:00:00+00:00',
          endDate: '2019-07-14T03:00:00+00:00',
        },
      ],
    };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(axios, 'get').mockImplementation(() => mockFetchPromise);
    const wrapper = mount(<AllEventsContainer />);

    expect(axios.get).toHaveBeenCalledTimes(0);

    expect(wrapper.find('.events-wrapper')).toEqual({});
    done();
  });
});
