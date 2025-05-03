"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export interface TagButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

const TagButton = ({
  selected = false,
  className,
  children,
  ...props
}: TagButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "px-4 py-1 text-sm border rounded-2xl font-medium transition cursor-pointer",
        selected
          ? "bg-green-middle text-white border-green-middle hover:bg-green-dark"
          : "bg-white text-green-middle border-green-middle hover:bg-green-light",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default TagButton;
