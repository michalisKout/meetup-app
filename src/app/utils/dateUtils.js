import moment from 'moment';

export const getEventDuration = (dateStart, dateEnd) => {
  const convertedStartDate = moment(dateStart);
  const convertedEndDate = moment(dateEnd);
  const durationInHours = moment.duration(convertedEndDate.diff(convertedStartDate)).asHours();
  return Math.round(durationInHours);
};

export const getEventStartTimeFromDate = date => moment(date).format('HH.mm');
export const getSignUpDate = date => moment(date).format('Do MMMM');

export const getDate = date => moment(date).format('dddd Do MMMM');
