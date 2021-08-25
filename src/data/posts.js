import useSWR from 'swr';

const usePosts = () => {
  const { data, error } = useSWR('https://us-central1-mbtcandidate.cloudfunctions.net/posts/andresgarcia/');

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default usePosts;
