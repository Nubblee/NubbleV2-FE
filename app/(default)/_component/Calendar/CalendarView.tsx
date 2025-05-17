'use client'

import { Calendar, luxonLocalizer, ToolbarProps } from 'react-big-calendar'
import { DateTime } from 'luxon'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarViewProps, CalendarEvent } from '@/types/calendar'
import CustomToolbar from './CustomToolbar'
import CustomEvent from './CustomEvent'
import { mapAndSortEvents } from '@/utils/calendar'

const localizer = luxonLocalizer(DateTime, {
  firstDayOfWeek: 1,
})

const CalendarView = ({ option, events }: CalendarViewProps) => {
  const ToolbarComponent: React.ComponentType<ToolbarProps<CalendarEvent, object>> = (props) => (
    <CustomToolbar {...props} options={option} />
  )

  const mappedEvents = mapAndSortEvents(events)

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
