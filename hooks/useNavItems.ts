import { navItems } from "@/config/nav";
import { useAuthStore } from "@/stores/useAuthStore";

export const useNavItems = () => {
  const user = useAuthStore((state) => state.user);

  const authItems = user
    ? [
        { title: `${user.nickname} 프로필`, href: `/mypage/${user.loginId}` },
        { title: "로그아웃", isButton: true },
      ]
    : [{ title: "로그인", href: "/login" }];

  return [...navItems, ...authItems];
};
