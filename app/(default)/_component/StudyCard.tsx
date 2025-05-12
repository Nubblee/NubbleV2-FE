import React from "react";
import Card from "./Card";
import ShowDay from "./ShowDay";
import Image from "next/image";
import BookMarkButton, { BookMarkButtonProps } from "./BookMarkButton";
import { StudyCardProps } from "@/types/study";

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
  console.log(icon);
  return (
    <Card type="gray" className="bg-white" isShadow>
      <div className={`max-w-[310px] max-h-[164px] cursor-pointer`}>
        <div className={`flex justify-end px-[14px] mt-[5px] z-10`}>
          <BookMarkButton isBookMark={isBookMark} onBookMark={onBookMark} />
        </div>
        <div className="flex gap-4 px-[26px]">
          <div className="flex flex-col gap-[12px] items-center">
            <Image
              className="rounded-lg"
              src={icon}
              alt={icon}
              width={60}
              height={60}
            />
            <div className="flex gap-[3px] text-xs font-semibold">
              파티원
              <span>
                <span className="text-blue">{members}</span>/{allMembers}
              </span>
            </div>
          </div>
          <div className="flex flex-col w-[170px] gap-[6px]">
            <div className="flex font-bold text-lg line-clamp-2 min-h-[50px]">
              {title}
            </div>
            <div className="font-semibold text-sm">
              코딩테스트 레벨 <span className="text-blue">{level}</span>
            </div>
            <ShowDay days={days} />
          </div>
        </div>
        <div
          className={`flex justify-end h-[14px] mt-[12px] px-[14px] text-xs text-[#a2a2a2]`}
        >
          {type === "recruiting" ? `마감일 ${expireDay}` : ""}
        </div>
      </div>
    </Card>
  );
};

export default StudyCard;
