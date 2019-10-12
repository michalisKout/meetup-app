import React from 'react';
import { render } from '@testing-library/react';
import { SearchContext, FreeEventsContext } from '../src/app/utils/customHooks/event-hooks';
import AllEventsContainer from '../src/app/components/container/AllEventsContainer';
import '@testing-library/jest-dom/extend-expect';

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
  const freeEvents = [[firstMondayJuneEvent, secondMondayJuneEvent]];
  return render(
    <FreeEventsContext.Provider value={{ freeEvents, setFreeEvents: () => true }}>
      <AllEventsContainer />
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
    expect(getByText(/firstTestEvent/i)).toBeInTheDocument();
    expect(getByText(/secondTestEvent/i)).toBeInTheDocument();
  });
});
