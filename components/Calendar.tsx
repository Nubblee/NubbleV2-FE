'use client'

import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { format, parse, getDay, startOfWeek } from 'date-fns'
import { ko } from 'date-fns/locale/ko'

const locales = {
  'ko-KR': ko,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => 0,
  getDay,
  locales,
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
