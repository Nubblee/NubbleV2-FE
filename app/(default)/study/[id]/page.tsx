import TagGroup from "@/components/TagGroup/TagGroup";

type Props = {
  params: { id: string };
};

const StudyDetailPage = ({ params }: Props) => {
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
      "매주 화/목 21시에 진행합니다.\n백준 기준 실버 이상 대상입니다.",
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-10">
      {/* 제목 */}
      <div className="mb-6 w-full max-w-[600px] text-3xl font-bold border-b-1 border-gray-middle pb-6">
        {mockStudy.title}
      </div>
      {/* 스터디 정보 */}
      <div className="">
        <TagGroup
          readonly
          options={mockStudy.languageOptions}
          sideLabel="언어"
        />
      </div>
      <p className="text-gray-600">스터디 ID: {params.id}</p>
      <div className="mt-6 w-full max-w-[600px] whitespace-pre-wrap">
        {mockStudy.introduction}
      </div>
    </div>
  );
};

export default StudyDetailPage;
