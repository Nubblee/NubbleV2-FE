"use client";

import Image from "next/image";
import clsx from "clsx";

type ProfileImageType = "circle" | "rounded";

interface ProfileImageProps {
  src: string;
  alt?: string;
  size?: number;
  type?: ProfileImageType;
  className?: string;
}

const ProfileImage = ({
  src,
  alt = "프로필 이미지",
  size = 48,
  type = "circle",
  className,
}: ProfileImageProps) => {
  const roundedClass = type === "circle" ? "rounded-full" : "rounded-lg";

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={clsx(roundedClass, className)}
    />
  );
};

export default ProfileImage;
