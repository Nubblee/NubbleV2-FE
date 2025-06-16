import { fetchUser } from "@/api/auth/auth";
import { cookies } from "next/headers";
import ClientAuthProvider from "./client-auth-provider";

export default async function AuthProvier({
  children,
}: {
  children: React.ReactNode;
}) {
  //쿠키에 토큰이 있는지 확인 (로그인 상태 유무 판별)
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-session-id")?.value ?? null;

  //토큰이 있으면 해당 유저 정보 조회
  const user = token ? await fetchUser(token) : null;

  return <ClientAuthProvider initialUser={user}>{children}</ClientAuthProvider>;
}
