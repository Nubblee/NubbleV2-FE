'use client";';

import { ComponentProps } from "react";
import clsx from "clsx";

export interface InputProps extends ComponentProps<"input"> {
  isInvalid?: boolean;
}

const Input = ({ isInvalid = false, className, ...props }: InputProps) => {
  return (
    <input
      className={clsx(
        "w-full border",
        isInvalid ? "border-red-500" : "border-black",
        className
      )}
      aria-invalid={isInvalid}
      {...props}
    />
  );
};

export default Input;
