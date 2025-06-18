import { useState } from "react";
import { levelOptions, problemOptions } from "@/config/study";
import { LanguageType } from "@/types/study";
import { fetchUserInterest } from "@/api/auth/auth";
import { toast } from "@/utils/toast";
import { useRouter } from "next/navigation";

export const useInterestTags = () => {
  const router = useRouter();
  const [languages, setLanguages] = useState<LanguageType[]>([]);
  const [platforms, setPlatforms] = useState<(typeof problemOptions)[number][]>(
    []
  );
  const [levels, setLevels] = useState<(typeof levelOptions)[number][]>([]);

  const handleInterestTags = async () => {
    try {
      await fetchUserInterest({
        interestsLanguages: languages,
        currentLevels: levels,
        preferredPlatforms: platforms,
      });
      toast.success("회원가입이 완료되었습니다.");
      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const handlePlatforms = (selected: (typeof problemOptions)[number][]) => {
    setPlatforms(selected);
  };

  const handleLanguages = (selected: LanguageType[]) => {
    setLanguages(selected);
  };

  const handleLevels = (selected: (typeof levelOptions)[number][]) => {
    setLevels(selected);
  };

  return {
    languages,
    platforms,
    levels,
    handleLanguages,
    handlePlatforms,
    handleLevels,
    handleInterestTags,
  };
};
