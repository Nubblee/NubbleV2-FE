export type StudyCardType = "recruiting" | "active";

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
