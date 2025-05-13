import ShowDay from "@/app/(default)/_component/ShowDay";
import ProfileImage from "@/components/ProfileImage";
import TagGroup from "@/components/TagGroup/TagGroup";
import Image from "next/image";

interface StudyInfoProps {
  icon: string;
  language: string;
  levels: string[];
  title: string;
  days: string[];
  members?: membersProps[];
}

interface membersProps {
  name: string;
  image: string;
}

const StudyInfo = ({
  icon,
  language,
  levels,
  title,
  days,
  members,
}: StudyInfoProps) => {
  return (
    <div className="w-full flex gap-13">
      <Image
        className="rounded-lg"
        src={icon}
        alt={language}
        width={220}
        height={220}
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
        {members && (
          <div className="flex gap-3 items-center">
            <span className="font-base text-base">스터디원</span>
            {members.map((member) => (
              <ProfileImage
                key={member.image}
                src={member.image}
                alt={member.name}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyInfo;
