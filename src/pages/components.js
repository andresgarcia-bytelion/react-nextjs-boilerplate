import React, { useState } from 'react';
import { useAppContext } from 'contexts';
import TestApi from 'services/test';
import Layout from 'components/layout';
import Accordion from 'components/accordion';
import Button from 'components/button';
import History from 'components/history';
import Progress from 'components/progress';
import Toggle from 'components/toggle';
import Tabs from 'components/tabs';
import Toast from 'components/toast';
import UserBubble from 'components/user-bubble';
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
      <Accordion title="Accordion Title">
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>
      </Accordion>
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
      <Toggle
        label="Show Treasure"
        onClick={() => {
          // console.log("Release the Kraken!")
        }}
      />
      <UserBubble
        items={[
          {
            label: 'Profile',
            onClick: () => {},
          },
          {
            label: 'Sign Out',
            onClick: () => {},
          },
        ]}
      />
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
