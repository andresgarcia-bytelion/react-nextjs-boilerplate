import { formatDate } from 'hooks/dates';

const Base = (hit) => [
  {
    label: 'Date Created',
    value: hit.datepublished
      ? formatDate(hit.datepublished)
      : '',
  },
  {
    label: 'Name',
    value: hit.title,
  },
];

export default Base;
