import { combineReducers } from "redux";
import todo from "./todo";
import modal, { State as ModalState } from "./modal";

export interface RootState {
  modal: ModalState;
}

const rootReducer = combineReducers({ todo, modal });

export default rootReducer;
