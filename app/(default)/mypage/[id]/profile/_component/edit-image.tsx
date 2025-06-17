'use client'

import ProfileImage from '@/components/ProfileImage'
import type { AuthUserProps } from '@/types/auth'
import { Camera } from 'lucide-react'
import { ChangeEvent, useRef, useState } from 'react'

interface EditImageProps {
  user: AuthUserProps | null
  onChangeImage: (file: File) => void
}

const EditImage = ({ user, onChangeImage }: EditImageProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string)
    }
    reader.readAsDataURL(file)

    onChangeImage(file)
  }

  const profileImageSrc = previewUrl ?? user?.profileImg

  return (
    <section
      className='relative group rounded-full overflow-hidden'
      aria-label='프로필 이미지 변경'
    >
      <ProfileImage src={profileImageSrc} alt={`${user?.nickname} 의 프로필 이미지`} size={160} />
      <div
        className='absolute inset-0 bg-black/50 opacity-50 group-hover:opacity-100 flex items-center justify-center transition cursor-pointer'
        onClick={handleImageClick}
      >
        <Camera size={50} strokeWidth={1} color='white' />
      </div>
      <input
        type='file'
        accept='image/*'
        className='hidden'
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </section>
  )
}

export default EditImage
