import { MeetingType } from "@/types/study";

interface ValidateStudyFormParams {
  title: string;
  description: string;
  applicationForm: string;
  languages: string[];
  mainLanguage: string;
  difficultyLevels: string[];
  problemPlatforms: string[];
  meetingType: string;
  meetingRegion: string;
  mainMeetingDays: string[];
  capacity: number;
  endDate: string;
}

export const isValidMeetingType = (value: string): value is MeetingType => {
  return ["ONLINE", "OFFLINE", "HYBRID"].includes(value);
};

export const validateStudyForm = ({
  title,
  description,
  applicationForm,
  languages,
  mainLanguage,
  difficultyLevels,
  problemPlatforms,
  meetingType,
  meetingRegion,
  mainMeetingDays,
  capacity,
  endDate,
}: ValidateStudyFormParams): string | null => {
  if (!title.trim()) return "스터디 제목을 입력해주세요.";
  if (!description.trim()) return "스터디 소개를 입력해주세요.";
  if (!applicationForm.trim()) return "신청 양식을 입력해주세요.";
  if (languages.length === 0)
    return "스터디 언어 태그를 하나 이상 선택해주세요.";
  if (!mainLanguage) return "주 언어를 선택해주세요.";
  if (difficultyLevels.length === 0) return "난이도를 하나 이상 선택해주세요.";
  if (problemPlatforms.length === 0) return "플랫폼을 하나 이상 선택해주세요.";
  if (!isValidMeetingType(meetingType))
    return "스터디 진행 방식을 선택해주세요.";
  if (!meetingRegion.trim()) return "스터디 지역을 입력해주세요.";
  if (capacity <= 0) return "스터디 인원은 1명 이상이어야 합니다.";
  if (!endDate.trim()) return "스터디 종료일을 입력해주세요.";
  if (mainMeetingDays.length === 0)
    return "스터디 요일을 하나 이상 선택해주세요.";

  return null;
};
