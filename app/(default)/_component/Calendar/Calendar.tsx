'use client'

import { Calendar, luxonLocalizer } from 'react-big-calendar'
import { DateTime } from 'luxon'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = luxonLocalizer(DateTime, {
  firstDayOfWeek: 1,
})

const CalendarWrapper = () => {
  return (
    <div className='p-4'>
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor='start'
        endAccessor='end'
        views={['month']}
        style={{ width: 1000, height: 700 }}
      />
    </div>
  )
}

export default CalendarWrapper
