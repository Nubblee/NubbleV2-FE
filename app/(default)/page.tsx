"use client";

import StudyCard from "@/app/(default)/_component/StudyCard";
import ActiveSection from "@/app/(default)/_sections/ActiveSection";
import RecruitingSection from "@/app/(default)/_sections/RecruitingSection";
import Button from "@/components/Button";
import Input from "@/components/Input/input";
import { StudyCardProps } from "@/types/study";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const myStudies: StudyCardProps[] = [
    {
      studyGroupId: "101",
      status: "RECRUITING",
      icon: "/javascript.png",
      name: "[JS] 알고리즘 뿌시기 스터디원 찾습니다!",
      allMembers: 5,
      members: 3,
      difficultyLevels: ["LV1", "LV2"],
      mainMeetingDays: ["MON"],
      expireDay: "2025.12.31",
      mainLanguage: "JAVASCRIPT",
    },
    {
      studyGroupId: "102",
      status: "RECRUITING",
      icon: "/javascript.png",
      name: "[JS] 알고리즘 뿌시기 스터디원 찾습니다!",
      allMembers: 5,
      members: 3,
      difficultyLevels: ["LV1", "LV2"],
      mainMeetingDays: ["MON"],
      expireDay: "2025.12.31",
      mainLanguage: "JAVASCRIPT",
    },
    {
      studyGroupId: "103",
      status: "RECRUITING",
      icon: "/javascript.png",
      name: "[JS] 알고리즘 뿌시기 스터디원 찾습니다!",
      allMembers: 5,
      members: 3,
      difficultyLevels: ["LV1", "LV2"],
      mainMeetingDays: ["MON"],
      expireDay: "2025.12.31",
      mainLanguage: "JAVASCRIPT",
    },
  ];

  return (
    <main className="flex flex-col items-center">
      {/*검색 필터 영역 */}
      <section className="w-full bg-green-middle text-white py-4 px-4">
        <div className="max-w-[80%] mx-auto space-y-4">
          {/* 제목 + 버튼 */}
          <div className="hidden md:flex flex-col md:flex-row items-center gap-4">
            <h1 className="text-3xl font-bold text-green-dark">
              마음에 드는 스터디가 없으신가요?
            </h1>
            <Button
              variant="outlined"
              className="text-white border-white rounded-full"
              onClick={() => router.push("/studyRegister")}
            >
              스터디 만들러 가기
            </Button>
          </div>

          {/* 필터 폼 */}
          <div className="text-white font-bold text-lg mb-1">스터디 찾기</div>
          <div className="flex flex-col md:flex-row md:items-stretch rounded-md py-2  gap-2 md:gap-4">
            {["언어", "레벨", "인원 수", "날짜 및 시간"].map((placeholder) => (
              <Input
                key={placeholder}
                placeholder={placeholder}
                className="flex-1 text-black h-9 md:h-12 pl-3"
                variant="borderless"
              />
            ))}
            <Button
              variant="secondary"
              className="md:ml-4 px-6 h-12 whitespace-nowrap mt-2 md:mt-0 rounded-lg"
            >
              검색
            </Button>
          </div>
        </div>
      </section>

      {/* ✅ 내 스터디 */}
      <section className="w-full max-w-6xl px-4 py-8">
        <h2 className="text-lg font-bold mb-4">내 스터디 🔒</h2>

        <div
          className="grid 
                        grid-cols-[repeat(auto-fill,_minmax(270px,_1fr))] 
                        gap-6 
                        justify-items-center"
        >
          {myStudies.map((study) => (
            <StudyCard
              key={study.studyGroupId}
              {...study}
              className="cursor-pointer"
              onBookMark={() => {}}
            />
          ))}
        </div>
      </section>

      {/* ✅ 진행중인 스터디 */}
      <ActiveSection />

      {/* ✅ 모집중인 스터디 */}
      <RecruitingSection />
    </main>
  );
}
