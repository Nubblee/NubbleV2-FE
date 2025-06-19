import clsx from "clsx";
import TagButton from "./TagButton";

interface TagGroupProps {
  label?: string;
  sideLabel?: string;
  labelClassName?: string;
  options: string[];
  selectedValues: string[];
  onChange?: (selected: string[]) => void;
  readonly?: boolean;
  sideLabelSize?: "default" | "small";
  singleSelect?: boolean;
}

const TagGroup = ({
  label,
  sideLabel,
  labelClassName,
  options,
  selectedValues,
  onChange,
  readonly = false,
  sideLabelSize = "default",
  singleSelect = false,
}: TagGroupProps) => {
  const toggle = (value: string) => {
    if (readonly || !onChange) return;

    let newSelected: string[];
    if (singleSelect) {
      newSelected = selectedValues.includes(value) ? [] : [value];
    } else {
      newSelected = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
    }
    onChange(newSelected);
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
              onClick={readonly ? undefined : () => toggle(option)}
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
            onClick={readonly ? undefined : () => toggle(option)}
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
