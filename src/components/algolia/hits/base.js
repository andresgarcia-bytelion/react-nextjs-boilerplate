import moment from 'moment';

const Base = (hit) => {
  return [
    {
      label: 'Date Created',
      value: hit.datepublished
        ? moment(hit.datepublished).format('M/D/YYYY')
        : '',
    },
    {
      label: 'Date Used',
      value: hit.datelastupdated
        ? moment(hit.datelastupdated).format('M/D/YYYY')
        : '',
    },
    {
      label: 'Name',
      value: hit.title,
    }
  ];
};

export default Base;
