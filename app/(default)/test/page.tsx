import CalendarView from '@/app/(default)/_component/Calendar/CalendarView'
import { CalendarEvent } from '@/types/calendar'

export default function Test() {
  const study = [
    { label: '김수민', value: 'sumin' },
    { label: '박지영', value: 'jiyoung' },
    { label: '손성오', value: 'seongoh' },
    { label: '유원우', value: 'wonwoo' },
  ]

  const events: CalendarEvent[] = [
    // 스터디그룹 예시 4개 이상
    { title: '김수민', date: new Date('2025-05-20'), progress: 0 },
    { title: '유원우', date: new Date('2025-05-20'), progress: 50 },
    { title: '손성오', date: new Date('2025-05-20'), progress: 90 },
    { title: '박지영', date: new Date('2025-05-20'), progress: 100 },
    { title: '김수민', date: new Date('2025-05-20'), progress: 0 },
    { title: '유원우', date: new Date('2025-05-20'), progress: 50 },
    { title: '손성오', date: new Date('2025-05-20'), progress: 90 },
    { title: '박지영', date: new Date('2025-05-20'), progress: 100 },

    // 스터디그룹 4개
    { title: '김수민', date: new Date('2025-05-23'), progress: 0 },
    { title: '유원우', date: new Date('2025-05-23'), progress: 50 },
    { title: '손성오', date: new Date('2025-05-23'), progress: 90 },
    { title: '박지영', date: new Date('2025-05-23'), progress: 100 },

    // 마이 페이지 예시
    { title: '조이스틱', date: new Date('2025-05-21'), solved: false },
    { title: '두 원 사이의 정수 쌍', date: new Date('2025-05-21'), solved: true },
    { title: '[PCCP 기출문제] 2번 / 석유 시추', date: new Date('2025-05-21'), solved: false },
  ]

  return (
    <div className='mt-5 flex flex-col py-10 px-14'>
      <div>
        <CalendarView option={study} events={events} />
      </div>
    </div>
  )
}
