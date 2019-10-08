import _ from 'lodash';
import moment from 'moment';

export const mutateIncomingDataWithGroupProperty = data => {
  data.forEach(event => {
    const sortByDateOption = event.startDate.split('T')[0];
    // eslint-disable-next-line no-param-reassign
    event.sortByDateOption = sortByDateOption;
  });
};

export const groupByDateOption = data => {
  mutateIncomingDataWithGroupProperty(data);
  const groupedResults = _.groupBy(data, 'sortByDateOption');
  return groupedResults;
};

export const getEventDuration = (dateStart, dateEnd) => {
  const convertedStartDate = moment(dateStart);
  const convertedEndDate = moment(dateEnd);
  const durationInHours = moment.duration(convertedEndDate.diff(convertedStartDate)).asHours();
  return Math.round(durationInHours);
};

export const getEventStartTimeFromDate = date => moment(date).format('HH.mm');

export const getDate = date => moment(date).format('dddd Do MMMM');
