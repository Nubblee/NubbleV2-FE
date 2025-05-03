"use client";

import { ComponentProps } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

export interface SelectProps extends ComponentProps<"select"> {
  variant?: "underline" | "default";
}

const variantStyles = {
  underline:
    "border-0 border-b-1 border-gray-middle focus:outline-none focus:ring-0 focus:border-gray-dark",
  default:
    "border border-gray-middle rounded-md focus:outline-none focus:ring-1 focus:ring-gray-dark",
};

const Select = ({
  className,
  variant = "default",
  children,
  ...props
}: SelectProps) => {
  return (
    <label className="relative w-full block">
      <select
        className={clsx(
          "w-full px-3 py-2 text-base bg-white appearance-none pr-10 cursor-pointer",
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
    </label>
  );
};

export default Select;
