import type { StudyCardProps } from '@/types/study'
import StudyCard from '@/app/(default)/_component/StudyCard'

interface StudySectionProps {
  title: string
  studyList: StudyCardProps[]
}

const StudySection = ({ title, studyList }: StudySectionProps) => {
  return (
    <section className='flex flex-col gap-6'>
      <h2 className='text-lg font-bold'>{title}</h2>
      <ul className='flex gap-10'>
        {studyList.map((study) => (
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
    </section>
  )
}

export default StudySection
