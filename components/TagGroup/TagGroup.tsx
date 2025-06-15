"use client";

import { useState } from "react";
import clsx from "clsx";
import TagButton from "./TagButton";

interface TagGroupProps {
  label?: string;
  sideLabel?: string;
  labelClassName?: string;
  options: string[];
  defaultSelected?: string[];
  onChange?: (selected: string[]) => void;
  readonly?: boolean;
  sideLabelSize?: "default" | "small";
}

const TagGroup = ({
  label,
  sideLabel,
  labelClassName,
  options,
  defaultSelected = [],
  onChange,
  readonly = false,
  sideLabelSize = "default",
}: TagGroupProps) => {
  const [selectedValues, setSelectedValues] =
    useState<string[]>(defaultSelected);

  const toggle = (value: string) => {
    if (readonly) return;
    const newSelected = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];

    setSelectedValues(newSelected);
    onChange?.(newSelected);
  };

  const computedLabelClass = clsx(
    "min-w-[40px] font-bold",
    sideLabelSize === "small" ? "text-base" : "text-xl",
    labelClassName
  );

  if (sideLabel) {
    return (
      <div className="flex  items-center gap-4 mb-4">
        <div className={computedLabelClass}>{sideLabel}</div>
        <div className="flex gap-2 flex-wrap">
          {options.map((option) => (
            <TagButton
              key={option}
              selected={selectedValues.includes(option)}
              onClick={() => toggle(option)}
              className={readonly ? "pointer-events-none" : ""}
            >
              {option}
            </TagButton>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      {label && (
        <h2 className={clsx("mb-2 font-bold", labelClassName)}>{label}</h2>
      )}
      <div className="flex gap-2 flex-wrap">
        {options.map((option) => (
          <TagButton
            key={option}
            selected={selectedValues.includes(option)}
            onClick={() => toggle(option)}
            className={readonly ? "pointer-events-none" : ""}
          >
            {option}
          </TagButton>
        ))}
      </div>
    </div>
  );
};

export default TagGroup;
