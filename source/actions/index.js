export const TOGGLE_MODAL = "TOGGLE_MODAL";

export const toggleModal = modalStatus => {
  return {
    type: TOGGLE_MODAL,
    payload: !modalStatus
  };
};
