import Image from 'next/image'
import Link from 'next/link'

type ColorType = 'white' | 'green'

interface LogoProps {
  color?: ColorType
  width?: number
  linkable?: boolean
}

const Logo = ({ color = 'green', width = 200, linkable = true }: LogoProps) => {
  const src = color === 'green' ? '/logo/nubble-green-logo.png' : '/logo/nubble-white-logo.png'
  const logo = <Image src={src} alt='Nubble Logo' width={width} height={width * 0.3} priority />

  return linkable ? (
    <Link href='/' className='inline-block cursor-pointer'>
      {logo}
    </Link>
  ) : (
    logo
  )
}

export default Logo
