import type { RejectionCardProps, StudyCardProps } from '@/types/study'
import StudyCard from '@/app/(default)/_component/StudyCard'
import RejectionCard from '@/app/(default)/mypage/[id]/_component/rejection-card'

interface StudySectionProps {
  title: string
  studyList?: StudyCardProps[]
  rejectionList?: RejectionCardProps[]
}

const StudySection = ({ title, studyList, rejectionList }: StudySectionProps) => {
  return (
    <section className='flex flex-col gap-6'>
      <h2 className='text-lg font-bold'>{title}</h2>
      {studyList && (
        <ul className='flex gap-10 flex-wrap'>
          {studyList?.map((study) => (
            <li key={study.studyGroupId}>
              <StudyCard
                {...study}
                className='cursor-pointer'
                onClick={() => {}}
                onBookMark={() => {}}
              />
            </li>
          ))}
        </ul>
      )}

      {rejectionList && (
        <ul className='flex flex-col gap-10'>
          {rejectionList?.map((study) => (
            <li key={study.studyGroupId}>
              <RejectionCard {...study} className='cursor-pointer' onClick={() => {}} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default StudySection
