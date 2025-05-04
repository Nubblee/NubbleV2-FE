"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outlined";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantStyles = {
  outlined:
    "border border-green-middle text-green-middle bg-transparent hover:bg-green-light",
  primary: "bg-green-middle text-white hover:bg-green-dark",
  secondary: "bg-green-dark text-white hover:bg-green-middle",
};

const baseStyles = "px-4 py-2 rounded-lg text-base font-medium transition";
const disabledStyles =
  "bg-gray-300 text-white cursor-not-allowed hover:bg-gray-300 border-0";
const enabledCursor = "cursor-pointer";
const Button = ({
  variant = "primary",
  className,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        baseStyles,
        disabled ? disabledStyles : [enabledCursor, variantStyles[variant]],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
