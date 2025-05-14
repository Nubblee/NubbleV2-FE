import React from "react";
import StudyInfo from "../../_component/StudyHeader";
import { DayType } from "@/types/day";
import ClickTabSection from "../_component/ClickTabSection";

const studyData = {
  id: "1",
  type: "recruiting",
  icon: "/nubble.png",
  language: "javascript",
  title: "자바스크립트 왕초보 스터디",
  levels: ["Lv. 1", "Lv. 2"],
  days: ["MON", "WED", "FRI"] as DayType[],
};

const Page = () => {
  return (
    <div className="mt-5 flex flex-col px-10">
      <StudyInfo {...studyData} />
      <div className="my-12">
        <ClickTabSection />
      </div>
    </div>
  );
};

export default Page;
