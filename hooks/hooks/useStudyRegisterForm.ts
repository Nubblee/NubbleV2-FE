import { useState } from "react";
import { DayType } from "@/types/day";
import { MeetingType } from "@/types/study";

export function useStudyRegisterForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [applicationForm, setApplicationForm] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [mainLanguage, setMainLanguage] = useState<string>("");
  const [difficultyLevels, setDifficultyLevels] = useState<string[]>([]);
  const [problemPlatforms, setProblemPlatforms] = useState<string[]>([]);
  const [meetingType, setMeetingType] = useState<MeetingType | "">("");
  const [meetingRegion, setMeetingRegion] = useState("");
  const [mainMeetingDays, setMainMeetingDays] = useState<DayType[]>([]);
  const [capacity, setCapacity] = useState<number>(1);
  const [endDate, setEndDate] = useState<string>("");

  const getFormData = () => ({
    title,
    description,
    applicationForm,
    languages,
    mainLanguage,
    difficultyLevels,
    problemPlatforms,
    meetingType,
    meetingRegion,
    capacity,
    endDate,
    mainMeetingDays,
  });

  return {
    title,
    setTitle,
    description,
    setDescription,
    applicationForm,
    setApplicationForm,
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
    getFormData,
    capacity,
    setCapacity,
    endDate,
    setEndDate,
  };
}
