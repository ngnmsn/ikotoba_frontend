import { createPortal } from 'react-dom';

export const ModalPortal = ({ children }: any) => {
  return createPortal(children, document.body);
}