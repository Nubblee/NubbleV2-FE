import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

const EditActions = () => {
  const router = useRouter()

  return (
    <div className='flex gap-2'>
      <Button type='button' variant='outlined' onClick={() => router.back()}>
        이전으로
      </Button>
      <Button type='button' variant='secondary' onClick={() => {}}>
        수정하기
      </Button>
    </div>
  )
}

export default EditActions
