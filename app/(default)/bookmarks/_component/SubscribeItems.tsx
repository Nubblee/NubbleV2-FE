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
    <div className="my-5">
      <div className="py-10 px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {studyDatas.map(
          (studyData) =>
            studyData.type === type && (
              <StudyCard
                key={studyData.id}
                {...studyData}
                isBookMark={selectIds.includes(studyData.id)}
                onBookMark={() => handleBookMark(studyData.id)}
              />
            )
        )}
      </div>
    </div>
  );
};

export default SubscribeItems;
