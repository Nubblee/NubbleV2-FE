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
          options={problemOptions}
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
      <Button
        onClick={handleInterestTags}
        className="w-[55%] m-auto items-center py-3"
      >
        확인
      </Button>
    </div>
  );
};

export default InterestsTag;
