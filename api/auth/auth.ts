import { AuthInterestsProps, AuthUserProps, UserLoginType } from "@/types/auth";
import { apiClient, ServerClient } from "../apiClient";
import { apiEndPoints } from "../apiEndPoints";
import axios from "axios";

//회원가입
export const fetchSignUp = async ({
  loginId,
  nickname,
  password,
  preferredArea,
  email,
}: AuthUserProps) => {
  try {
    const res = await apiClient.post(apiEndPoints.AUTH.SIGN_UP, {
      loginId,
      nickname,
      password,
      preferredArea,
      email,
    });
    return res.data;
  } catch (error) {
    console.error("회원가입 실패", error);
  }
};

//회원가입시 회원 선호 코딩테스트 정보 전송
export const fetchUserInterest = async ({
  interestsLanguages,
  currentLevels,
  preferredPlatforms,
}: AuthInterestsProps) => {
  try {
    const res = await apiClient.put(apiEndPoints.AUTH.INTERESTS, {
      interestsLanguages,
      currentLevels,
      preferredPlatforms,
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data) {
        throw new Error(error.response.data.detail);
      }
    }
    throw new Error("정보 전송 도중 오류가 발생했습니다.");
  }
};

//로그인
export const fetchLogin = async ({ loginId, password }: UserLoginType) => {
  try {
    const res = await apiClient.post(
      apiEndPoints.AUTH.LOGIN,
      {
        loginId,
        password,
      },
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data) {
        throw new Error(error.response.data.detail);
      }
    }
    throw new Error("로그인 중 오류가 발생했습니다.");
  }
};

//아이디 및 닉네임 중복 유효성 검사
export const fetchAvailabilityLogin = async ({
  loginId,
  nickname,
}: {
  loginId?: string;
  nickname?: string;
}) => {
  try {
    const res = await apiClient.get(apiEndPoints.AUTH.AVAILABILITY_USER, {
      params: {
        loginId,
        nickname,
      },
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data) {
        throw new Error(error.response.data.detail);
      }
    }
  }
};

//토큰으로 인증 정보 조회
export const fetchUser = async (token: string) => {
  const client = typeof window === "undefined" ? ServerClient : apiClient;
  try {
    const res = await client.get(apiEndPoints.AUTH.USER, {
      headers: {
        Cookie: `auth-session-id=${token}`,
      },
    });
    return res.data.user;
  } catch (error) {
    console.log("failed to fetch user", error);
  }
};

//로그아웃
export const fetchLogout = async () => {
  try {
    const res = await apiClient.post(
      apiEndPoints.AUTH.LOGOUT,
      {},
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
