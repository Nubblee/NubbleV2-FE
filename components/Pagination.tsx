import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";

interface Props {
  page: number;
  setPage: (page: number) => void;
  totalPage: number;
  limit: number;
}

const Pagination = ({ page, setPage, totalPage, limit }: Props) => {
  const createPages = () => {
    const pages = [];
    const halfSize = Math.floor(limit / 2);
    let left = 0;
    let right = 0;

    pages.push(1);

    // 2페이지 ~ totalPage - 1 까지 처리
    if (totalPage <= limit) {
      for (let i = 2; i < totalPage; i++) {
        pages.push(i);
      }
    } else if (page <= limit) {
      for (let i = 2; i <= limit; i++) {
        pages.push(i);
      }
    } else {
      left = Math.max(2, page - halfSize);
      right = Math.min(totalPage - 1, page + halfSize);

      //limit가 짝수인 경우 pageSize 처리
      if (limit % 2 === 0) {
        left = Math.max(2, page - (halfSize - 1));
      }

      if (left > 2) pages.push("prev-dots");

      for (let i = left; i <= right; i++) {
        pages.push(i);
      }
    }

    if (right < totalPage) pages.push("next-dots");
    pages.push(totalPage);

    return pages;
  };

  //이전
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  //다음
  const handleNext = () => {
    if (page < totalPage) setPage(page + 1);
  };

  if (totalPage <= 1) return null;

  const pages = createPages();

  return (
    <div className="flex gap-6 items-center">
      <button
        className={page === 1 ? "text-gray" : "text-black cursor-pointer"}
        onClick={handlePrev}
        disabled={page === 1}
      >
        <ChevronLeft size={21} />
      </button>
      {pages.map((item) =>
        item === "prev-dots" || item === "next-dots" ? (
          <span key={item} className="text-black">
            <Ellipsis size={18} />
          </span>
        ) : (
          <button
            key={item}
            className={`w-[32px] h-[32px] text-base cursor-pointer ${
              item === page
                ? "text-white rounded-2xl bg-[#0D9488] "
                : "text-black"
            }`}
            onClick={() => setPage(Number(item))}
          >
            {item}
          </button>
        )
      )}
      <button
        className={` ${
          page === totalPage ? "text-gray" : "text-black cursor-pointer"
        }`}
        onClick={handleNext}
        disabled={page === totalPage}
      >
        <ChevronRight size={21} />
      </button>
    </div>
  );
};

export default Pagination;
