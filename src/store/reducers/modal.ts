import { ModalTypes, ModalContent, ModalAction } from "../types/modal";

export interface State {
  show: boolean;
  content?: ModalContent;
}

const INITIAL_STATE: State = {
  show: false,
};

const modalReducer = (state = INITIAL_STATE, action: ModalAction): State => {
  switch (action.type) {
    case ModalTypes.SHOW_MODAL:
      return {
        ...state,
        show: true,
        content: action.content,
      };
    case ModalTypes.CLOSE_MODAL:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
