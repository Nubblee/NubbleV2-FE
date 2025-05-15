import ShowDay from "@/app/(default)/_component/ShowDay";
import Button from "@/components/Button";
import ProfileImage from "@/components/ProfileImage";
import TagGroup from "@/components/TagGroup/TagGroup";
import { DayType } from "@/types/day";
import Image from "next/image";

type StudyHeaderType = "study" | "management";

interface StudyInfoProps {
  variant?: StudyHeaderType;
  icon: string;
  language: string;
  levels: string[];
  title: string;
  days: DayType[];
  members?: membersProps[];
  onUpdate?: () => void;
  onRecruit?: () => void;
}

interface membersProps {
  name: string;
  image: string;
}

const StudyInfo = ({
  variant = "study",
  icon,
  language,
  levels,
  title,
  days,
  members,
  onUpdate,
  onRecruit,
}: StudyInfoProps) => {
  return (
    <div className="w-full flex gap-13">
      <Image
        className="hidden sm:block rounded-lg"
        src={icon}
        alt={language}
        width={200}
        height={200}
      />
      <div className="flex flex-col gap-4 w-full">
        <TagGroup options={levels} readonly />
        <span className="font-bold text-3xl line-clamp-2 break-words">
          {title}
        </span>
        <div className="flex gap-3 items-center">
          <span className="font-base text-base">진행요일</span>
          <ShowDay days={days} />
        </div>
        {variant === "study" ? (
          <div className="flex gap-3 items-center">
            <span className="font-base text-base">스터디원</span>
            {members?.map((member) => (
              <ProfileImage
                key={member.image}
                src={member.image}
                alt={member.name}
              />
            ))}
          </div>
        ) : (
          <div className="flex gap-3">
            <Button variant="outlined" onClick={onUpdate}>
              정보 수정
            </Button>
            <Button variant="outlined" onClick={onRecruit}>
              모집하기
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyInfo;
