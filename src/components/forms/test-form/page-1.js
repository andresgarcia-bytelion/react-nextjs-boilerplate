import React from 'react';
import FormPage from '../page';

const Page1 = ({ actions, formStep, setFormStep }) => {
  return (
    <FormPage
      actions={
        <button onClick={(e) => {
          e.preventDefault();
          setFormStep(formStep+1);
        }}>
          next
        </button>
      }
      formStep={formStep}
      pageNumber={1}
    >
      Test1
    </FormPage>
  );
};

export default Page1;
