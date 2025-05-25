import { EventProps } from 'react-big-calendar'
import { CalendarEvent } from '@/types/calendar'

const CustomEvent = ({ event }: EventProps<CalendarEvent>) => {
  const getColor = (progress?: number, solved?: boolean) => {
    if (solved === false) return 'bg-red-200'
    if (solved === true) return 'bg-yellow-200'

    if (progress === undefined) return 'bg-gray-light'
    if (progress === 100) return 'bg-mint-dark'
    if (progress >= 75) return 'bg-mint-middle'
    if (progress >= 50) return 'bg-green-light'
    if (progress >= 25) return 'bg-mint-light'
    return 'bg-mint-light'
  }

  return (
    <div
      className={`text-xs text-black px-2 py-1 rounded truncate ${getColor(
        event.progress,
        event.solved
      )}`}
    >
      {event.title}
    </div>
  )
}

export default CustomEvent
