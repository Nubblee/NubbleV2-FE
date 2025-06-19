import { Input } from '@/components'

interface EditPasswordProps {
  password: string
  checkPassword: string
  onChangePassword: (field: 'password' | 'checkPassword', value: string) => void
}

const EditPassword = ({ password, checkPassword, onChangePassword }: EditPasswordProps) => {
  return (
    <section aria-labelledby='edit-password'>
      <h1 id='edit-password' className='text-2xl font-semibold mb-10'>
        비밀번호 변경
      </h1>
      <div className='flex flex-col gap-8 w-[600px]'>
        <Input
          htmlFor='password'
          label='세 비밀번호'
          variant='underline'
          type='password'
          value={password}
          onChange={(e) => onChangePassword('password', e.target.value)}
          className='py-3 border-gray-light caret-green-middle'
          placeholder='새 비밀번호를 입력해주세요.'
        />
        <Input
          htmlFor='check-password'
          label='새 비밀번호 확인'
          variant='underline'
          type='password'
          value={checkPassword}
          onChange={(e) => onChangePassword('checkPassword', e.target.value)}
          className='py-3 border-gray-light caret-green-middle'
          placeholder='새 비밀번호를 입력해주세요.'
        />
      </div>
    </section>
  )
}

export default EditPassword
