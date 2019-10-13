import React from 'react';
import TestRenderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import axios from 'axios';
import AllEventsContainer from '../../src/app/components/container/AllEventsContainer';

beforeEach(() => {
  jest.resetModules();
});

afterEach(cleanup);
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

    const container = TestRenderer.create(<AllEventsContainer />);

    expect(axios.get).toHaveBeenCalledTimes(0);

    const containerTree = container.toJSON();

    expect(containerTree).toMatchSnapshot();
    done();
  });
});
