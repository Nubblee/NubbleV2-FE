'use client'

import { EventProps } from 'react-big-calendar'
import { CalendarEvent } from '@/types/calendar'

const CustomEvent = ({ event }: EventProps<CalendarEvent>) => {
  const getColor = (progress?: number) => {
    if (progress === undefined) return 'bg-gray-300'
    if (progress === 100) return 'bg-mint-dark'
    if (progress >= 75) return 'bg-mint-middle'
    if (progress >= 50) return 'bg-green-light'
    if (progress >= 25) return 'bg-mint-light'
    return 'bg-mint-light'
  }

  return (
    <div className={`text-xs text-black px-2 py-1 rounded ${getColor(event.progress)}`}>
      {event.title}
    </div>
  )
}

export default CustomEvent
