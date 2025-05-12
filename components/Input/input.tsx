'use client";';

import { ComponentProps } from "react";
import clsx from "clsx";

type InputVariant = "underline" | "borderless" | "default";

export interface InputProps extends ComponentProps<"input"> {
  label?: string;
  htmlFor?: string;
  isInvalid?: boolean;
  invalidMessage?: string;
  validMessage?: string;
  variant?: InputVariant;
}

const variantStyles = {
  underline: "border-0 border-b-1",
  borderless: "border-0 bg-white rounded-md",
  default: "border rounded-md",
};

const Input = ({
  label,
  htmlFor,
  isInvalid = false,
  variant = "default",
  invalidMessage,
  validMessage,
  className,
  ...props
}: InputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="text-sm text-gray-dark flex mb-1.5" htmlFor={htmlFor}>
          {label}
        </label>
      )}
      <input
        className={clsx(
          "w-full px-2 py-1 outline-none placeholder-gray-placeholder",
          variantStyles[variant],
          className
        )}
        aria-invalid={isInvalid}
        {...props}
      />
      {isInvalid && invalidMessage && (
        <p className="mt-1 text-base text-red">{invalidMessage}</p>
      )}
      {!isInvalid && validMessage && (
        <p className="mt-1 text-base text-green-middle">{validMessage}</p>
      )}
    </div>
  );
};

export default Input;
