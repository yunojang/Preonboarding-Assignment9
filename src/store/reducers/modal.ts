import { ModalTypes, ModalAction } from "../actions/types/modal";
import ModalContent from "types/modal";

export interface ModalState {
  show: boolean;
  content?: ModalContent;
}

const INITIAL_STATE: ModalState = {
  show: false,
};

const modalReducer = (
  state = INITIAL_STATE,
  action: ModalAction
): ModalState => {
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
