import React from 'react';
import FormPage from '../page';

const Page2 = ({ actions, formStep, setFormStep }) => {
  return (
    <FormPage
      actions={
        <button onClick={(e) => {
          e.preventDefault();
          setFormStep(formStep-1);
        }}>
          back
        </button>
      }
      formStep={formStep}
      pageNumber={2}
    >
      Test2
    </FormPage>
  );
};

export default Page2;
