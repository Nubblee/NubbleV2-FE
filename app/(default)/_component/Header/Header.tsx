"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";
import { useNavItems } from "@/hooks/useNavItems";
import { useAuthStore } from "@/stores/useAuthStore";
import { fetchLogout } from "@/api/auth/auth";
import ProfileImage from "@/components/ProfileImage";
import { useState } from "react";
import { DropDown } from "./dropdown";

const Header = () => {
  const { clearUser, user } = useAuthStore();
  const [isDropDown, setIsDropDown] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navItems = useNavItems();

  const bgColor = isHome ? "bg-green-middle" : "";
  const logoColor = isHome ? "white" : "green";
  const textColor = isHome ? "text-white" : "text-green-middle";

  const handleLogout = async () => {
    try {
      await fetchLogout();
      clearUser();
    } catch (error) {
      console.error("로그아웃 실패", error);
    }
  };

  const loginDropDown = [
    { label: "마이페이지", link: `/mypage/${user?.nickname}` },
    { label: "로그아웃", onClick: handleLogout },
  ];

  return (
    <header className={`flex px-12 py-4 ${bgColor}`}>
      <div className="flex items-center justify-between  w-full mx-auto">
        <Logo color={logoColor} />
        <nav className="flex gap-6">
          <ul className="flex gap-6 items-center">
            {navItems.map(({ title, href, isButton }) => (
              <li
                key={title}
                className={`font-semibold ${textColor} hover:font-extrabold`}
              >
                {isButton ? (
                  <button
                    className="cursor-pointer relative"
                    onClick={() => setIsDropDown((prev) => !prev)}
                  >
                    <ProfileImage
                      src={user?.profileImageUrl}
                      alt={user?.nickname}
                      size={38}
                    />
                  </button>
                ) : (
                  <Link href={href ?? "/"}>{title}</Link>
                )}
              </li>
            ))}
          </ul>
          {isDropDown && (
            <DropDown
              lists={loginDropDown}
              onClose={() => setIsDropDown(false)}
            />
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
