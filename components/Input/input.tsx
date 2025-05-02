'use client";';

import { ComponentProps } from "react";
import clsx from "clsx";

type InputVariant = "underline" | "borderless" | "default";

export interface InputProps extends ComponentProps<"input"> {
  isInvalid?: boolean;
  invalidMessage?: string;
  validMessage?: string;
  variant?: InputVariant;
}

const variantStyles = {
  underline: "border-0 border-b-1",
  borderless: "border-0 bg-white",
  default: "border",
};

const Input = ({
  isInvalid = false,
  variant = "default",
  invalidMessage,
  validMessage,
  className,
  ...props
}: InputProps) => {
  return (
    <div className="w-full">
      <input
        className={clsx(
          "w-full px-2 py-1 outline-none rounded-md",
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
