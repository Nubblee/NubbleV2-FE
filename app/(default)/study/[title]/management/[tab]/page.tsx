import React from "react";
import StudyInfo from "../../_component/StudyHeader";
import { DayType } from "@/types/day";
import ClickTabSection from "../_component/ClickTabSection";

const studyData = {
  id: "1",
  type: "recruiting",
  icon: "/nubble.png",
  language: "javascript",
  title:
    "[JS] 알고리즘 우리가 짱먹는다 ㅋㅋ 우리가 알고왕이지롱~ ㅋㅋ 우리가 알고왕이지롱~  ",
  levels: ["Lv. 1", "Lv. 2"],
  days: ["MON", "WED", "FRI"] as DayType[],
};

const Page = () => {
  return (
    <div className="mt-5 flex flex-col py-10 px-14">
      <StudyInfo {...studyData} variant="management" />
      <div className="my-12">
        <ClickTabSection />
      </div>
    </div>
  );
};

export default Page;
