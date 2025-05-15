"use client";

import Tab from "@/app/(default)/_component/Tab";
import { TabItems } from "@/types/tab";
import MemberCard from "../../_component/MemberCard";
import React from "react";
import { useParams } from "next/navigation";
import ApproveList from "./ApproveList";

const generatedTabs = (title: string): TabItems[] => [
  {
    name: "스터디원 관리",
    link: `/study/${title}/management/members`,
  },
  {
    name: "승인요청 관리",
    link: `/study/${title}/management/approve`,
  },
];

const MemberData = [
  {
    name: "명수",
    written: 32,
    reviews: 18,
    recently: "2025.01.19",
  },
  {
    name: "명수",
    written: 32,
    reviews: 18,
    recently: "2025.01.19",
  },
  {
    name: "명수",
    written: 32,
    reviews: 18,
    recently: "2025.01.19",
  },
  {
    name: "명수",
    written: 32,
    reviews: 18,
    recently: "2025.01.19",
  },
  {
    name: "명수",
    written: 32,
    reviews: 18,
    recently: "2025.01.19",
  },
  {
    name: "명수",
    written: 32,
    reviews: 18,
    recently: "2025.01.19",
  },
  {
    name: "명수",
    written: 32,
    reviews: 18,
    recently: "2025.01.19",
  },
  {
    name: "명수",
    written: 32,
    reviews: 18,
    recently: "2025.01.19",
  },
  {
    name: "명수",
    written: 32,
    reviews: 18,
    recently: "2025.01.19",
  },
];

const ClickTabSection = () => {
  const params = useParams();
  const studyTitle = params.title as string;

  return (
    <div className="flex flex-col gap-6">
      <Tab tabItems={generatedTabs(studyTitle)} />
      <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 place-items-center">
        {params.tab === "members" ? (
          MemberData.map((member, idx) => <MemberCard key={idx} {...member} />)
        ) : (
          <ApproveList />
        )}
      </div>
    </div>
  );
};

export default ClickTabSection;
