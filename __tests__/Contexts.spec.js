import React from 'react';
import { render } from '@testing-library/react';
import { SearchContext, FreeEventsContext } from '../src/app/hooks/event-hooks';
import AllEventsContainer from '../src/app/components/container/AllEventsContainer';
import '@testing-library/jest-dom/extend-expect';
import Event from '../src/app/components/presentational/events/Event';

function renderAllEventsContainerWithSearchContext() {
  return render(
    <SearchContext.Provider value={{ searchValue: 'search', setSearchValue: () => true }}>
      <AllEventsContainer />
    </SearchContext.Provider>,
  );
}

function renderAllEventsContainerWithFreeContext() {
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
  const freeEvents = [firstMondayJuneEvent, secondMondayJuneEvent];
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
  return render(
    <FreeEventsContext.Provider value={{ freeEvents, setFreeEvents: () => true }}>
      <Event {...props} />
    </FreeEventsContext.Provider>,
  );
}

beforeEach(() => {
  jest.resetModules();
});

describe('SearchContext', () => {
  it('should have search value', () => {
    const { getByDisplayValue } = renderAllEventsContainerWithSearchContext();
    expect(getByDisplayValue(/search/i)).toBeInTheDocument();
  });
});

describe('FreeContext', () => {
  it('should have freeEvents value', () => {
    const { getByText } = renderAllEventsContainerWithFreeContext();
    expect(getByText(/19.00/i)).toBeInTheDocument();
  });
});
