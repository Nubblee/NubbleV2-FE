import { useState } from "react";
import StudyCard from "@/app/(default)/_component/StudyCard";
import Pagination from "@/components/Pagination";

const studiesPerPage = 6;

const studyList = [
  {
    icon: "/nubble.png",
    title: "[JS] 알고리즘 초급 스터디",
    allMembers: 5,
    members: 3,
    level: "Lv 1 - Lv 2",
    days: ["MON", "WED"],
    expireDay: "2025.06.30",
  },
  {
    icon: "/nubble.png",
    title: "[Python] 중급 백엔드 개발 스터디",
    allMembers: 6,
    members: 4,
    level: "Lv 2 - Lv 3",
    days: ["TUE", "THU"],
    expireDay: "2025.07.15",
  },
  {
    icon: "/nubble.png",
    title: "[React] 프론트엔드 프로젝트 팀 모집",
    allMembers: 4,
    members: 2,
    level: "Lv 3 - Lv 4",
    days: ["SAT"],
    expireDay: "2025.06.10",
  },
  {
    icon: "/nubble.png",
    title: "[Node.js] 실전 API 서버 만들기",
    allMembers: 5,
    members: 5,
    level: "Lv 2 - Lv 3",
    days: ["SUN"],
    expireDay: "2025.07.01",
  },
  {
    icon: "/nubble.png",
    title: "[C#] 게임 개발 기초 스터디",
    allMembers: 5,
    members: 3,
    level: "Lv 1 - Lv 2",
    days: ["FRI"],
    expireDay: "2025.06.25",
  },
  {
    icon: "/nubble.png",
    title: "[Java] 스프링 입문부터 실전까지",
    allMembers: 7,
    members: 6,
    level: "Lv 2 - Lv 4",
    days: ["MON", "WED"],
    expireDay: "2025.06.20",
  },
  {
    icon: "/nubble.png",
    title: "[Go] Go로 배우는 백엔드",
    allMembers: 5,
    members: 2,
    level: "Lv 1 - Lv 2",
    days: ["TUE"],
    expireDay: "2025.07.05",
  },
  {
    icon: "/nubble.png",
    title: "[TS] 타입스크립트 실전 패턴",
    allMembers: 5,
    members: 4,
    level: "Lv 3 - Lv 4",
    days: ["THU"],
    expireDay: "2025.07.10",
  },
  {
    icon: "/nubble.png",
    title: "[DB] SQL 성능 개선 스터디",
    allMembers: 6,
    members: 5,
    level: "Lv 3 - Lv 4",
    days: ["WED"],
    expireDay: "2025.06.15",
  },
  {
    icon: "/nubble.png",
    title: "[DevOps] CI/CD 구축 스터디",
    allMembers: 4,
    members: 3,
    level: "Lv 2 - Lv 3",
    days: ["FRI"],
    expireDay: "2025.06.18",
  },
  {
    icon: "/nubble.png",
    title: "[DevOps] CI/CD 구축 스터디",
    allMembers: 4,
    members: 3,
    level: "Lv 2 - Lv 3",
    days: ["FRI"],
    expireDay: "2025.06.18",
  },
  {
    icon: "/nubble.png",
    title: "[DevOps] CI/CD 구축 스터디",
    allMembers: 4,
    members: 3,
    level: "Lv 2 - Lv 3",
    days: ["FRI"],
    expireDay: "2025.06.18",
  },
  {
    icon: "/nubble.png",
    title: "[DevOps] CI/CD 구축 스터디",
    allMembers: 4,
    members: 3,
    level: "Lv 2 - Lv 3",
    days: ["FRI"],
    expireDay: "2025.06.18",
  },
  {
    icon: "/nubble.png",
    title: "[DevOps] CI/CD 구축 스터디",
    allMembers: 4,
    members: 3,
    level: "Lv 2 - Lv 3",
    days: ["FRI"],
    expireDay: "2025.06.18",
  },
];

export default function RecruitingSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(studyList.length / studiesPerPage);
  const startIdx = (currentPage - 1) * studiesPerPage;
  const currentStudies = studyList.slice(startIdx, startIdx + studiesPerPage);

  return (
    <section className="w-full px-4 py-8">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-lg font-bold mb-4">모집중인 스터디 💬</h2>

        <div
          className="grid gap-4 mb-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          }}
        >
          {currentStudies.map((study, i) => (
            <StudyCard
              key={i}
              type="recruiting"
              icon={study.icon}
              title={study.title}
              allMembers={study.allMembers}
              members={study.members}
              level={study.level}
              days={study.days}
              expireDay={study.expireDay}
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
