import { DayType } from "./day";

//스터디 상태
export type StudyCardType = "RECRUITING" | "ACTIVE" | "ENDED";

//스터디 진행방식
export type MeetingType = "ONLINE" | "OFFLINE" | "HYBRID";

//스터디 언어
export type LanguageType =
  | "JAVA"
  | "PYTHON"
  | "C"
  | "CPP"
  | "JAVASCRIPT"
  | "TYPESCRIPT"
  | "GO"
  | "RUBY"
  | "KOTLIN"
  | "RUST"
  | "OTHER";

//스터디 카드 인터페이스
export interface StudyCardProps
  extends Pick<
      StudyGroup,
      | "studyGroupId"
      | "name"
      | "status"
      | "mainLanguage"
      | "mainMeetingDays"
      | "difficultyLevels"
    >,
    "endDate" {
  icon: string;
  allMembers: number;
  members: number;
  expireDay?: string;
  className?: string;
}

//스터디 그룹
export interface StudyGroup {
  studyGroupId: string;
  name: string;
  description: string;
  capacity: number;
  startDate: string;
  endDate: string | null;
  status: StudyCardType;
  languages: LanguageType[];
  mainLanguage: LanguageType;
  difficultyLevels: string[];
  problemPlatforms: string[];
  meetingType: MeetingType;
  meetingRegion: string | null;
  mainMeetingDays: DayType[];
}
