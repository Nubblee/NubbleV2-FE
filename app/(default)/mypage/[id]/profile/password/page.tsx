'use client'

import { useAuthStore } from '@/stores/useAuthStore'
import { EditPassword, EditImage, EditActions } from '../_component'
import { Divider } from '@/components'
import { useState } from 'react'

const Page = () => {
  const user = useAuthStore((state) => state.user)

  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')

  const handleChangePassword = (field: 'password' | 'checkPassword', value: string) => {
    if (field === 'password') setPassword(value)
    else setCheckPassword(value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // 기능 구현은 추후 예정
  }

  return (
    <div className='flex w-full justify-center'>
      <form onSubmit={handleSubmit} className='flex flex-col w-[1000px] items-center gap-10'>
        <EditImage user={user} onChangeImage={() => {}} />
        <Divider />
        <EditPassword
          password={password}
          checkPassword={checkPassword}
          onChangePassword={handleChangePassword}
        />
        <Divider />
        <EditActions />
      </form>
    </div>
  )
}

export default Page
