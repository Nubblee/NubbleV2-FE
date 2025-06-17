import type { AuthUserProps } from '@/types/auth'
import { languageOptions } from '@/config/study'
import { addressOptions } from '@/config/signup'
import TagGroup from '@/components/TagGroup/TagGroup'
import Select from '@/components/Select'
import Input from '@/components/Input/input'
import Link from 'next/link'

interface EditFormProps {
  user: AuthUserProps | null
}

const EditForm = ({ user }: EditFormProps) => {
  return (
    <div className='flex flex-col gap-8 w-[600px] '>
      <Input
        htmlFor='nickname'
        label='닉네임'
        variant='underline'
        value={user?.nickname}
        onChange={() => {}}
        className='py-3 border-gray-light caret-green-middle'
      />
      <Input
        htmlFor='email'
        label='이메일'
        variant='underline'
        value={user?.email}
        onChange={() => {}}
        className='py-3 border-gray-light caret-green-middle'
      />
      <TagGroup
        label='관심 언어'
        options={languageOptions}
        onChange={() => {}}
        labelClassName='flex text-sm text-gray-dark font-normal'
      />

      <div>
        <label className='flex text-sm text-gray-dark mb-1' htmlFor='address'>
          지역
        </label>
        <Select className='py-3' options={addressOptions} value='' onChange={() => {}} />
      </div>

      <div className='flex gap-2 items-center'>
        <label htmlFor='password' className='flex text-sm text-gray-dark mb-1'>
          비밀번호
        </label>
        <Link
          href={`/mypage/${user?.loginId}/profile/password`}
          className='text-sm bg-gray-middle py-1 px-2 text-gray-800 cursor-pointer hover:bg-gray-light'
        >
          변경하기
        </Link>
      </div>
    </div>
  )
}

export default EditForm
