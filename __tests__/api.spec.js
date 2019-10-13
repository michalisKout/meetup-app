import { cleanup } from '@testing-library/react';
import axios from '../src/app/api/axios.instance';
import * as EventAPI from '../src/app/api/eventsAPI';

beforeEach(() => {
  jest.resetModules();
});

afterEach(cleanup);

describe('EventAPI', () => {
  it('should send request to get events as response', done => {
    const mockSuccessResponse = [
      {
        id: 0,
        isFree: true,
        name: 'CSS Grids: fact or fiction',
        city: 9,
        startDate: '2019-07-14T02:00:00+00:00',
        endDate: '2019-07-14T03:00:00+00:00',
      },
    ];

    const mockServerResponse = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockServerResponse,
    });
    jest.spyOn(axios, 'get').mockImplementation(() => mockFetchPromise);
    EventAPI.updateAllEvents(() => true);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('events');

    done();
  });

  it('should send request to get city as second response', done => {
    const mockSuccessResponse = {
      cities: [
        {
          id: 1,
          name: 'Barcelona',
        },
      ],
    };
    const mockServerResponse = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockServerResponse,
    });
    jest.spyOn(axios, 'get').mockImplementation(() => mockFetchPromise);
    EventAPI.updateCitiesEventById(() => true);

    expect(axios.get).toHaveBeenCalledTimes(2);

    done();
  });

  it('should send request to get events grouped by day as third response', done => {
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
        {
          id: 1,
          isFree: true,
          name: 'CSS Grids: fact or fiction',
          city: 8,
          startDate: '2019-07-14T02:00:00+00:00',
          endDate: '2019-07-14T03:00:00+00:00',
        },
      ],
    };
    const mockServerResponse = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockServerResponse,
    });
    jest.spyOn(axios, 'get').mockImplementation(() => mockFetchPromise);
    EventAPI.updateEventsByDate(() => true);

    expect(axios.get).toHaveBeenCalledTimes(3);

    done();
  });
});
