type CardType = "gray" | "green" | "none";
type CardSizeType = "md" | "lg";

export interface CardProps {
  type?: CardType;
  roundSize?: CardSizeType;
  isShadow?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Card = ({
  type = "gray",
  roundSize = "md",
  isShadow = false,
  children,
  className,
}: CardProps) => {
  const borderColor =
    type === "green"
      ? " border-green-middle"
      : type === "gray"
      ? " border-gray-light"
      : "border-none";
  const borderRadius = roundSize === "md" ? "rounded-md" : "rounded-[10px]";
  const borderShadow = isShadow ? "shadow-sm" : "none";

  return (
    <div
      className={`w-fit border-1 ${borderColor} ${borderRadius} ${borderShadow} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
