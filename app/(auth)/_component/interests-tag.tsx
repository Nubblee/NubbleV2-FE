"use client";
import Button from "@/components/Button";
import TagGroup from "@/components/TagGroup/TagGroup";
import { languageOptions, levelOptions, problemOptions } from "@/config/study";
import { useInterestTags } from "@/hooks/useInterestTags";

const InterestsTag = () => {
  const {
    languages,
    platforms,
    levels,
    handleLanguages,
    handlePlatforms,
    handleLevels,
    handleInterestTags,
    handleSkipInterestTags,
  } = useInterestTags();

  return (
    <div className="flex flex-col gap-[78px] max-w-screen-md items-center">
      <div className="flex flex-col gap-[60px] px-4">
        <TagGroup
          label="언어"
          options={languageOptions}
          selectedValues={languages}
          onChange={handleLanguages}
        />
        <TagGroup
          label="풀이 사이트"
          options={Object.values(problemOptions)}
          selectedValues={platforms}
          onChange={handlePlatforms}
        />
        <TagGroup
          label="레벨"
          options={levelOptions}
          selectedValues={levels}
          onChange={handleLevels}
        />
      </div>
      <div className="flex gap-4">
        <Button onClick={handleInterestTags} className="items-center py-3">
          입력 완료
        </Button>
        <Button
          variant="outlined"
          onClick={handleSkipInterestTags}
          className="items-center py-3"
        >
          건너뛰기
        </Button>
      </div>
    </div>
  );
};

export default InterestsTag;
