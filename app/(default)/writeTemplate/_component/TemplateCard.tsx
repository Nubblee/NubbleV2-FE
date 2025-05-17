import Card from "../../_component/Card";

interface TemplateCardProps {
  title: string;
  content: string;
  placeholder?: string;
  onContent: (content: string) => void;
}
export const TemplateCard = ({
  title,
  content,
  placeholder,
  onContent,
}: TemplateCardProps) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <span className="text-2xl font-semibold">{title}</span>
      <Card type="gray" roundSize="lg" className="w-full md:min-h-[280px]">
        <textarea
          className="w-full h-full border-none resize-none focus:outline-green-middle  focus:rounded-xl p-4"
          value={content}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            onContent(e.target.value)
          }
          placeholder={placeholder}
        />
      </Card>
    </div>
  );
};

export default TemplateCard;
