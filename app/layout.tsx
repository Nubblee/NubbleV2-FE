import type { Metadata } from 'next'
import './globals.css'
import { pretendard } from './fonts'
import ToastContainer from '@/components/ToastContainer'
import AuthProvier from '@/components/auth/auth-provier'

export const metadata: Metadata = {
  title: 'Nubble',
  description: '새롭게 태어난 너블~',
  icons: {
    icon: '/nubble.png',
  },
}

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${pretendard.variable} font-pretendard`}>
        <AuthProvier>
          {children}
          {modal}
          <ToastContainer />
        </AuthProvier>
      </body>
    </html>
  )
}
