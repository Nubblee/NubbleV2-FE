"use client";

import * as RadixSelect from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";
import clsx from "clsx";

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  variant?: "default" | "underline";
}

const variantStyles = {
  default: "border border-gray-middle rounded-md",
  underline: "border-0 border-b border-gray-middle",
};

const Select = ({
  options,
  value,
  onChange,
  placeholder = "선택하세요",
  variant = "default",
}: SelectProps) => {
  return (
    <RadixSelect.Root value={value} onValueChange={onChange}>
      <RadixSelect.Trigger
        className={clsx(
          "w-full flex items-center justify-between px-3 py-2 text-base bg-white cursor-pointer appearance-none",
          "focus:outline-none focus:ring-2 focus:ring-green-light",
          variantStyles[variant]
        )}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <ChevronDown size={20} className="text-gray-500" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Content className="z-50 mt-1 bg-white rounded-md shadow-md overflow-hidden">
        <RadixSelect.Viewport className="py-1 overflow-y-auto">
          {options.map((opt) => (
            <RadixSelect.Item
              key={opt.value}
              value={opt.value}
              className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-green-light focus:outline-none"
            >
              <RadixSelect.ItemText>{opt.label}</RadixSelect.ItemText>
              <RadixSelect.ItemIndicator>
                <Check size={16} className="text-primary" />
              </RadixSelect.ItemIndicator>
            </RadixSelect.Item>
          ))}
        </RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Root>
  );
};

export default Select;
