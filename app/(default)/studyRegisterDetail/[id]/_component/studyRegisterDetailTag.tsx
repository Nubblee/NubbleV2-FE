import ShowDay from "@/components/ShowDay";
import TagGroup from "@/components/TagGroup/TagGroup";
import { StudyRegisterDetailTagProps } from "@/types/study";

const StudyRegisterDetailTag = ({
  languages,
  levels,
  platforms,
  meetingType,
  region,
  days,
  capacity,
  endDate,
}: StudyRegisterDetailTagProps) => {
  return (
    <div className="flex flex-col gap-[20px] justify-center">
      <TagGroup
        sideLabel="언어"
        options={languages}
        sideLabelSize="small"
        selectedValues={languages}
        readonly
      />
      <TagGroup
        sideLabel="레벨"
        options={levels}
        sideLabelSize="small"
        selectedValues={levels}
        readonly
      />
      <TagGroup
        sideLabel="문제 푸는 사이트"
        options={platforms}
        sideLabelSize="small"
        selectedValues={platforms}
        readonly
      />
      <div className="flex gap-18">
        <TagGroup
          sideLabel="진행방식"
          options={[meetingType]}
          sideLabelSize="small"
          selectedValues={[meetingType]}
          readonly
        />
        <div className="w-[32%]">
          <TagGroup
            sideLabel="지역"
            options={[region]}
            sideLabelSize="small"
            selectedValues={[region]}
            readonly
          />
        </div>
      </div>
      <div className="flex gap-4 mb-[14px]">
        <span className="font-bold text-black">스터디 요일</span>
        <ShowDay type="secondary" days={days} />
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
            <span>{capacity}</span>
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
            <span>{endDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyRegisterDetailTag;
