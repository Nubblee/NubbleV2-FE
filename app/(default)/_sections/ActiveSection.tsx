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
];

export default function ActiveSection() {
  return (
    // HomePage의 '내 스터디' 섹션과 동일한 컨테이너
    <section className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">진행중인 스터디 🔥</h2>
        <div className="flex gap-2 mr-15">
          <button className="custom-prev-btn text-gray-middle hover:opacity-80 transition cursor-pointer">
            <CircleChevronLeft className="w-7 h-7" />
          </button>
          <button className="custom-next-btn text-gray-middle hover:opacity-80 transition cursor-pointer">
            <CircleChevronRight className="w-7 h-7" />
          </button>
        </div>
      </div>

      <div className="ml-6">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1} // 모바일 1개
          breakpoints={{
            // md(>=768px) 이상 3개
            768: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: ".custom-prev-btn",
            nextEl: ".custom-next-btn",
          }}
          pagination={{ clickable: true }}
          className="custom-swiper"
        >
          {activeStudyList.map((study) => (
            <SwiperSlide key={study.studyGroupId}>
              <StudyCard
                {...study}
                className="cursor-pointer"
                onClick={() => {
                  /* 상세페이지 이동 */
                }}
                onBookMark={() => {}}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
