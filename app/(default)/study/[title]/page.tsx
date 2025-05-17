import CalendarView from '@/app/(default)/_component/Calendar/CalendarView'
import StudyCard from './_component/StudyCard'
import StudyInfo from './_component/StudyHeader'
import { DayType } from '@/types/day'
import { CalendarEvent } from '@/types/calendar'

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
      name: '수민',
      image: '/basicProfile.png',
    },
    {
      name: '지영',
      image: '/basicProfile.png',
    },
    {
      name: '성오',
      image: '/basicProfile.png',
    },
    {
      name: '원우',
      image: '/basicProfile.png',
    },
  ],
}

const todayProblem = [
  {
    id: 1,
    title: 'Lv.2 종이접기',
  },
  {
    id: 2,
    title: '[카카오 인턴] 키패드 누르기',
  },
  {
    id: 3,
    title: 'Lv.2 종이접기',
  },
  {
    id: 4,
    title: 'Lv.2 종이접기',
  },
  {
    id: 5,
    title: 'Lv.2 종이접기',
  },
  {
    id: 6,
    title: 'Lv.2 종이접기',
  },
]

const studyRule = [
  {
    id: 1,
    title: '스터디 공지사항 알림',
  },
  {
    id: 2,
    title: '2025.01.15 스터디 공지사항',
  },
  {
    id: 3,
    title: '2025.01.15 스터디 공지사항',
  },
  {
    id: 4,
    title: '2025.01.15 스터디 공지사항',
  },
]

const events: CalendarEvent[] = [
  { title: '김수민', date: new Date('2025-05-23'), progress: 0 },
  { title: '유원우', date: new Date('2025-05-23'), progress: 50 },
  { title: '손성오', date: new Date('2025-05-23'), progress: 90 },
  { title: '박지영', date: new Date('2025-05-23'), progress: 100 },
]

const study = [
  { label: '김수민', value: 'sumin' },
  { label: '박지영', value: 'jiyoung' },
  { label: '손성오', value: 'seongoh' },
  { label: '유원우', value: 'wonwoo' },
]

const Page = () => {
  return (
    <div className='mt-5 flex flex-col py-10 px-14 gap-12'>
      <StudyInfo {...studyData} variant='study' />
      <div className='flex gap-10'>
        <StudyCard
          className='flex-1'
          studyTitle={studyData.id}
          cardTitle='오늘의 문제'
          lists={todayProblem}
        />
        <StudyCard
          className='flex-2'
          studyTitle={studyData.id}
          cardTitle='스터디 규칙'
          lists={studyRule}
        />
      </div>
      <CalendarView events={events} option={study} />
    </div>
  )
}

export default Page
