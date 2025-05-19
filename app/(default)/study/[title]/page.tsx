'use client'

import { useState } from 'react'
import CalendarView from '@/app/(default)/_component/Calendar/CalendarView'
import StudyCard from './_component/StudyCard'
import StudyInfo from './_component/StudyHeader'
import type { CalendarEvent } from '@/types/calendar'
import DailyProgress from './_component/DailyProgress/DailyProgress'
import { events, studyData, todayProblem, studyRule, study } from '@/mocks/studyPage'

const Page = () => {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event)
  }

  return (
    <div className='mt-5 flex flex-col py-10 px-14 gap-12'>
      <StudyInfo {...studyData} variant='study' />
      <div className='flex gap-10'>
        <StudyCard
          className='flex-1'
          studyTitle={studyData.id}
          cardTitle='오늘의 문제'
          lists={todayProblem}
          emptyMessage='오늘의 문제가 등록되지 않았습니다.'
        />
        <StudyCard
          className='flex-2'
          studyTitle={studyData.id}
          cardTitle='스터디 규칙'
          lists={studyRule}
          emptyMessage='등록된 공지사항이 없습니다.'
        />
      </div>
      <CalendarView events={events} option={study} onEventSelect={handleEventClick} />
      {selectedEvent && <DailyProgress event={selectedEvent} />}
    </div>
  )
}

export default Page
