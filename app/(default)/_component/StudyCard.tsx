//TODO: 페이지네이션 merge되면 북마크 아이콘으로 교체

import React from "react";
import Card from "./Card";
import ShowDay from "./ShowDay";
import Image from "next/image";

type StudyCardType = "recruiting" | "active";

interface StudyCardProps {
  type?: StudyCardType;
  isbookmark?: boolean;
  icon: string;
  title: string;
  allMembers: number;
  members: number;
  level: string;
  days: string[];
  expireDay?: string;
}

const StudyCard = ({
  type = "recruiting",
  isbookmark,
  icon,
  title,
  allMembers,
  members,
  level,
  days,
  expireDay,
}: StudyCardProps) => {
  return (
    <Card type="gray">
      <div className="w-[350px] h-[164px]">
        <div
          className={`flex justify-end px-[14px] ${
            isbookmark ? "bg-gray-dark" : ""
          }`}
        >
          북마크아이콘
        </div>
        <div className="flex gap-6 px-[26px]">
          <div className="flex flex-col gap-[5px]">
            <Image src={icon} alt={icon} width={60} height={60} />
            <div className="flex gap-[3px] w-[70px] text-xs font-semibold">
              파티원
              <span>
                <span className="text-blue">{members}</span>/{allMembers}
              </span>
            </div>
          </div>
          <div className="flex flex-col w-[170px] gap-[6px]">
            <div className="font-bold text-lg line-clamp-2">{title}</div>
            <div className="font-semibold text-sm">
              코딩테스트 레벨 <span className="text-blue">{level}</span>
            </div>
            <ShowDay days={days} />
          </div>
        </div>
        <div
          className={`flex justify-end h-[14px] mt-[12px] px-[14px] text-xs font-semibold text-[#a2a2a2]`}
        >
          {type === "recruiting" ? `마감일 ${expireDay}` : ""}
        </div>
      </div>
    </Card>
  );
};

export default StudyCard;
