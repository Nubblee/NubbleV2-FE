"use client";

import { useState } from "react";
import clsx from "clsx";
import TagButton from "./TagButton";

interface TagGroupProps {
  label?: string;
  labelClassName?: string;
  options: string[];
  defaultSelected?: string[];
  onChange?: (selected: string[]) => void;
}

const TagGroup = ({
  label,
  labelClassName,
  options,
  defaultSelected = [],
  onChange,
}: TagGroupProps) => {
  const [selectedValues, setSelectedValues] =
    useState<string[]>(defaultSelected);

  const toggle = (value: string) => {
    const newSelected = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];

    setSelectedValues(newSelected);
    onChange?.(newSelected);
  };

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
          >
            {option}
          </TagButton>
        ))}
      </div>
    </div>
  );
};

export default TagGroup;
