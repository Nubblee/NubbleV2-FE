"use client";

import Tab from "@/app/(default)/_component/Tab";
import { TabItems } from "@/types/tab";
import { useParams } from "next/navigation";
import ApproveList from "./ApproveList";
import MemberList from "./MemberList";

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

const ClickTabSection = () => {
  const params = useParams();
  const studyTitle = params.title as string;

  return (
    <div className="flex flex-col gap-6">
      <Tab tabItems={generatedTabs(studyTitle)} />
      <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 place-items-center">
        {params.tab === "members" ? <MemberList /> : <ApproveList />}
      </div>
    </div>
  );
};

export default ClickTabSection;
