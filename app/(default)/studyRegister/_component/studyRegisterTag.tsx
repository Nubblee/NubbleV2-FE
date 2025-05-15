import Input from "@/components/Input/input";
import Select from "@/components/Select";
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

const addressOptions = [
  { label: "서울특별시", value: "seoul" },
  { label: "부산광역시", value: "busan" },
  { label: "대구광역시", value: "daegu" },
  { label: "인천광역시", value: "incheon" },
  { label: "광주광역시", value: "gwangju" },
  { label: "대전광역시", value: "daejeon" },
  { label: "울산광역시", value: "ulsan" },
  { label: "세종특별자치시", value: "sejong" },
  { label: "경기도", value: "gyeonggi" },
  { label: "강원도", value: "gangwon" },
  { label: "충청북도", value: "chungbuk" },
  { label: "충청남도", value: "chungnam" },
  { label: "전라북도", value: "jeonbuk" },
  { label: "전라남도", value: "jeonnam" },
  { label: "경상북도", value: "gyeongbuk" },
  { label: "경상남도", value: "gyeongnam" },
  { label: "제주특별자치도", value: "jeju" },
];

const problemOptions = ["프로그래머스", "리트코드", "백준", "codetree"];
const levelOptions = ["LV0", "LV1", "LV2", "LV3", "LV4"];
const howOptions = ["온라인", "오프라인"];
const days = ["월", "화", "수", "목", "금", "토", "일"];
const StudyRegisterTag = () => {
  return (
    <div className="flex flex-col gap-[40px] justify-center">
      <TagGroup label="언어" options={languageOptions} />
      <TagGroup label="레벨" options={levelOptions} />
      <TagGroup label="문제 푸는 사이트" options={problemOptions} />
      <div className="flex gap-18">
        <TagGroup label="진행방식" options={howOptions} />
        <div className="w-[30%]">
          <h2 className="mb-2 font-bold">지역</h2>
          <Select options={addressOptions} className="py-1" />
        </div>
      </div>
      <TagGroup label="스터디 일정" options={days} />
      <div className="flex w-full gap-10">
        {/* 모집인원 */}
        <div className="flex items-center gap-2">
          <div>
            <label htmlFor="personnel" className="font-bold text-black">
              모집인원 <span className="text-red">*</span>
            </label>
          </div>
          <div className="w-[70px]">
            <Input
              id="personnel"
              placeholder="0"
              className="py-1 border-gray-light flex-grow"
            />
          </div>
        </div>

        {/* 모집 마감일 */}
        <div className="flex items-center gap-2">
          <div>
            <label htmlFor="deadline" className="font-bold text-black">
              모집 마감일 <span className="text-red">*</span>
            </label>
          </div>
          <div className="w-[140px]">
            <Input
              id="deadline"
              type="date"
              className="py-1 border-gray-light flex-grow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyRegisterTag;
