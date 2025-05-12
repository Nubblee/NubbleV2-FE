"use client";

import { usePathname } from "next/navigation";

import Tab from "../../_component/Tab";
import SubscribeItems from "../_component/SubscribeItems";
import BookMarkBanner from "../_component/BookMarkBanner";
import { StudyCardProps, StudyCardType } from "@/types/study";

const studyCardData: StudyCardProps[] = [
  {
    id: "1",
    type: "recruiting",
    icon: "/javascript.png",
    title: "자바스크립트 왕초보 스터디",
    allMembers: 8,
    members: 4,
    level: "Lv1~Lv2",
    days: ["MON", "WED", "FRI"],
    expireDay: "2025-06-01",
  },
  {
    id: "2",
    type: "active",
    icon: "/javascript.png",
    title: "모던 JS 완전 정복",
    allMembers: 6,
    members: 6,
    level: "Lv1~Lv2",
    days: ["TUE", "THU"],
  },
  {
    id: "3",
    type: "recruiting",
    icon: "/javascript.png",
    title: "JS 알고리즘 스터디",
    allMembers: 4,
    members: 1,
    level: "Lv1~Lv2",
    days: ["SAT", "SUN"],
    expireDay: "2025-05-20",
  },
  {
    id: "4",
    type: "active",
    icon: "/javascript.png",
    title: "프론트엔드 면접 대비",
    allMembers: 3,
    members: 3,
    level: "Lv1~Lv2",
    days: ["WED", "SUN"],
  },
  {
    id: "5",
    type: "recruiting",
    icon: "/javascript.png",
    title: "자바스크립트 입문과정",
    allMembers: 5,
    members: 4,
    level: "Lv1~Lv2",
    days: ["MON", "TUE"],
    expireDay: "2025-05-25",
  },
  {
    id: "6",
    type: "active",
    icon: "/javascript.png",
    title: "React로 배우는 JS",
    allMembers: 7,
    members: 7,
    level: "Lv1~Lv2",
    days: ["FRI", "SAT"],
  },
  {
    id: "7",
    type: "recruiting",
    icon: "/javascript.png",
    title: "코딩 테스트 준비반",
    allMembers: 6,
    members: 2,
    level: "Lv1~Lv2",
    days: ["MON", "THU"],
    expireDay: "2025-06-05",
  },
  {
    id: "8",
    type: "active",
    icon: "/javascript.png",
    title: "Node.js 백엔드 스터디",
    allMembers: 5,
    members: 5,
    level: "Lv1~Lv2",
    days: ["TUE", "SAT"],
  },
  {
    id: "9",
    type: "recruiting",
    icon: "/javascript.png",
    title: "웹 개발 기초반",
    allMembers: 4,
    members: 1,
    level: "Lv1~Lv2",
    days: ["WED", "FRI"],
    expireDay: "2025-06-10",
  },
  {
    id: "10",
    type: "active",
    icon: "/javascript.png",
    title: "JS 프로젝트 실습반",
    allMembers: 5,
    members: 5,
    level: "Lv1~Lv2",
    days: ["SAT", "SUN"],
  },
];
const tabs = [
  {
    name: "진행 중인 스터디",
    link: "/bookmarks/active",
  },
  {
    name: "모집 중인 스터디",
    link: "/bookmarks/recruiting",
  },
];

const BookMarkSection = () => {
  const pathname = usePathname();
  const type = pathname.split("/").pop();
  return (
    <>
      <BookMarkBanner />
      <Tab tabItems={tabs} className="m-auto" />
      <SubscribeItems studyDatas={studyCardData} type={type as StudyCardType} />
    </>
  );
};

export default BookMarkSection;
