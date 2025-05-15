import Card from "@/app/(default)/_component/Card";
import Checkbox, { CheckboxProps } from "@/components/Checkbox";
import ProfileImage from "@/components/ProfileImage";

interface ApproveCardProps extends CheckboxProps {
  requestId: number;
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
  checked,
  onChange,
}: ApproveCardProps) => {
  return (
    <Card type="green" className="px-6 py-4 w-full">
      <div className="flex">
        <div>
          <Checkbox checked={checked} onChange={onChange} />
        </div>
        <div className="flex flex-col w-1/4 items-center justify-center gap-4">
          <ProfileImage size={120} src={image} alt={name} />
          <span className="text-lg font-semibold">{name}</span>
        </div>
        <div className="flex w-full flex-col gap-2 px-3">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-green-dark">
              요청메시지
            </span>
            <span className="text-green-dark">{requestedAt}</span>
          </div>
          <span className="whitespace-pre-wrap my-auto min-h-[174px]">
            {requestMessage}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ApproveCard;
