export const handleBack = (formStep, setFormStep) => {
  setFormStep(formStep - 1);
};

export const handleNext = (formStep, setFormStep) => {
  setFormStep(formStep + 1);
};

export const updateForm = (event, key, setFormData) => {
  const value = event.target.value;

  setFormData(previousState => {
    return {
      ...previousState,
      [key]: value;
    }
  });
};