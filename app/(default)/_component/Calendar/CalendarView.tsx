'use client'

import { Calendar, luxonLocalizer, ToolbarProps } from 'react-big-calendar'
import { DateTime } from 'luxon'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import CustomToolbar from './CustomToolbar'
import { Option } from '@/components/Select'
import CustomEvent from './CustomEvent'

interface CalendarViewProps {
  option: Option[]
}

export interface CalendarEvent {
  title: string
  date: Date
  progress?: number
}

const localizer = luxonLocalizer(DateTime, {
  firstDayOfWeek: 1,
})

const rawEvents: CalendarEvent[] = [
  { title: '김수민', date: new Date('2025-05-20'), progress: 0 },
  { title: '유원우', date: new Date('2025-05-20'), progress: 50 },
  { title: '손성오', date: new Date('2025-05-20'), progress: 90 },
  { title: '박지영', date: new Date('2025-05-20'), progress: 100 },
  { title: '조이스틱', date: new Date('2025-05-21') },
]

const events = rawEvents.map((event) => ({
  ...event,
  start: event.date,
  end: event.date,
}))

const CalendarView = ({ option }: CalendarViewProps) => {
  const ToolbarComponent: React.ComponentType<ToolbarProps<CalendarEvent, object>> = (props) => (
    <CustomToolbar {...props} options={option} />
  )

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor={(event) => event.date}
        endAccessor={(event) => event.date}
        views={['month']}
        components={{
          toolbar: ToolbarComponent,
          event: CustomEvent,
        }}
        style={{ width: 1200, height: 800 }}
      />
    </div>
  )
}

export default CalendarView
