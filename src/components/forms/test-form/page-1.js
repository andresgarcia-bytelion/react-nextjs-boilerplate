import React from 'react';
import FormPage from 'components/forms/page';
import FormRow from 'components/forms/row';
import Input from 'components/forms/input';
import Textarea from 'components/forms/textarea';
import Select from 'components/forms/select';
import { updateForm, batchUpdateForm } from 'hooks/forms';

const Page1 = ({
  formData, setFormData, formStep, setFormStep,
}) => (
  <FormPage
    pageNumber={1}
    formStep={formStep}
    actions={(
      <button
        onClick={(e) => {
          e.preventDefault();
          setFormStep(formStep + 1);
          batchUpdateForm({
            testing: 'yes',
            test: true,
          }, setFormData);
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
        onChange={(event) => {
          updateForm(event, setFormData);
        }}
      />
      <Textarea
        name="textareaTest"
        label="Test Textarea"
        value={formData.textareaTest}
        onChange={(event) => {
          updateForm(event, setFormData);
        }}
      />
      <Select
        name="selectTest"
        label="Test Select"
        items={[
          {
            value: 'Yes',
            label: 'Yes',
          },
          {
            value: 'Patrone',
            label: 'Patrone',
          },
        ]}
        value={formData.selectTest}
        onChange={(event) => {
          updateForm(event, setFormData);
        }}
      />
    </FormRow>
  </FormPage>
);

export default Page1;
