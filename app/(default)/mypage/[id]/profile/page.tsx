'use client'

import { useAuthStore } from '@/stores/useAuthStore'
import Divider from '@/components/divider'
import { EditActions, EditForm, EditImage } from './_component'

const Page = () => {
  const user = useAuthStore((state) => state.user)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // 기능 구현은 추후 예정
  }

  return (
    <div className='flex w-full justify-center'>
      <form className='flex flex-col w-[1000px] items-center gap-10' onSubmit={handleSubmit}>
        <EditImage user={user} onChangeImage={() => {}} />
        <Divider />
        <EditForm user={user} />
        <Divider />
        <EditActions />
      </form>
    </div>
  )
}

export default Page
