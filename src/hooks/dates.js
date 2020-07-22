import moment from 'moment';

export const formatDate = (date) => moment(date).format('M/D/YYYY');

export const formatDateTimestamp = (date) => moment.unix(date).utc().format('M/D/YYYY');
