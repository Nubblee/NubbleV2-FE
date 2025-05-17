import CalendarView from '@/app/(default)/_component/Calendar/CalendarView'

export default function Test() {
  const study = [
    { label: '김수민', value: 'sumin' },
    { label: '박지영', value: 'jiyoung' },
    { label: '손성오', value: 'seongoh' },
    { label: '유원우', value: 'wonwoo' },
  ]

  return (
    <div className='py-4'>
      <div>
        <CalendarView option={study} />
      </div>
    </div>
  )
}
