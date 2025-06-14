"use client";

import Loading from "@/app/(default)/_component/Loading";
import { useAuthStore } from "@/stores/useAuthStore";
import { redirect } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function AuthRedirectProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { user } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    if (user) {
      redirect("/");
    }
  }, [user]);

  if (loading) return <Loading />;

  if (user) return null;

  return <>{children}</>;
}
