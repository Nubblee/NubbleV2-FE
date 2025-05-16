'use client'

import { Calendar, luxonLocalizer } from 'react-big-calendar'
import { DateTime } from 'luxon'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import CustomToolbar from './CustomToolbar'
import { Option } from '@/components/Select'
import { ToolbarProps } from 'react-big-calendar'

interface CalendarWrapperProps {
  option: Option[]
}

const localizer = luxonLocalizer(DateTime, {
  firstDayOfWeek: 1,
})

const CalendarView = ({ option }: CalendarWrapperProps) => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor='start'
        endAccessor='end'
        views={['month']}
        components={{
          toolbar: ((props: ToolbarProps) => (
            <CustomToolbar {...props} options={option} />
          )) as React.ComponentType<ToolbarProps>,
        }}
        style={{ width: 1000, height: 700 }}
      />
    </div>
  )
}

export default CalendarView
