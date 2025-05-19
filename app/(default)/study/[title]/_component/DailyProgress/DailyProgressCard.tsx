import StudyCard from '../../_component/StudyCard'
import { DailyStudyInfo } from '@/types/calendar'

interface DailyProgressCardProps {
  solvedInfo: DailyStudyInfo
}

const DailyProgressCard = ({ solvedInfo }: DailyProgressCardProps) => {
  return (
    <div className='flex gap-10'>
      <StudyCard
        className='flex-1'
        cardTitle='오늘의 문제 풀이 목록'
        lists={solvedInfo.solved}
        emptyMessage='아직 등록된 풀이가 없습니다 🥺'
      />
      <StudyCard
        className='flex-1'
        cardTitle='남은 풀이 목록'
        lists={solvedInfo.unsolved}
        emptyMessage='남은 풀이 목록이 없습니다 🥳'
      />
    </div>
  )
}

export default DailyProgressCard
