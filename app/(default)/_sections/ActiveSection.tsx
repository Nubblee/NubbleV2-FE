"use client";

import StudyCard from "@/app/(default)/_component/StudyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const activeStudyList = [
  {
    icon: "/nubble.png",
    title: "[JS] 알고리즘 뿌시기 스터디원 찾습니다!",
    allMembers: 5,
    members: 3,
    level: "Lv 1 - Lv 2",
    days: ["MON"],
  },
  {
    icon: "/nubble.png",
    title: "[JS] 알고리즘 뿌시기 스터디원 찾습니다!",
    allMembers: 5,
    members: 3,
    level: "Lv 1 - Lv 2",
    days: ["MON"],
  },
  {
    icon: "/nubble.png",
    title: "[JS] 알고리즘 뿌시기 스터디원 찾습니다!",
    allMembers: 5,
    members: 3,
    level: "Lv 1 - Lv 2",
    days: ["MON"],
  },
  {
    icon: "/nubble.png",
    title: "[JS] 알고리즘 뿌시기 스터디원 찾습니다!",
    allMembers: 5,
    members: 3,
    level: "Lv 1 - Lv 2",
    days: ["MON"],
  },
  {
    icon: "/nubble.png",
    title: "[JS] 알고리즘 뿌시기 스터디원 찾습니다!",
    allMembers: 5,
    members: 3,
    level: "Lv 1 - Lv 2",
    days: ["MON"],
  },
  {
    icon: "/nubble.png",
    title: "[JS] 알고리즘 뿌시기 스터디원 찾습니다!",
    allMembers: 5,
    members: 3,
    level: "Lv 1 - Lv 2",
    days: ["MON"],
  },
  {
    icon: "/nubble.png",
    title: "[JS] 알고리즘 뿌시기 스터디원 찾습니다!",
    allMembers: 5,
    members: 3,
    level: "Lv 1 - Lv 2",
    days: ["MON"],
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
                    key={j}
                    type="active"
                    icon={study.icon}
                    title={study.title}
                    allMembers={study.allMembers}
                    members={study.members}
                    level={study.level}
                    days={study.days}
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
