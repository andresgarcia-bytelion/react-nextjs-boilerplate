import React, { useState, useEffect } from 'react';
import useApi from '../lib/use-api';
import Layout from '../components/layout';

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
    </Layout>
  );
};

export default Components;
