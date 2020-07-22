import React, { useState } from 'react';
import { useAppContext } from '../contexts';
import TestApi from '../services/test';
import Layout from '../components/layout';
import Button from '../components/button';
import History from '../components/history';
import Form from '../components/forms/form';
import Page1 from '../components/forms/test-form/page-1';
import Page2 from '../components/forms/test-form/page-2';

const Components = () => {
  const { response, isLoading } = TestApi.getAll();
  const { title } = useAppContext();
  const [formStep, setFormStep] = useState(1);
  const items = response && !isLoading
    ? response.map((item) => (JSON.stringify(item))) : '';

  return (
    <Layout title="Components">
      <h2>Components Playground</h2>
      <p>{response && !isLoading && JSON.stringify(response)}</p>
      <p>{items}</p>
      <p>{title}</p>
      <Button label="Boop Me" />
      <History
        paths={[
          {
            path: '/',
            label: 'Home',
          },
          {
            label: 'Components',
          },
        ]}
      />
      <Form title="Form Title">
        <Page1
          formStep={formStep}
          setFormStep={setFormStep}
        />
        <Page2
          formStep={formStep}
          setFormStep={setFormStep}
        />
      </Form>
    </Layout>
  );
};

export default Components;
