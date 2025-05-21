import ProgressInfo from './ProgressInfo'
import SelectedDate from './SelectedDate'
import DailyProgressCard from './DailyProgressCard'
import type { CalendarEvent } from '@/types/calendar'

interface DailyProgressProps {
  event: CalendarEvent
}

const DailyProgress = ({ event }: DailyProgressProps) => {
  const { title, date, progress, solvedInfo } = event

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex justify-between items-center'>
        <ProgressInfo title={title} progress={progress} />
        <SelectedDate date={date} />
      </div>
      {solvedInfo && <DailyProgressCard solvedInfo={solvedInfo} />}
    </div>
  )
}

export default DailyProgress
