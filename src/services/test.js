import useApi from '../lib/use-api';

const root = 'questions';

export default {
  getAll: () => useApi(`${process.env.apiRoot}/${root}`),
  get: (id) => useApi(`${process.env.apiRoot}/${root}/${id}`),
  post: (id, data) => useApi(`${process.env.apiRoot}/${root}/${id}`, {
    method: 'POST',
    body: data,
  }),
};
