'use client'

import { useState } from 'react'
import Checkbox from '@/components/Checkbox'

export default function Test() {
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
  const [checkedDays, setCheckedDays] = useState<string[]>([])
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div>
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

      <div className='flex items-center  gap-4 py-4'>
        <Checkbox checked={isChecked} onChange={(v) => setIsChecked(v)} />
        <div>
          <h3>[업데이트 소식] 스터디 유의사항</h3>
          <p>글쓴이: 스터디장</p>
        </div>
      </div>
    </div>
  )
}
