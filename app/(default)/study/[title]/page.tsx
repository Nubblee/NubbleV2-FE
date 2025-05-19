'use client'

import { useState } from 'react'
import CalendarView from '@/app/(default)/_component/Calendar/CalendarView'
import StudyCard from './_component/StudyCard'
import StudyInfo from './_component/StudyHeader'
import { DayType } from '@/types/day'
import { CalendarEvent } from '@/types/calendar'
import DailyProgress from './_component/DailyProgress/DailyProgress'

const studyData = {
  id: '1',
  type: 'recruiting',
  icon: '/nubble.png',
  language: 'javascript',
  title: '[JS] 알고리즘 우리가 짱먹는다 ㅋㅋ 우리가 알고왕이지롱~ ㅋㅋ 우리가 알고왕이지롱~  ',
  levels: ['Lv. 1', 'Lv. 2'],
  days: ['MON', 'WED', 'FRI'] as DayType[],
  members: [
    {
      id: 1,
      name: '수민',
      image: '/basicProfile.png',
    },
    {
      id: 2,
      name: '지영',
      image: '/basicProfile.png',
    },
    {
      id: 3,
      name: '성오',
      image: '/basicProfile.png',
    },
    {
      id: 4,
      name: '원우',
      image: '/basicProfile.png',
    },
  ],
}

const todayProblem = [
  {
    id: 1,
    title: 'Lv.2 종이접기',
    link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
  },
  {
    id: 2,
    title: '[카카오 인턴] 키패드 누르기',
    link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
  },
  {
    id: 3,
    title: 'Lv.2 종이접기',
    link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
  },
  {
    id: 4,
    title: 'Lv.2 종이접기',
    link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
  },
  {
    id: 5,
    title: 'Lv.2 종이접기',
    link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
  },
  {
    id: 6,
    title: 'Lv.2 종이접기',
    link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
  },
]

const studyRule = [
  {
    id: 1,
    title: '스터디 공지사항 알림',
    link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
  },
  {
    id: 2,
    title: '2025.01.15 스터디 공지사항',
    link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
  },
  {
    id: 3,
    title: '2025.01.15 스터디 공지사항',
    link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
  },
  {
    id: 4,
    title: '2025.01.15 스터디 공지사항',
    link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
  },
]

const events: CalendarEvent[] = [
  {
    title: '김수민',
    date: new Date('2025-05-23'),
    progress: 0,
    solvedInfo: {
      solved: [
        {
          id: 1,
          title: '백준_방탈 나이트',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
        {
          id: 2,
          title: '프로그래머스_바탕화면 정리',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
      ],
      unsolved: [
        {
          id: 3,
          title: '주사위 굴리기',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
        {
          id: 4,
          title: '종이접기',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
        {
          id: 5,
          title: '주사위 굴리기',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
        {
          id: 6,
          title: '종이접기',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
      ],
    },
  },
  {
    title: '유원우',
    date: new Date('2025-05-23'),
    progress: 50,
    solvedInfo: {
      solved: [
        {
          id: 1,
          title: '백준_방탈 나이트',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
        {
          id: 2,
          title: '프로그래머스_바탕화면 정리',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
      ],
      unsolved: [
        {
          id: 3,
          title: '주사위 굴리기',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
        {
          id: 4,
          title: '주사위 굴리기',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
        {
          id: 5,
          title: '주사위 굴리기',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
        {
          id: 6,
          title: '종이접기',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
        {
          id: 7,
          title: '종이접기',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
        {
          id: 8,
          title: '종이접기',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
      ],
    },
  },
  {
    title: '손성오',
    date: new Date('2025-05-23'),
    progress: 90,
    solvedInfo: {
      solved: [],
      unsolved: [
        {
          id: 3,
          title: '주사위 굴리기',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
        {
          id: 4,
          title: '종이접기',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
        {
          id: 5,
          title: '주사위 굴리기',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
        {
          id: 6,
          title: '종이접기',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
      ],
    },
  },
  {
    title: '박지영',
    date: new Date('2025-05-23'),
    progress: 100,
    solvedInfo: {
      solved: [
        {
          id: 1,
          title: '백준_방탈 나이트',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
        {
          id: 2,
          title: '프로그래머스_바탕화면 정리',
          link: 'https://school.programmers.co.kr/learn/courses/30/lessons/67256',
        },
      ],
      unsolved: [],
    },
  },
]

const study = [
  { label: '김수민', value: 'sumin' },
  { label: '박지영', value: 'jiyoung' },
  { label: '손성오', value: 'seongoh' },
  { label: '유원우', value: 'wonwoo' },
]

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
