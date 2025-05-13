import Header from '@/app/(default)/_component/Header/Header'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='w-full'>{children}</main>
    </div>
  )
}
