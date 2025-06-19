import { useState } from "react";
import { levelOptions, problemOptions } from "@/config/study";
import { LanguageType } from "@/types/study";
import { fetchUser, fetchUserInterest } from "@/api/auth/auth";
import { toast } from "@/utils/toast";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";

export const useInterestTags = () => {
  const router = useRouter();
  const { setUser } = useAuthStore();
  const [languages, setLanguages] = useState<LanguageType[]>([]);
  const [platforms, setPlatforms] = useState<(keyof typeof problemOptions)[]>(
    []
  );
  const [levels, setLevels] = useState<(typeof levelOptions)[number][]>([]);

  const successSignUp = async () => {
    toast.success("회원가입이 완료되었습니다.");
    const userData = await fetchUser();
    setUser(userData);
    router.push("/");
  };

  const handleInterestTags = async () => {
    try {
      await fetchUserInterest({
        interestedLanguages: languages,
        currentLevels: levels,
        preferredPlatforms: platforms,
      });
      successSignUp();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const handleSkipInterestTags = () => {
    successSignUp();
  };

  const handlePlatforms = (selected: string[]) => {
    const keys = selected
      .map((value) => {
        return Object.entries(problemOptions).find(
          ([[], v]) => v === value
        )?.[0];
      })
      .filter((v): v is keyof typeof problemOptions => !!v);
    setPlatforms(keys);
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
    handleSkipInterestTags,
  };
};
