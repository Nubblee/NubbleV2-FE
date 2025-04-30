import { useRouter } from "next/navigation";
import { ModalProps } from "./Modal";

type Props = Pick<ModalProps, "title" | "children" | "onClose">;
export default function ModalContainer({ title, children, onClose }: Props) {
  const router = useRouter();
  const handleClickOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      if (onClose) onClose(e);
      else router.back();
    }
  };

  return (
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
    </div>
  );
}
