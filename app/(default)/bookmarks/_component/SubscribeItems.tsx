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
    <div className="my-5 mx-auto  px-4">
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
