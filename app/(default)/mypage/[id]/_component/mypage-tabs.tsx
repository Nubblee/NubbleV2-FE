'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import clsx from 'clsx'

const tabs = ['내 스터디 현황', '스터디 관리', '신청 현황'] as const

const MypageTabs = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const currentTab = searchParams.get('tab') || tabs[0]

  const handleClick = (tab: string) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('tab', tab)
    router.push(`?${newParams.toString()}`)
  }

  return (
    <div className='flex space-x-6 border-b border-gray-200 justify-center'>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleClick(tab)}
          className={clsx(
            'pb-2 font-semibold text-xl cursor-pointer',
            currentTab === tab
              ? 'border-b-2 border-green-middle text-green-middle'
              : 'text-gray-400 hover:text-gray-dark'
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default MypageTabs
