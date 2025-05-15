import React from "react";
import Card from "./Card";
import ShowDay from "./ShowDay";
import Image from "next/image";
import BookMarkButton, { BookMarkButtonProps } from "./BookMarkButton";
import { StudyCardProps } from "@/types/study";
import formatDifficulty from "@/utils/formatDifficulty";

const StudyCard = ({
  status = "RECRUITING",
  icon,
  name,
  allMembers,
  members,
  difficultyLevels,
  mainMeetingDays,
  expireDay,
  isBookMark = false,
  onBookMark,
  className,
}: StudyCardProps & BookMarkButtonProps) => {
  return (
    <Card type="gray" className="bg-white" isShadow>
      <div className={`w-full h-full cursor-pointer ${className}`}>
        <div className={`flex justify-end px-[10px] mt-[10px] z-10`}>
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
            <div className="flex gap-[3px] w-full text-xs font-semibold items-center whitespace-nowrap">
              파티원
              <span>
                <span className="text-blue">{members}</span>/{allMembers}
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full gap-[6px]">
            <div className="flex font-bold text-lg w-[170px] h-[54px]">
              <span className="line-clamp-2">{name}</span>
            </div>
            <div className="flex gap-1 font-semibold text-sm whitespace-nowrap">
              코딩테스트 레벨{" "}
              <span className="text-blue">
                {formatDifficulty(difficultyLevels)}
              </span>
            </div>
            <ShowDay days={mainMeetingDays} />
          </div>
        </div>
        <div
          className={`flex justify-end my-[10px] px-[14px] text-xs text-[#a2a2a2]`}
        >
          {status === "RECRUITING" ? `마감일 ${expireDay}` : ""}
        </div>
      </div>
    </Card>
  );
};

export default StudyCard;
