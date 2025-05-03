import { Bookmark } from "lucide-react";

export interface BookMarkButtonProps {
  isBookMark?: boolean;
  onBookMark: (value: boolean) => void;
}

const BookMarkButton = ({ isBookMark, onBookMark }: BookMarkButtonProps) => {
  const handleBookMark = () => onBookMark(!isBookMark);

  return (
    <>
      <Bookmark
        className="cursor-pointer"
        width={18}
        height={18}
        color="#30D1BD"
        fill={isBookMark ? "#CCFBF1" : "none"}
        onClick={handleBookMark}
      />
    </>
  );
};

export default BookMarkButton;
