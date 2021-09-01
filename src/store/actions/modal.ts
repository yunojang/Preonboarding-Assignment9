import { ModalTypes, ModalContent, ModalAction } from "../types/modal";

export function showModal(content: ModalContent): ModalAction {
  return {
    type: ModalTypes.SHOW_MODAL,
    content,
  };
}

export function closeModal() {
  return {
    type: ModalTypes.CLOSE_MODAL,
  };
}
