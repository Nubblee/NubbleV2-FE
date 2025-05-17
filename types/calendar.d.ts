import type { Option } from '@/components/Select'

export interface CalendarViewProps {
  option: Option[]
  events: CalendarEvent[]
}

export interface CalendarEvent {
  title: string
  date: Date
  progress?: number
}