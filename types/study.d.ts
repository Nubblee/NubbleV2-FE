import { languageOptions } from "@/config/study";
import { DayType } from "./day";

//스터디 상태
export type StudyCardType = "RECRUITING" | "ACTIVE" | "ENDED";

//스터디 진행방식
export type MeetingType = "ONLINE" | "OFFLINE" | "HYBRID";

//스터디 언어
export type LanguageType = (typeof languageOptions)[number];

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
  onClick?: () => void;
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

//스터디 생성  타입
export type RegisterStudyParams = Omit<
  StudyGroup,
  "studyGroupId" | "startDate" | "endDate" | "status"
>;

//스터디 모집공고
export interface CreateRecruitingPostParams {
  studyGroupId: string;
  title: string;
  description: string;
  recruitCapacity: number;
  endDate: string;
  applicationFormContent: string;
}
//스터디 모집공고 조회
export interface StudyRegisterDetailTagProps {
  languages: string[];
  levels: string[];
  platforms: string[];
  meetingType: string;
  region: string;
  days: string[];
  capacity: number;
  endDate: string;
}
