import type { CalendarEvent } from '@/types/calendar'

type EventProgressInfo = Pick<CalendarEvent, 'title' | 'progress'>

const ProgressInfo = ({ title, progress }: EventProgressInfo) => {
  return (
    <div className='flex items-center gap-4'>
      <h1 className='font-semibold text-2xl'>{title}</h1>
      <span className='flex'>
        진행률<div className='ml-2 text-green-dark font-semibold'>{progress}</div>%
      </span>
    </div>
  )
}

export default ProgressInfo
