import { AuthUserProps, UserLoginType } from "@/types/auth";
import { apiClient } from "../apiClient";
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
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
    }
    throw new Error("로그인 중 오류가 발생했습니다.");
  }
};
