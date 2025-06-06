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
      <Card type="green" roundSize="lg" className="w-full md:min-h-[300px]">
        <textarea
          className="w-full border-none h-full resize-none focus:outline-green-middle rounded-xl p-4 caret-green-middle placeholder-gray-placeholder"
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
