import { ModalTypes, ModalAction } from "./types/modal";
import ModalContent from "types/modal";

export function showModal(content: ModalContent): ModalAction {
  return {
    type: ModalTypes.SHOW_MODAL,
    content,
  };
}

export function closeModal(): ModalAction {
  return {
    type: ModalTypes.CLOSE_MODAL,
  };
}
