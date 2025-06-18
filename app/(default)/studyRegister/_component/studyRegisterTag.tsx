import Input from "@/components/Input/input";
import Select from "@/components/Select";
import TagGroup from "@/components/TagGroup/TagGroup";
import { DayType } from "@/types/day";
import { MeetingType } from "@/types/study";

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
const howOptions = ["온라인", "오프라인", "하이브리드"];
const days = ["월", "화", "수", "목", "금", "토", "일"];

interface StudyRegisterTagProps {
  languages: string[];
  setLanguages: (v: string[]) => void;
  mainLanguage: string;
  setMainLanguage: (v: string) => void;
  difficultyLevels: string[];
  setDifficultyLevels: (v: string[]) => void;
  problemPlatforms: string[];
  setProblemPlatforms: (v: string[]) => void;
  meetingType: string;
  setMeetingType: (v: "" | MeetingType) => void;
  meetingRegion: string;
  setMeetingRegion: (v: string) => void;
  mainMeetingDays: DayType[];
  setMainMeetingDays: (v: DayType[]) => void;
  capacity: number;
  setCapacity: (v: number) => void;
  endDate: string;
  setEndDate: (v: string) => void;
}

const StudyRegisterTag = ({
  languages,
  setLanguages,
  mainLanguage,
  setMainLanguage,
  difficultyLevels,
  setDifficultyLevels,
  problemPlatforms,
  setProblemPlatforms,
  meetingType,
  setMeetingType,
  meetingRegion,
  setMeetingRegion,
  mainMeetingDays,
  setMainMeetingDays,
  capacity,
  setCapacity,
  endDate,
  setEndDate,
}: StudyRegisterTagProps) => {
  return (
    <div className="flex flex-col gap-[40px] justify-center">
      <TagGroup
        label="언어"
        options={languageOptions}
        selectedValues={languages}
        onChange={setLanguages}
      />
      <TagGroup
        label="대표 언어 (1개)"
        options={languageOptions}
        selectedValues={mainLanguage ? [mainLanguage] : []}
        onChange={(arr) => setMainLanguage(arr[0] || "")}
        singleSelect
      />
      <TagGroup
        label="레벨"
        options={levelOptions}
        selectedValues={difficultyLevels || []}
        onChange={setDifficultyLevels}
      />
      <TagGroup
        label="문제 푸는 사이트"
        options={problemOptions}
        selectedValues={problemPlatforms}
        onChange={setProblemPlatforms}
      />
      <div className="flex gap-18">
        <TagGroup
          label="진행방식 (1개)"
          options={howOptions}
          selectedValues={meetingType ? [meetingType] : []}
          onChange={(arr) => setMeetingType((arr[0] || "") as "" | MeetingType)}
          singleSelect
        />
        <div className="w-[30%]">
          <h2 className="mb-2 font-bold">지역</h2>
          <Select
            options={addressOptions}
            value={meetingRegion}
            onChange={setMeetingRegion}
            className="py-1"
          />
        </div>
      </div>
      <TagGroup
        label="스터디 일정"
        options={days}
        selectedValues={mainMeetingDays}
        onChange={(values) => setMainMeetingDays(values as DayType[])}
      />
      <div className="flex w-full gap-10">
        {/* 모집인원 */}
        <div className="flex items-center gap-2">
          <div>
            <label htmlFor="personnel" className="font-bold text-black">
              모집인원
              {/* <span className="text-red">*</span> */}
            </label>
          </div>
          <div className="w-[70px]">
            <Input
              id="personnel"
              type="number"
              value={capacity}
              onChange={(e) => setCapacity(Number(e.target.value))}
              placeholder="0"
              className="py-1 border-gray-light flex-grow"
            />
          </div>
        </div>

        {/* 모집 마감일 */}
        <div className="flex items-center gap-2">
          <div>
            <label htmlFor="deadline" className="font-bold text-black">
              모집 마감일
              {/* <span className="text-red">*</span> */}
            </label>
          </div>
          <div className="w-[140px]">
            <Input
              id="deadline"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="py-1 border-gray-light flex-grow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyRegisterTag;
