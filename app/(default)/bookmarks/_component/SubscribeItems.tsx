"use client";

import React, { useState } from "react";

import StudyCard from "../../_component/StudyCard";
import { StudyCardProps, StudyCardType } from "@/types/study";

interface SubscribeItemsProps {
  studyDatas: StudyCardProps[];
  type?: StudyCardType;
}

const SubscribeItems = ({ studyDatas, type }: SubscribeItemsProps) => {
  const [selectIds, setSelectedIds] = useState<string[]>([]);

  const handleBookMark = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="my-5 lg:mx-32">
      <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(270px,_1fr))] gap-6 justify-items-center">
        {studyDatas.map(
          (studyData) =>
            studyData.status === type && (
              <StudyCard
                key={studyData.studyGroupId}
                {...studyData}
                isBookMark={selectIds.includes(studyData.studyGroupId)}
                onBookMark={() => handleBookMark(studyData.studyGroupId)}
              />
            )
        )}
      </div>
    </div>
  );
};

export default SubscribeItems;
