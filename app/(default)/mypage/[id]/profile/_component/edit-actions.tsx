'use client'

import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

const EditActions = () => {
  const router = useRouter()

  return (
    <section aria-label='프로필 수정 동작 버튼' className='flex gap-2'>
      <Button type='button' variant='outlined' onClick={() => router.back()}>
        이전으로
      </Button>
      <Button type='submit' variant='secondary' onClick={() => {}}>
        수정하기
      </Button>
    </section>
  )
}

export default EditActions
