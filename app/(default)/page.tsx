"use client";

import Select from "@/components/Select";

export default function Home() {
  const options = [
    { label: "옵션 1", value: "1" },
    { label: "옵션 2", value: "2" },
    { label: "옵션 3", value: "3" },
  ];

  return (
    <div className="flex flex-col gap-2 w-[200px]">
      <span className="text-lg font-semibold">너블 홈</span>
      <Select
        options={options}
        placeholder="선택"
        onChange={(value) => console.log("선택된 값:", value)}
      />
    </div>
  );
}
