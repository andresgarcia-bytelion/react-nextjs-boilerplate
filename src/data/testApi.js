import useSWR from 'swr';

const useApi = () => {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts/1');

  return {
    response: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useApi;
