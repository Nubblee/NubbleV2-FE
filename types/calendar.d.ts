import type { Option } from '@/components/Select'
import { DateTime } from 'luxon'

// CalendarView 컴포넌트 Props 정의
export interface CalendarViewProps {
  option: Option[]
  events: CalendarEvent[]
  onEventSelect?: (event: CalendarEvent) => void
}

export interface listProps {
  id: number
  title: string
  link: string
}

// 하루 동안의 문제 풀이 정보
export interface DailyStudyInfo {
  solved: StudyProblem[]
  unsolved: StudyProblem[]
}

// 캘린더에 표시되는 일정 정보
export interface CalendarEvent {
  title: string
  date: Date
  progress?: number
  solved?: boolean
  solvedInfo?: DailyStudyInfo
}

// 선택된 날짜와 스터디 멤버의 정보
export interface SelectedInfo {
  name: string
  date: DateTime
}

export interface DailyProgressProps {
  info: SelectedInfo | null
  dailyStudyInfo: DailyStudyInfo
}
