import React from 'react';
import FormPage from '../page';
import FormRow from '../row';
import Input from '../input';
import Textarea from '../textarea';
import Select from '../select';
import { updateForm } from '../../../hooks/forms'

const Page1 = ({ formData, setFormData, formStep, setFormStep }) => (
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
      <Input
        name="inputTest"
        label="Test Input"
        type="text"
        value={formData.inputTest}
        onChange={event => {
          updateForm(event, setFormData);
        }}
      />
      <Textarea
        name="textareaTest"
        label="Test Textarea"
        type="text"
        value={formData.textareaTest}
        onChange={event => {
          updateForm(event, setFormData);
        }}
      />
      <Select
        name="selectTest"
        label="Test Select"
        items={[
          {
            value: "Yes",
            label: "Yes"
          },
          {
            value: "No",
            label: "No"
          }
        ]}
        value={formData.selectTest}
        onChange={event => {
          updateForm(event, setFormData);
        }}
      />
    </FormRow>
  </FormPage>
);

export default Page1;
