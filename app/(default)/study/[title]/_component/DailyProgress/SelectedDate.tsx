import type { CalendarEvent } from '@/types/calendar'
import { DateTime } from 'luxon'

interface SelectedDateProps {
  date: CalendarEvent['date']
}

const SelectedDate = ({ date }: SelectedDateProps) => {
  return (
    <div className='text-lg font-medium'>
      {DateTime.fromJSDate(date).toFormat('yyyy년 MM월 dd일')}
    </div>
  )
}

export default SelectedDate
