import CalendarView from '@/app/(default)/_component/Calendar/CalendarView'
import { options, events } from '@/mocks/mypage'

const StudyStatus = () => {
  return (
    <div className='lg:mx-32'>
      <CalendarView events={events} option={options} onEventSelect={() => {}} />
    </div>
  )
}

export default StudyStatus
