import Card from "@/app/(default)/_component/Card";
import Button from "@/components/Button";
import ProfileImage from "@/components/ProfileImage";

interface ApproveCardProps {
  name: string;
  image: string;
  requestedAt: string;
  requestMessage: string;
}

const ApproveCard = ({
  name,
  image,
  requestedAt,
  requestMessage,
}: ApproveCardProps) => {
  return (
    <Card type="green" className=" p-6 w-full">
      <div className="flex items-center gap-6">
        <div className="flex flex-col w-1/4 items-center justify-center gap-6">
          <ProfileImage size={120} src={image} alt={name} />
          <span className="text-lg font-semibold">{name}</span>
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-green-dark">
              요청메시지
            </span>
            <span className="text-green-dark">{requestedAt}</span>
          </div>
          <span className="whitespace-pre-wrap">{requestMessage}</span>
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <Button>승인</Button>
        <Button variant="outlined">거부</Button>
      </div>
    </Card>
  );
};

export default ApproveCard;
