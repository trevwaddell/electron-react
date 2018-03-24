import { TOGGLE_MODAL } from "../actions/";

const initialState = {
  open: false,
  modal: null
};

const toggleModal = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return action.payload;
    default:
      return state;
  }
};

export default toggleModal;
