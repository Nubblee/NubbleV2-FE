"use client";

import { useAuthStore } from "@/stores/useAuthStore";
import { AuthUserProps } from "@/types/auth";
import { useEffect } from "react";

export default function ClientAuthProvider({
  children,
  initialUser,
}: {
  children: React.ReactNode;
  initialUser: AuthUserProps | null;
}) {
  const { setUser } = useAuthStore();

  useEffect(() => {
    if (initialUser) {
      setUser(initialUser);
    }
  }, [initialUser, setUser]);

  return <>{children}</>;
}
