import Card from '@/app/(default)/_component/Card'
import ProfileImage from '@/components/ProfileImage'
import Link from 'next/link'
import { Pencil } from 'lucide-react'

const userData = {
  id: 'ssuminii',
  nickname: '수미니',
  img: '/nubble.png',
  email: 'ssuminii@gmail.com',
}

const UserInfo = () => {
  return (
    <Card type='green' className='relative w-full p-12 flex items-center gap-10'>
      <Link
        href={`/mypage/${userData.id}/profile`}
        className='absolute top-6 right-6 text-sm font-medium flex items-center gap-2 text-green-dark hover:font-bold'
      >
        프로필 관리 <Pencil size={14} />
      </Link>

      <ProfileImage
        src={userData.img}
        alt={`${userData.nickname}님의 프로필 이미지`}
        type='rounded'
        size={160}
      />

      <section aria-label='사용자 정보'>
        <h2 className='text-xl font-bold flex items-baseline gap-1'>
          <span className='text-2xl mb-4'>{userData.nickname}</span>
          <span className='text-lg font-medium'>님</span>
        </h2>
        <p className='text-gray-middle'>{userData.email}</p>
      </section>
    </Card>
  )
}

export default UserInfo
