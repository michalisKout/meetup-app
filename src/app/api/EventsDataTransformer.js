import _ from 'lodash';

class EventsDataTransformer {
  constructor(eventsResponse = { data: {} }) {
    this.eventsListGroupedByDay = this.transformEventsDataToGroupedList(eventsResponse);
  }

  groupByDateOption(events) {
    const eventsReadyToSort = this.addSortByDatePropertyToEvent(events);
    const groupedResults = _.groupBy(eventsReadyToSort, 'sortByDateOption');
    return groupedResults;
  }

  addSortByDatePropertyToEvent(apiResponse) {
    const { data } = apiResponse;
    const updatedEventData = data.map(event => {
      const sortByDateOption = event.startDate.split('T')[0];
      return { ...event, sortByDateOption };
    });

    return updatedEventData;
  }

  transformEventsDataToGroupedList(events) {
    const groupedEvents = this.groupByDateOption(events);
    const groupedEventsListed = Object.values(groupedEvents);

    return groupedEventsListed;
  }
}

export default EventsDataTransformer;
