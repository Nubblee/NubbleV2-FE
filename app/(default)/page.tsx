import Input from "@/components/Input/input";

export default function Home() {
  return (
    <div className="text-2xl font-bold w-[300px] bg-blue ">
      너블 홈
      <Input variant="borderless" validMessage="성공입니다" />
    </div>
  );
}
