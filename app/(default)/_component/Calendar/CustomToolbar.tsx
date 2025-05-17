'use client'

import { DateTime } from 'luxon'
import { ToolbarProps } from 'react-big-calendar'
import Select, { Option } from '@/components/Select'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CalendarEvent } from '@/types/calendar'

export interface CustomToolbarProps extends ToolbarProps<CalendarEvent, object> {
  options: Option[]
  onSelectChange: (value: string | null) => void
}

const CustomToolbar = ({ date, onNavigate, options, onSelectChange }: CustomToolbarProps) => {
  const formattedLabel = DateTime.fromJSDate(date).toFormat('LLL yyyy')

  return (
    <div className='flex justify-between items-center mb-4'>
      <div className='flex items-center gap-4'>
        <span className='text-2xl font-bold min-w-[120px]'>{formattedLabel}</span>
        <button onClick={() => onNavigate('PREV')} className='cursor-pointer'>
          <ChevronLeft />
        </button>
        <button onClick={() => onNavigate('NEXT')} className='cursor-pointer'>
          <ChevronRight />
        </button>
        <button
          onClick={() => onNavigate('TODAY')}
          className='border border-gray-600 rounded-full px-3 py-1 hover:bg-green-light cursor-pointer'
        >
          Today
        </button>
      </div>

      <div className='w-[160px]'>
        <Select
          options={options}
          onChange={(value) => {
            onSelectChange(value)
          }}
        />
      </div>
    </div>
  )
}

export default CustomToolbar
