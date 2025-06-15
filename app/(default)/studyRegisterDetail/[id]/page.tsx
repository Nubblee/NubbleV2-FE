import Button from "@/components/Button";
import StudyRegisterDetailTag from "./_component/studyRegisterDetailTag";

// type Props = {
//   params: { id: string };
// };

const StudyDetailPage = () => {
  const mockStudy = {
    title: "[JavaScript] 알고리즘 스터디",
    languageOptions: ["JavaScript", "Python"],
    levelOptions: ["LV1", "LV2"],
    problemOptions: ["백준", "프로그래머스"],
    howOptions: ["온라인", "오프라인"],
    addressOptions: [],
    days: ["월", "화", "수", "목", "금", "토", "일"],
    writtenDate: "2025-10-01",
    introduction:
      "매주 화/목 21시에 진행합니다.\n백준 기준 실버 이상 대상입니다. 이 편지는!이 편지는!이 편지는!이 편지는!이 편지는!이 편지는!이 편지는!이 편지는!이 편지는!이 편지는!이 편지는!이 편지는!이 편지는!이 편지는!이 편지는!이 편지는!이 편지는!",
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-10">
      {/* 제목 */}
      <div className="mb-6 w-full max-w-[600px] border-b-1 border-gray-middle pb-6">
        <div className="flex justify-between items-end">
          <div className="text-3xl font-bold">{mockStudy.title}</div>
          <p className="text-gray-middle text-sm self-end">2025-01-23</p>
        </div>
      </div>
      {/* 스터디 정보 */}
      <div className="w-full max-w-[600px] flex flex-col border-b-1 border-gray-middle pb-6">
        <StudyRegisterDetailTag />
      </div>
      <div className="mt-6 w-full max-w-[600px] whitespace-pre-wrap">
        {mockStudy.introduction}
      </div>
      <div className="mt-6 w-full max-w-[600px] flex gap-4 justify-center">
        <Button variant="outlined">모집마감</Button>
        <Button>수정하기</Button>
      </div>
    </div>
  );
};

export default StudyDetailPage;
