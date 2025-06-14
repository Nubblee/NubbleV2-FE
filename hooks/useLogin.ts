import { useState } from "react";
import { fetchLogin } from "@/api/auth/auth";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";

export const useLogin = () => {
  const router = useRouter();
  const { setUser } = useAuthStore();

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //로그인 아이디 입력
  const handleLoginId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginId(e.target.value);
  };

  //로그인 비밀번호 입력
  const handleLoginPWD = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  //로그인 요청 및 성공 시 정보 저장
  const handleSubmitLogin = async () => {
    try {
      const res = await fetchLogin({ loginId, password });
      setUser(res.user);

      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("로그인 중 에러가 발생했습니다 다시 시도해주세요.");
      }
    }
  };

  return {
    loginId,
    password,
    errorMessage,
    handleLoginId,
    handleLoginPWD,
    handleSubmitLogin,
  };
};
