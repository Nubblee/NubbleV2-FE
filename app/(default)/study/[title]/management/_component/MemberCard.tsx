import Card from "@/app/(default)/_component/Card";
import ProfileImage from "@/components/ProfileImage";

interface MemberCardProps {
  name: string;
  image?: string;
  written: number;
  reviews: number;
  recently?: string;
}

const MemberCard = ({
  name,
  image,
  written,
  reviews,
  recently,
}: MemberCardProps) => {
  return (
    <Card roundSize="lg" className="p-4 cursor-pointer">
      <div className="flex flex-col justify-center items-center">
        <ProfileImage
          className="mt-3"
          alt={name}
          src={image || "/basicProfile.png"}
          size={100}
        />
        <span className="font-semibold text-xl mt-3">{name}</span>
        <div className="flex gap-2 text-gray-dark my-2">
          <span>작성 글 {written}</span> | <span>작성 리뷰 {reviews}</span>
        </div>
        <span className="w-full flex justify-end text-gray-middle text-sm mt-2">
          {recently}
        </span>
      </div>
    </Card>
  );
};

export default MemberCard;
