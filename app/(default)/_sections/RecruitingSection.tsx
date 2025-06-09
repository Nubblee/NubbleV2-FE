import { useState } from "react";
import Pagination from "@/components/Pagination";
import { StudyCardProps } from "@/types/study";
import StudyCard from "@/app/(default)/_component/StudyCard";
import { useRouter } from "next/navigation";

const studiesPerPage = 6;

const studyList: StudyCardProps[] = [
  {
    studyGroupId: "1",
    status: "RECRUITING",
    icon: "/javascript.png",
    name: "자바스크립트 왕초보 스터디",
    allMembers: 8,
    members: 4,
    difficultyLevels: ["LV1", "LV2"],
    mainMeetingDays: ["MON", "WED", "FRI"],
    expireDay: "2025-06-01",
    mainLanguage: "JAVASCRIPT",
  },
  {
    studyGroupId: "2",
    status: "ACTIVE",
    icon: "/javascript.png",
    name: "모던 JS 완전 정복",
    allMembers: 6,
    members: 6,
    difficultyLevels: ["LV1", "LV2"],
    mainMeetingDays: ["TUE", "THU"],
    mainLanguage: "JAVASCRIPT",
  },
  {
    studyGroupId: "3",
    status: "RECRUITING",
    icon: "/javascript.png",
    name: "JS 알고리즘 스터디",
    allMembers: 4,
    members: 1,
    difficultyLevels: ["LV1", "LV2"],
    mainMeetingDays: ["SAT", "SUN"],
    expireDay: "2025-05-20",
    mainLanguage: "JAVASCRIPT",
  },
  {
    studyGroupId: "4",
    status: "ACTIVE",
    icon: "/javascript.png",
    name: "프론트엔드 면접 대비",
    allMembers: 3,
    members: 3,
    difficultyLevels: ["LV1", "LV2"],
    mainMeetingDays: ["WED", "SUN"],
    mainLanguage: "JAVASCRIPT",
  },
  {
    studyGroupId: "5",
    status: "RECRUITING",
    icon: "/javascript.png",
    name: "자바스크립트 입문과정",
    allMembers: 5,
    members: 4,
    difficultyLevels: ["LV1", "LV2"],
    mainMeetingDays: ["MON", "TUE"],
    expireDay: "2025-05-25",
    mainLanguage: "JAVASCRIPT",
  },
  {
    studyGroupId: "6",
    status: "ACTIVE",
    icon: "/javascript.png",
    name: "React로 배우는 JS",
    allMembers: 7,
    members: 7,
    difficultyLevels: ["LV1", "LV2"],
    mainMeetingDays: ["FRI", "SAT"],
    mainLanguage: "JAVASCRIPT",
  },
  {
    studyGroupId: "7",
    status: "RECRUITING",
    icon: "/javascript.png",
    name: "코딩 테스트 준비반",
    allMembers: 6,
    members: 2,
    difficultyLevels: ["LV1", "LV2"],
    mainMeetingDays: ["MON", "THU"],
    expireDay: "2025-06-05",
    mainLanguage: "PYTHON",
  },
  {
    studyGroupId: "8",
    status: "ACTIVE",
    icon: "/javascript.png",
    name: "Node.js 백엔드 스터디입니다 백엔드? 아닙니다 코딩테스트 스터디 입니다",
    allMembers: 5,
    members: 5,
    difficultyLevels: ["LV1", "LV2"],
    mainMeetingDays: ["TUE", "SAT"],
    mainLanguage: "JAVASCRIPT",
  },
  {
    studyGroupId: "9",
    status: "RECRUITING",
    icon: "/javascript.png",
    name: "웹 개발 기초반",
    allMembers: 4,
    members: 1,
    difficultyLevels: ["LV1", "LV2"],
    mainMeetingDays: ["WED", "FRI"],
    expireDay: "2025-06-10",
    mainLanguage: "JAVASCRIPT",
  },
  {
    studyGroupId: "10",
    status: "ACTIVE",
    icon: "/javascript.png",
    name: "JS 프로젝트 실습반",
    allMembers: 5,
    members: 5,
    difficultyLevels: ["LV1", "LV2"],
    mainMeetingDays: ["SAT", "SUN"],
    mainLanguage: "JAVASCRIPT",
  },
  {
    studyGroupId: "10",
    status: "ACTIVE",
    icon: "/javascript.png",
    name: "JS 프로젝트 실습반",
    allMembers: 5,
    members: 5,
    difficultyLevels: ["LV1", "LV2"],
    mainMeetingDays: ["SAT", "SUN"],
    mainLanguage: "JAVASCRIPT",
  },
  {
    studyGroupId: "10",
    status: "ACTIVE",
    icon: "/javascript.png",
    name: "JS 프로젝트 실습반",
    allMembers: 5,
    members: 5,
    difficultyLevels: ["LV1", "LV2"],
    mainMeetingDays: ["SAT", "SUN"],
    mainLanguage: "JAVASCRIPT",
  },
  {
    studyGroupId: "10",
    status: "ACTIVE",
    icon: "/javascript.png",
    name: "JS 프로젝트 실습반",
    allMembers: 5,
    members: 5,
    difficultyLevels: ["LV1", "LV2"],
    mainMeetingDays: ["SAT", "SUN"],
    mainLanguage: "JAVASCRIPT",
  },
  {
    studyGroupId: "10",
    status: "ACTIVE",
    icon: "/javascript.png",
    name: "JS 프로젝트 실습반",
    allMembers: 5,
    members: 5,
    difficultyLevels: ["LV1", "LV2"],
    mainMeetingDays: ["SAT", "SUN"],
    mainLanguage: "JAVASCRIPT",
  },
  {
    studyGroupId: "10",
    status: "ACTIVE",
    icon: "/javascript.png",
    name: "JS 프로젝트 실습반",
    allMembers: 5,
    members: 5,
    difficultyLevels: ["LV1", "LV2"],
    mainMeetingDays: ["SAT", "SUN"],
    mainLanguage: "JAVASCRIPT",
  },
];

export default function RecruitingSection() {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(studyList.length / studiesPerPage);
  const startIdx = (currentPage - 1) * studiesPerPage;
  const currentStudies = studyList.slice(startIdx, startIdx + studiesPerPage);

  return (
    <section className="w-full px-4 py-8">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-lg font-bold mb-4">모집중인 스터디 💬</h2>

        <div
          className="grid 
             grid-cols-[repeat(auto-fill,_minmax(270px,_1fr))] 
             gap-6 mb-6 
             justify-items-center"
        >
          {currentStudies.map((study, i) => (
            <StudyCard
              key={i}
              {...study}
              onClick={() =>
                router.push(`/studyRegisterDetail/${study.studyGroupId}`)
              }
              onBookMark={() => {}}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Pagination
            page={currentPage}
            setPage={(p) => setCurrentPage(p)}
            totalPage={totalPages}
            limit={5}
          />
        </div>
      </div>
    </section>
  );
}
