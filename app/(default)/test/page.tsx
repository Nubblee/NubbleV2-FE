'use client'

import { useState } from 'react'
import Checkbox from '@/components/Checkbox'

export default function Test() {
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
  const [checkedDays, setCheckedDays] = useState<string[]>([])

  return (
    <div className='flex gap-6'>
      {days.map((day) => (
        <Checkbox
          key={day}
          label={day}
          checked={checkedDays.includes(day)}
          onChange={(checked) =>
            setCheckedDays((prev) => (checked ? [...prev, day] : prev.filter((d) => d !== day)))
          }
        />
      ))}
    </div>
  )
}
