type CardType = "gray" | "green";
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
    type === "green" ? " border-green-middle" : " border-gray-light";
  const borderRadius = roundSize === "md" ? "rounded-md" : "rounded-[10px]";
  const borderShadow = isShadow ? "shadow-sm" : "none";

  return (
    <div
      className={`w-fit p-2 border-1 ${borderColor} ${borderRadius} ${borderShadow} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
