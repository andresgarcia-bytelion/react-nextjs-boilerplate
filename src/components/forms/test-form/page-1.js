import React from 'react';
import FormPage from '../page';
import FormRow from '../row';

const Page1 = ({ formStep, setFormStep }) => (
  <FormPage
    pageNumber={1}
    formStep={formStep}
    actions={(
      <button
        onClick={(e) => {
          e.preventDefault();
          setFormStep(formStep + 1);
        }}
        type="button"
      >
        next
      </button>
      )}
  >
    <FormRow columns={2}>
      <div>Test1</div>
      <div>Test1</div>
      <div>Test1</div>
    </FormRow>
  </FormPage>
);

export default Page1;
