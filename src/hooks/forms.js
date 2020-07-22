export const handleBack = (formStep, setFormStep) => {
  setFormStep(formStep - 1);
};

export const handleNext = (formStep, setFormStep) => {
  setFormStep(formStep + 1);
};

export const updateForm = (event, key, setFormData) => {
  const { value } = event.target;

  setFormData((previousState) => ({
    ...previousState,
    [key]: value,
  }));
};
