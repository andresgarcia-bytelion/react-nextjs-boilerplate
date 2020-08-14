import React, { useState } from 'react';
import { useAppContext } from 'contexts';
import TestApi from 'services/test';
import Layout from 'components/layout';
import Button from 'components/button';
import History from 'components/history';
import Progress from 'components/progress';
import Toggle from 'components/toggle';
import Tabs from 'components/tabs';
import Toast from 'components/toast';
import Form from 'components/forms/form';
import Page1 from 'components/forms/test-form/page-1';
import Page2 from 'components/forms/test-form/page-2';

const Components = () => {
  const { response, isLoading } = TestApi.getAll();
  const { title } = useAppContext();
  const [formData, setFormData] = useState({
    inputTest: 'Deezle',
    textareaTest: 'Bot',
    selectTest: 'Patrone',
  });
  const [formStep, setFormStep] = useState(1);
  const [toastVisible, setToastVisible] = useState(false);

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
      <Button
        label="Boop Me"
        onClick={() => {
          setToastVisible((prevState) => !prevState);
        }}
      />
      <Toast
        label="You Booped Me"
        visible={toastVisible}
        setVisible={setToastVisible}
      />
      <Progress ratio={[1, 4]} />
      <Tabs
        items={[
          {
            id: '0',
            label: 'First',
            onClick: () => {
              // router.push('/path');
            },
          },
          {
            id: '1',
            label: 'Second',
            onClick: () => {
              // setState(prevState => !prevState);
            },
          },
        ]}
      />
      <Toggle label="Show Treasure" />
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
