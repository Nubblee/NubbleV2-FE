//회원 인증 인터페이스
export interface AuthUserProps {
  loginId: string;
  nickname: string;
  password: string;
  preferredArea?: string;
  email: string;
  profileImg?: string;
}

//회원 선호 코테 정보 인터페이스
export interface AuthInterestsProps {
  interestsLanguages: string[];
  currentLevels: string[];
  preferredPlatforms: string[];
}

type UserLoginType = Pick<AuthUserProps, "loginId" | "password">;
