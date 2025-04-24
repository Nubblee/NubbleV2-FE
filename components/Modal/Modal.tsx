import { MouseEventHandler } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
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
    <div
      className="fixed top-0 left-0 w-full h-full bg-[rgba(7,7,7,0.9)] flex justify-center items-center"
      onClick={handleClickOverlay}
    >
      <div className="rounded-sm bg-[#ffffff]">
        {title && (
          <div className="py-[21px] text-black text-3xl font-extrabold text-center">
            {title}
          </div>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
