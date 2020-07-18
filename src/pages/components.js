import React, { useState } from 'react';
import useApi from '../lib/use-api';
import { useAppContext } from '../contexts';
import Layout from '../components/layout';
import Button from '../components/button';
import Form from '../components/forms/form';
import Input from '../components/forms/input';
import Select from '../components/forms/select';
import Textarea from '../components/forms/textarea';
import Page1 from '../components/forms/test-form/page-1';
import Page2 from '../components/forms/test-form/page-2';

const Components = () => {
  const { response, isLoading } = useApi(`${process.env.apiRoot}questions`);
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
