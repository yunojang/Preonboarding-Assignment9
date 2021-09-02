import { combineReducers } from "redux";
import todo, { TodoState } from "./todo";
import modal, { ModalState } from "./modal";

export interface RootState {
  modal: ModalState;
  todo: TodoState;
}

const rootReducer = combineReducers({ todo, modal });

export default rootReducer;
