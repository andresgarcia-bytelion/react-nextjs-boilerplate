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

export const updateBatchForm = (updates, setFormData) => {
  setFormData((previousState) => {
    const newState = {};

    updates.forEach((update) => {
      newState[update.key] = update.value;
    });

    return ({
      ...previousState,
      ...newState,
    });
  });
};
