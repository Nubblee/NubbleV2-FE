"use client";

import { ComponentProps } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

export interface SelectProps extends ComponentProps<"select"> {
  variant?: "underline" | "default";
}

const variantStyles = {
  underline: "border-0 border-b-1",
  default: "border border-gray-middle rounded-md",
};

const Select = ({
  className,
  variant = "default",
  children,
  ...props
}: SelectProps) => {
  return (
    <div className="relative w-full">
      <select
        className={clsx(
          "w-full px-3 py-2 text-base bg-white appearance-none pr-10",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </select>

      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
        <ChevronDown size={20} className="text-gray-dark" />
      </div>
    </div>
  );
};

export default Select;
