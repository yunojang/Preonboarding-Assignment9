import ModalContent from "types/modal";

export enum ModalTypes {
  SHOW_MODAL = "show_modal",
  CLOSE_MODAL = "close_modal",
}

export interface ModalAction {
  type: ModalTypes;
  content?: ModalContent;
}
