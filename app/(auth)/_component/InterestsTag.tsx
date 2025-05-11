import Button from "@/components/Button";
import TagGroup from "@/components/TagGroup/TagGroup";

const languageOptions = [
  "Java",
  "Python",
  "Javascript",
  "C",
  "C++",
  "Kotlin",
  "Rust",
  "Swift",
];
const problemOptions = ["프로그래머스", "리트코드", "백준", "codetree"];
const levelOptions = ["LV0", "LV1", "LV2", "LV3", "LV4"];

const InterestsTag = () => {
  return (
    <div className="flex flex-col gap-[78px]">
      <TagGroup label="언어" options={languageOptions} />
      <TagGroup label="풀이 사이트" options={problemOptions} />
      <TagGroup label="레벨" options={levelOptions} />
      <Button className="w-[50%] m-auto items-center">확인</Button>
    </div>
  );
};

export default InterestsTag;
