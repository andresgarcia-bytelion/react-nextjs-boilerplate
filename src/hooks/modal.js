export const closeModal = (setModalVisibility, setModalStep) => {
  setModalVisibility(false);

  if (setModalStep) {
    // Set timeout to UI speed
    setTimeout(() => {
      setModalStep(1);
    }, 250);
  }
}