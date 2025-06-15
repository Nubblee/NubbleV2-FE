import { createdStudyList, participatedStudyList, finishedStudyList } from '@/mocks/mypage'
import StudySection from '../../_component/study-section'

const StudyManagement = () => {
  return (
    <div className='flex flex-col gap-10 w-full'>
      <StudySection title='내가 만든 스터디' studyList={createdStudyList} />
      <StudySection title='참여한 스터디' studyList={participatedStudyList} />
      <StudySection title='종료된 스터디' studyList={finishedStudyList} />
    </div>
  )
}

export default StudyManagement
