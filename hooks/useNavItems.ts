import { navItems } from "@/config/nav";
import { useAuthStore } from "@/stores/useAuthStore";

export const useNavItems = () => {
  const user = useAuthStore((state) => state.user);

  const authItems = user
    ? [{ title: "로그아웃", href: "", isButton: true }]
    : [{ title: "로그인", href: "/login", isButton: false }];

  return [...navItems, ...authItems];
};
