import Card from "../../_component/Card";

const BookMarkBanner = () => {
  return (
    <Card
      type="none"
      className="flex flex-col gap-4 bg-green-white h-30 mb-10 rounded-lg justify-center items-center w-full"
    >
      <span className="font-bold text-3xl text-green-dark">
        북마크한 스터디
      </span>
      <span className="font-semibold text-sm text-green-dark">
        내가 찜한 스터디를 한눈에 확인해보세요 💻
      </span>
    </Card>
  );
};

export default BookMarkBanner;
