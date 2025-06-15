import { createdStudyList, rejectionStudyList } from '@/mocks/mypage'
import StudySection from '../../_component/study-section'

const ApplicationStatus = () => {
  return (
    <div className='flex flex-col gap-10 w-full'>
      <StudySection title='승인 대기 중인 스터디' studyList={createdStudyList} />
      <StudySection title='승인 거부된 스터디' rejectionList={rejectionStudyList} />
    </div>
  )
}

export default ApplicationStatus
