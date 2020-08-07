import useApi from 'lib/use-api';

const root = '/api/questions';

export default {
  getAll: () => useApi(`${root}`),
  get: (id) => useApi(`${root}/${id}`),
  put: (id, data) => useApi(`${root}/${id}`, {
    method: 'PUT',
    body: data,
  }),
};
