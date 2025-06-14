"use client";

import StudyCard from "@/app/(default)/_component/StudyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper/modules";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { StudyCardProps } from "@/types/study";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

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
  {
    studyGroupId: "15",
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
    studyGroupId: "45",
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
    <section className="w-full px-4 py-8">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">진행중인 스터디 🔥</h2>
          <div className="flex gap-2 mr-8">
            <button className="custom-prev-btn text-gray-middle hover:opacity-80 transition cursor-pointer">
              <CircleChevronLeft className="w-7 h-7" />
            </button>
            <button className="custom-next-btn text-gray-middle hover:opacity-80 transition cursor-pointer">
              <CircleChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Grid, Navigation, Pagination]}
          spaceBetween={16}
          slidesOffsetBefore={16}
          slidesPerView={2}
          slidesPerGroup={2}
          grid={{ rows: 1, fill: "row" }}
          breakpoints={{
            // 모바일(0px~610px): offset 16px
            0: {
              slidesOffsetBefore: 110,
              slidesPerView: 1,
              slidesPerGroup: 1,
              grid: { rows: 1, fill: "row" },
            },
            // 타블릿(611px~903px): offset 34px
            611: {
              slidesOffsetBefore: 34,
              slidesPerView: 2,
              slidesPerGroup: 2,
              grid: { rows: 1, fill: "row" },
            },
            // 데스크탑(904px 이상): offset 34px, 3개씩
            904: {
              slidesOffsetBefore: 34,
              slidesPerView: 3,
              slidesPerGroup: 3,
              grid: { rows: 1, fill: "row" },
            },
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
                onClick={() => {}}
                onBookMark={() => {}}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
