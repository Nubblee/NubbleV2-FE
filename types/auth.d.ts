//회원 인증 인터페이스
export interface AuthUserProps {
  loginId: string;
  nickname: string;
  password: string;
  preferredArea?: string;
  email: string;
}

type UserLoginType = Pick<AuthUserProps, "loginId" | "password">;
