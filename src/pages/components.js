import React, { useState, useEffect } from 'react';
import useApi from '../lib/use-api';
import Layout from '../components/layout';
import Button from '../components/button';

const Components = () => {
  const { response, isLoading } = useApi('/api/test');
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (response) {
      setItems(response);
    }
  }, [response]);

  return (
    <Layout title="Components">
      <h2>Components Playground</h2>
      <p>
        {!isLoading && response && JSON.stringify(items)}
      </p>
      <Button label="Boop Me" />
    </Layout>
  );
};

export default Components;
