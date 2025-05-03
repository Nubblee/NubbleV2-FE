"use client";

import { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

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

const Button = ({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-lg text-base font-medium transition cursor-pointer",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
