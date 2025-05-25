import { CalendarEvent } from '@/types/calendar'

export const mapAndSortEvents = (events: CalendarEvent[]) => {
  return events
    .slice()
    .sort((a, b) => {
      const aHasProgress = a.progress !== undefined
      const bHasProgress = b.progress !== undefined

      if (aHasProgress && bHasProgress) {
        return a.progress! - b.progress!
      }
      if (aHasProgress) return -1
      if (bHasProgress) return 1
      return 0
    })
    .map((event) => ({
      ...event,
      start: event.date,
      end: event.date,
    }))
}