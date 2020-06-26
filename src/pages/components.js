import React from 'react';
import useApi from '../lib/use-api';
import { useAppContext } from '../contexts';
import Layout from '../components/layout';
import Button from '../components/button';

const Components = () => {
  const { response, isLoading } = useApi(`${process.env.apiRoot}questions`);
  const { title } = useAppContext();

  const items = response && !isLoading
    ? response.map((item) => (JSON.stringify(item))) : '';

  return (
    <Layout title="Components">
      <h2>Components Playground</h2>
      <p>{response && !isLoading && JSON.stringify(response)}</p>
      <p>{items}</p>
      <p>{title}</p>
      <Button label="Boop Me" />
    </Layout>
  );
};

export default Components;
