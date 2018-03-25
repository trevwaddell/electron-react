import { OPEN_MODAL, CLOSE_MODAL } from "../actions/";

const initialState = {
  open: false,
  modal: null
};

const toggleModal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.payload;
    case CLOSE_MODAL:
      return action.payload;
    default:
      return state;
  }
};

export default toggleModal;
