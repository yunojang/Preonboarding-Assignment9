export enum ModalTypes {
  SHOW_MODAL = "show_modal",
  CLOSE_MODAL = "close_modal",
}

export interface ModalContent {
  title: string;
  body: JSX.Element;
}

export interface ModalAction {
  type: ModalTypes;
  content: ModalContent;
}
