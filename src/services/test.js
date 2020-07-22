import useApi from '../lib/use-api';

const root = 'questions';

export default {
  getAll: () => useApi(`${process.env.apiRoot}/${root}`),
  get: (id) => useApi(`${process.env.apiRoot}/${root}/${id}`),
  put: (id, data) => useApi(`${process.env.apiRoot}/${root}/${id}`, {
    method: 'PUT',
    body: data,
  }),
};
