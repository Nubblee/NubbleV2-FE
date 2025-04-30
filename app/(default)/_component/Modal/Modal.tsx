import { MouseEventHandler } from "react";
import { createPortal } from "react-dom";
import ModalContainer from "./ModalContainer";

export interface ModalProps {
  isOpen: boolean;
  onClose?: MouseEventHandler;
  title?: string;
  children: React.ReactNode;
}

const Modal = ({ title, children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  const handleClickOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose?.(e);
    }
  };

  return createPortal(
    <ModalContainer title={title} onClose={handleClickOverlay}>
      {children}
    </ModalContainer>,
    document.body
  );
};

export default Modal;
