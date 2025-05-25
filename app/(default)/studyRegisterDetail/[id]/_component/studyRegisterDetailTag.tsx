import ShowDay from "@/components/ShowDay";
import TagGroup from "@/components/TagGroup/TagGroup";

const languageOptions = ["Python", "Javascript"];

const problemOptions = ["프로그래머스", "백준"];
const levelOptions = ["LV1", "LV2"];
const howOptions = ["온라인", "오프라인"];
const StudyRegisterDetailTag = () => {
  return (
    <div className="flex flex-col gap-[20px] justify-center">
      <TagGroup
        sideLabel="언어"
        options={languageOptions}
        sideLabelSize="small"
        readonly
      />
      <TagGroup
        sideLabel="레벨"
        options={levelOptions}
        sideLabelSize="small"
        readonly
      />
      <TagGroup
        sideLabel="문제 푸는 사이트"
        options={problemOptions}
        sideLabelSize="small"
        readonly
      />
      <div className="flex gap-18">
        <TagGroup
          sideLabel="진행방식"
          options={howOptions}
          sideLabelSize="small"
          readonly
        />
        <div className="w-[32%]">
          <TagGroup
            sideLabel="지역"
            options={["서울"]}
            sideLabelSize="small"
            readonly
          />
        </div>
      </div>
      <div className="flex gap-4 mb-[14px]">
        <span className="font-bold text-black">스터디 요일</span>
        <ShowDay type="secondary" days={["MON"]} />
      </div>
      <div className="flex w-full gap-10">
        {/* 모집인원 */}
        <div className="flex items-center gap-2">
          <div>
            <label htmlFor="personnel" className="font-bold text-black">
              모집인원
            </label>
          </div>
          <div className="w-[70px]">
            <span>4</span>
          </div>
        </div>

        {/* 모집 마감일 */}
        <div className="flex items-center gap-2">
          <div>
            <label htmlFor="deadline" className="font-bold text-black">
              모집 마감일
            </label>
          </div>
          <div className="w-[140px]">
            <span>2025년 04월 10일</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyRegisterDetailTag;
