import { DayType } from "./day";

//스터디 상태
export type StudyCardType = "RECRUITING" | "ACTIVE" | "ENDED";

//스터디 진행방식
export type MeetingType = "ONLINE" | "OFFLINE" | "HYBRID";

export interface StudyCardProps {
  id: string;
  type?: StudyCardType;
  icon: string;
  title: string;
  allMembers: number;
  members: number;
  level: string;
  days: string[];
  expireDay?: string;
  className?: string;
}

export interface StudyGroup {
  studyGroupId: string;
  name: string;
  description: string;
  capacity: number;
  startDate: string;
  endDate: string | null;
  status: StudyCardType;
  languages: string[];
  mainLanguage: string;
  difficultyLevels: string[];
  problemPlatforms: string[];
  meetingType: MeetingType;
  meetingRegion: string | null;
  mainMeetingDays: DayType[];
}
