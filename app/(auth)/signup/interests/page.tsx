import InterestsTag from "../../_component/interests-tag";

const Page = () => {
  return (
    <div className="flex flex-col">
      <span className="text-semibold text-center mt-5 mb-16 text-gray-dark">
        회원님께 잘 맞는 스터디를 찾을 수 있도록 선호하시는 정보를 알려주세요 🔎
      </span>
      <InterestsTag />
    </div>
  );
};

export default Page;
