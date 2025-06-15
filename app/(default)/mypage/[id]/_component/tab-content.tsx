'use client'

import { ApplicationStatus, StudyManagement, StudyStatus } from '.'
import { useSearchParams } from 'next/navigation'

const TabContent = () => {
  const searchParams = useSearchParams()
  const tab = searchParams.get('tab') || '내 스터디 현황'

  if (tab === '스터디 관리') {
    return <StudyManagement />
  }

  if (tab === '신청 현황') {
    return <ApplicationStatus />
  }

  return <StudyStatus />
}

export default TabContent
