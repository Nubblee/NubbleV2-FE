"use client";
import Select from "@/components/Select";

const options = [
  { label: "옵션 1", value: "1" },
  { label: "옵션 2", value: "2" },
  { label: "옵션 3", value: "3" },
];

export default function Home() {
  return (
    <div className="w-[300px]">
      <Select options={options} variant="underline" />
    </div>
  );
}
