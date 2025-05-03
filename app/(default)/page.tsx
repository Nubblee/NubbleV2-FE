"use client";
import TagGroup from "@/components/TagGroup/TagGroup";

export default function Home() {
  return (
    <div className="p-4">
      <TagGroup
        label="코딩레벨"
        labelClassName="text-lg text-green-dark"
        options={["Lv 0", "Lv 1", "Lv 2", "Lv 3"]}
        defaultSelected={["Lv 1"]}
        readonly
      />
    </div>
  );
}
