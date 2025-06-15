import CalendarView from '@/app/(default)/_component/Calendar/CalendarView'
import { options, events } from '@/mocks/mypage'

const StudyStatus = () => {
  return <CalendarView events={events} option={options} onEventSelect={() => {}} />
}

export default StudyStatus
