import Select from "@/components/Select";

export default function Home() {
  return (
    <div className="text-2xl font-bold underline w-[300px]">
      너블 홈
      <Select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Select>
    </div>
  );
}
