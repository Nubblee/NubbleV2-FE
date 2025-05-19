import Card from '@/app/(default)/_component/Card'
import { Plus } from 'lucide-react'
import Link from 'next/link'

interface StudyCardProps {
  studyTitle?: string
  cardTitle: string
  lists: { id: number; title: string }[]
  className?: string
  emptyMessage?: string
}

const StudyCard = ({ studyTitle, cardTitle, lists, className, emptyMessage }: StudyCardProps) => {
  const isLongList = lists.length >= 4
  const isTodayProblem = cardTitle === '오늘의 문제'
  const isStudyRule = cardTitle === '스터디 규칙'

  return (
    <Card type='green' className={className}>
      <div className='flex flex-col gap-6 p-10'>
        <div className='text-xl font-semibold'>{cardTitle}</div>
        <div className='border border-gray-200' />
        <ul
          className={`space-y-1 ${
            isLongList && isTodayProblem ? 'max-h-48 overflow-y-scroll pr-1' : ''
          }`}
        >
          {lists.length === 0 ? (
            <li className='text-gray-400 text-center'>{emptyMessage}</li>
          ) : (
            <>
              {lists.map((list) => (
                <li key={list.id} className='mb-4 text-gray-700 hover:font-semibold cursor-pointer'>
                  {list.title}
                </li>
              ))}

              {isLongList && isStudyRule && (
                <li className='flex justify-end'>
                  <Link
                    href={`/study/${studyTitle}/notice`}
                    className='flex items-center gap-1 text-sm hover:text-green-middle'
                  >
                    <Plus size={12} />
                    더보기
                  </Link>
                </li>
              )}
            </>
          )}
        </ul>
      </div>
    </Card>
  )
}

export default StudyCard
