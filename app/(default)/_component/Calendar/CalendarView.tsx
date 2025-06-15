'use client'

import { useState } from 'react'
import { DateTime } from 'luxon'
import { Calendar, luxonLocalizer, ToolbarProps } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarViewProps, CalendarEvent } from '@/types/calendar'
import CustomToolbar from './CustomToolbar'
import CustomEvent from './CustomEvent'
import { mapAndSortEvents } from '@/utils/calendar'

const localizer = luxonLocalizer(DateTime, {
  firstDayOfWeek: 1,
})

const CalendarView = ({ option, events, onEventSelect }: CalendarViewProps) => {
  const [selected, setSelected] = useState<string | null>(null)
  const filteredEvents = selected
    ? events.filter((e) => {
        const selectedOption = option.find((o) => o.value === selected)
        if (selectedOption?.label && e.title === selectedOption.label) return true
        if (selected === 'solved') return e.solved === true
        if (selected === 'unsolved') return e.solved === false
        return false
      })
    : events
  const mappedEvents = mapAndSortEvents(filteredEvents)

  const ToolbarComponent: React.ComponentType<ToolbarProps<CalendarEvent, object>> = (props) => (
    <CustomToolbar {...props} options={option} onSelectChange={setSelected} selected={selected} />
  )

  return (
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
      onSelectEvent={(event) => {
        onEventSelect?.(event)
      }}
      style={{ width: '100%', height: 800 }}
    />
  )
}

export default CalendarView
