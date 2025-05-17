'use client'

import { Calendar, luxonLocalizer, ToolbarProps } from 'react-big-calendar'
import { DateTime } from 'luxon'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarViewProps, CalendarEvent } from '@/types/calendar'
import CustomToolbar from './CustomToolbar'
import CustomEvent from './CustomEvent'

const localizer = luxonLocalizer(DateTime, {
  firstDayOfWeek: 1,
})

const CalendarView = ({ option, events }: CalendarViewProps) => {
  const ToolbarComponent: React.ComponentType<ToolbarProps<CalendarEvent, object>> = (props) => (
    <CustomToolbar {...props} options={option} />
  )

  const mappedEvents = events
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

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={mappedEvents}
        startAccessor={(event) => event.date}
        endAccessor={(event) => event.date}
        views={['month']}
        components={{
          toolbar: ToolbarComponent,
          event: CustomEvent,
        }}
        popup
        style={{ width: 1200, height: 800 }}
      />
    </div>
  )
}

export default CalendarView
