import React from 'react';
import FormPage from '../page';

const Page2 = ({ formStep, setFormStep }) => (
  <FormPage
    pageNumber={2}
    formStep={formStep}
    actions={(
      <button
        onClick={(e) => {
          e.preventDefault();
          setFormStep(formStep - 1);
        }}
        type="button"
      >
        back
      </button>
      )}
  >
    Test2
  </FormPage>
);

export default Page2;
