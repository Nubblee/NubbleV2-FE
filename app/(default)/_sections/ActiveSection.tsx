"use client";

import StudyCard from "@/app/(default)/_component/StudyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { StudyCardProps } from "@/types/study";

const activeStudyList: StudyCardProps[] = [
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
];

// 3개씩 그룹으로 묶기
const groupStudies = (list: typeof activeStudyList, groupSize: number) => {
  const grouped = [];
  for (let i = 0; i < list.length; i += groupSize) {
    grouped.push(list.slice(i, i + groupSize));
  }
  return grouped;
};

export default function ActiveSection() {
  const groupedStudies = groupStudies(activeStudyList, 3);

  return (
    <section className="w-full px-4 py-8">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">진행중인 스터디 🔥</h2>
          <div className="flex gap-2">
            <button className="custom-prev-btn text-gray-middle hover:opacity-80 transition cursor-pointer">
              <CircleChevronLeft className="w-7 h-7" />
            </button>
            <button className="custom-next-btn text-gray-middle hover:opacity-80 transition cursor-pointer">
              <CircleChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1} // ✅ 슬라이드 하나에 3개씩 포함
          navigation={{
            nextEl: ".custom-next-btn",
            prevEl: ".custom-prev-btn",
          }}
          pagination={{ clickable: true }}
          className="custom-swiper"
        >
          {groupedStudies.map((group, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {group.map((study, j) => (
                  <StudyCard
                    studyGroupId={study.studyGroupId}
                    mainLanguage={study.mainLanguage}
                    key={j}
                    status="ACTIVE"
                    icon={study.icon}
                    name={study.name}
                    allMembers={study.allMembers}
                    members={study.members}
                    difficultyLevels={study.difficultyLevels}
                    mainMeetingDays={study.mainMeetingDays}
                    onBookMark={() => {}}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
