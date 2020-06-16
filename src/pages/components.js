import React from 'react';
import useApi from '../lib/use-api';
import Layout from '../components/layout';

const Components = () => {
  const { response, error, isLoading } = useApi('/api/test');

  return (
    <Layout title="Components">
      <h2>Components Playground</h2>
      {JSON.stringify(response)}
      {JSON.stringify(error)}
      {isLoading}
    </Layout>
  );
};

export default Components;
