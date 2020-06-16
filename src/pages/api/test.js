import response from './mock-data/test.json';

export default (req, res) => {
  res.status(200).json(response);
};
