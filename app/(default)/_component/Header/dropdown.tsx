import Link from "next/link";
import { useEffect, useRef } from "react";

interface DropDownListProps {
  label: string;
  link?: string;
  onClick?: () => void;
}

interface DropDownProps {
  lists: DropDownListProps[];
  onClose?: () => void;
}

export const DropDown = ({ lists, onClose }: DropDownProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOverlay = (e: MouseEvent) =>
      ref.current && !ref.current.contains(e.target as Node) && onClose?.();

    window.addEventListener("mousedown", handleOverlay);
    return () => window.removeEventListener("mousedown", handleOverlay);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="absolute right-2 mt-10 w-28 bg-white border border-gray-200 rounded shadow z-10"
    >
      <ul className="text-sm text-gray-700">
        {lists.map((list, idx) => (
          <li
            key={idx}
            className="hover:bg-green-light px-4 py-2 cursor-pointer"
          >
            {list.link ? (
              <Link href={list.link} onClick={() => onClose?.()}>
                {list.label}
              </Link>
            ) : list.onClick ? (
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => {
                  list.onClick?.();
                  onClose?.();
                }}
              >
                {list.label}
              </button>
            ) : (
              <span>{list.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
