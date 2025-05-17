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
    { title: '김수민', date: new Date('2025-05-20'), progress: 0 },
    { title: '유원우', date: new Date('2025-05-20'), progress: 50 },
    { title: '손성오', date: new Date('2025-05-20'), progress: 90 },
    { title: '박지영', date: new Date('2025-05-20'), progress: 100 },
    { title: '김수민', date: new Date('2025-05-20'), progress: 0 },
    { title: '유원우', date: new Date('2025-05-20'), progress: 50 },
    { title: '손성오', date: new Date('2025-05-20'), progress: 90 },
    { title: '박지영', date: new Date('2025-05-20'), progress: 100 },

    { title: '조이스틱', date: new Date('2025-05-21') },

    { title: '김수민', date: new Date('2025-05-23'), progress: 0 },
    { title: '유원우', date: new Date('2025-05-23'), progress: 50 },
    { title: '손성오', date: new Date('2025-05-23'), progress: 90 },
    { title: '박지영', date: new Date('2025-05-23'), progress: 100 },
  ]

  return (
    <div className='py-4'>
      <div>
        <CalendarView option={study} events={events} />
      </div>
    </div>
  )
}
