import Card from '@/app/(default)/_component/Card'
import type { RejectionCardProps } from '@/types/study'
import Image from 'next/image'
import formatDifficulty from '@/utils/formatDifficulty'
import ShowDay from '@/components/ShowDay'
import Button from '@/components/Button'

const RejectionCard = ({
  status = 'RECRUITING',
  icon,
  name,
  allMembers,
  members,
  difficultyLevels,
  mainMeetingDays,
  expireDay,
  message,
}: RejectionCardProps) => {
  return (
    <Card className='relative flex gap-4 p-10'>
      <aside className='flex flex-col gap-2 items-center'>
        <Image className='rounded-lg' src={icon} alt={icon} width={160} height={160} />
        <div className='flex gap-1 font-semibold whitespace-nowrap'>
          파티원
          <span>
            <span className='text-blue'>{members}</span>/{allMembers}
          </span>
        </div>
      </aside>

      <div className='flex flex-col w-[600px] gap-[6px]'>
        <div className='flex font-bold text-lg'>
          <span className='line-clamp-2'>{name}</span>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex gap-4 font-semibold text-sm whitespace-nowrap mb-2'>
            <div className='flex gap-2'>
              코딩테스트 레벨
              <span className='text-blue'>{formatDifficulty(difficultyLevels)}</span>
            </div>
            <div>|</div>
            <ShowDay days={mainMeetingDays} />
          </div>
          <div className='text-xs text-[#a2a2a2]'>
            {status === 'RECRUITING' ? `마감일 ${expireDay}` : ''}
          </div>
        </div>
        <div className='bg-gray-100 rounded-md p-4 text-sm flex gap-2'>
          <span className='font-semibold text-gray-600 shrink-0'>🙅 거절사유</span>
          <p className='text-gray-800'>{message}</p>
        </div>
      </div>

      <div className='absolute bottom-6 right-[40px] flex gap-2'>
        <Button variant='secondary' className='text-sm'>
          재신청
        </Button>
        <Button variant='outlined' className='text-sm'>
          확인
        </Button>
      </div>
    </Card>
  )
}

export default RejectionCard
