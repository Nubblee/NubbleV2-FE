import { UserInfo, TabContent, MypageTabs } from './_component'

const page = () => {
  return (
    <div className='flex flex-col py-6 px-14 gap-10'>
      <UserInfo />
      <MypageTabs />
      <TabContent />
    </div>
  )
}

export default page
