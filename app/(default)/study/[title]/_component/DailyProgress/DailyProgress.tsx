import ProgressInfo from './ProgressInfo'
import SelectedDate from './SelectedDate'
import DailyProgressCard from './DailyProgressCard'
import { CalendarEvent } from '@/types/calendar'

interface DailyProgressProps {
  event: CalendarEvent
}

const DailyProgress = ({ event }: DailyProgressProps) => {
  const { title, date, progress, solvedInfo } = event

  return (
    <div className='flex flex-col gap-6'>
      <SelectedDate date={date} />
      <ProgressInfo title={title} progress={progress} />
      {solvedInfo && <DailyProgressCard solvedInfo={solvedInfo} />}
    </div>
  )
}

export default DailyProgress
