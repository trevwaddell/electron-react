export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    payload: {
      open: true,
      modal
    }
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
    payload: {
      open: false,
      modal: false
    }
  };
};
