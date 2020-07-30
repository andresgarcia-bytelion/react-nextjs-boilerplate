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
  const [formData, setFormData] = useState({
    inputTest: 'inputTest',
    textareaTest: 'textareaTest',
  });
  const [formStep, setFormStep] = useState(1);

  return (
    <Layout title="Components">
      <History
        paths={[
          {
            path: '/',
            label: 'Home',
          },
          {
            label: 'Component Playground',
          },
        ]}
      />
      <p>
        <strong>API Services Response: </strong>
        {response && !isLoading && JSON.stringify(response)}
      </p>
      <p>
        <strong>App Context API Response: </strong>
        {title}
      </p>
      <Button label="Boop Me" />
      <Form title="Form Title">
        <Page1
          formData={formData}
          setFormData={setFormData}
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
