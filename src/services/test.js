import useApi from 'lib/use-api';
import { PUT } from './index';

const root = '/api/questions';

export default {
  getAll: () => useApi(`${root}`),
  get: (id) => useApi(`${root}/${id}`),
  put: (id, data) => useApi(`${root}/${id}`, PUT(data)),
};
