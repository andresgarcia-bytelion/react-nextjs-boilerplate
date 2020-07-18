import moment from 'moment';

export const formatDate = (date) => {
  return moment(date).format('M/D/YYYY');
};

export const formatDateTimestamp = (date) => {
  return moment.unix(date).utc().format('M/D/YYYY');
};
