"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";
import { useNavItems } from "@/hooks/useNavItems";
import { useAuthStore } from "@/stores/useAuthStore";
import { fetchLogout } from "@/api/auth/auth";

const Header = () => {
  const clearUser = useAuthStore((state) => state.clearUser);
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

  return (
    <header className={`flex px-12 py-4 ${bgColor}`}>
      <div className="flex items-center justify-between max-w-screen-xl w-full mx-auto">
        <Logo color={logoColor} />
        <nav className="flex gap-6">
          <ul className="flex gap-6">
            {navItems.map(({ title, href, isButton }) => (
              <li
                key={title}
                className={`font-semibold ${textColor} hover:font-extrabold`}
              >
                {isButton ? (
                  <button className="cursor-pointer" onClick={handleLogout}>
                    {title}
                  </button>
                ) : (
                  <Link href={href ?? "/"}>{title}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
