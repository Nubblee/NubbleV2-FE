import Card from "@/app/(default)/_component/Card";
import ProfileImage from "@/components/ProfileImage";

interface MemberCardProps {
  name: string;
  image: string;
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
    <Card
      roundSize="lg"
      className="p-4 items-center justify-center flex flex-col"
    >
      <ProfileImage alt={name} src={image} size={130} />
      <span className="font-semibold text-xl mt-3">{name}</span>
      <div className="flex gap-2 text-gray-dark my-2">
        <span>작성 글 {written}</span> | <span>작성 리뷰 {reviews}</span>
      </div>
      <span className="w-full flex justify-end text-gray-middle text-sm mt-1">
        {recently}
      </span>
    </Card>
  );
};

export default MemberCard;
