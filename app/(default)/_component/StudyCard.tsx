import React from "react";
import Card from "./Card";
import ShowDay from "./ShowDay";
import Image from "next/image";
import BookMarkButton, { BookMarkButtonProps } from "./BookMarkButton";

type StudyCardType = "recruiting" | "active";

interface StudyCardProps {
  type?: StudyCardType;
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
  icon,
  title,
  allMembers,
  members,
  level,
  days,
  expireDay,
  isBookMark = false,
  onBookMark,
}: StudyCardProps & BookMarkButtonProps) => {
  return (
    <Card type="gray" isShadow>
      <div className="w-[350px] h-[164px]">
        <div className={`flex justify-end px-[14px] mt-[8px]`}>
          <BookMarkButton isBookMark={isBookMark} onBookMark={onBookMark} />
        </div>
        <div className="flex gap-6 px-[26px]">
          <div className="flex flex-col gap-[13px]">
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
