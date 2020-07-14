export const handleBack = (formStep, setFormStep) => {
  setFormStep(formStep - 1);
};

export const handleNext = (formStep, setFormStep) => {
  setFormStep(formStep + 1);
};
