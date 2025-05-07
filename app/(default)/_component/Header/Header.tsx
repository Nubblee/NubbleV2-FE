'use client'

import Link from 'next/link'
import Logo from '@/components/Logo'
import { navItems } from '@/config/nav'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const bgColor = isHome ? 'bg-green-middle' : ''
  const logoColor = isHome ? 'white' : 'green'
  const textColor = isHome ? 'text-white' : 'text-green-middle'

  return (
    <header className={`flex items-center justify-between px-12 py-4 ${bgColor}`}>
      <Logo color={logoColor} />
      <nav className='flex gap-6'>
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={`font-semibold ${textColor} hover:font-extrabold`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
