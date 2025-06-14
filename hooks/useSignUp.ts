import { useState } from "react";
import { fetchAvailabilityLogin, fetchSignUp } from "@/api/auth/auth";
import { useRouter } from "next/navigation";

export const useSignUp = () => {
  const router = useRouter();
  const [nickname, setNickName] = useState<string>("");
  const [loginId, setLoginId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [preferredArea, setPreferredArea] = useState<string>("");
  const [invalidId, setInvalidId] = useState({
    state: false,
    message: "",
  });
  const [invalidNickName, setinvalidNickName] = useState({
    state: false,
    message: "",
  });

  const invalidEmailMessage =
    email.trim().length !== 0 ? "올바른 이메일을 입력해주세요." : "";
  const invalidPWDMessage =
    password.trim().length !== 0
      ? "비밀번호는 8글자 이상이어야 하고 특수문자와 숫자를 포함해야 합니다."
      : "";
  const notEqualPwdMessage =
    checkPassword.trim().length !== 0 ? "비밀번호가 일치하지 않습니다." : "";
  const equalPwdMessage =
    checkPassword.trim().length !== 0 ? "비밀번호가 일치합니다." : "";
  const disabledSignUp =
    !loginId ||
    !email ||
    !password ||
    !checkPassword ||
    !preferredArea ||
    password !== checkPassword;

  // 비밀번호 유효성 정규식
  const passwordRegex = /^[A-Za-z0-9@$!%*?&]+$/;
  // 이메일 유효성 정규식
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isPasswordValid = passwordRegex.test(password) && password.length >= 8;
  const isEmailValid = emailRegex.test(email);

  // 비밀번호와 비밀번호 확인 입력값 일치 여부 체크
  const passwordIsMatch = password === checkPassword;

  //닉네임 중복확인
  const handleAvailableNickName = async ({
    nickname,
  }: {
    nickname: string;
  }) => {
    try {
      const res = await fetchAvailabilityLogin({ nickname });
      if (res.isAvailable === false) {
        setinvalidNickName({
          state: res.isAvailable,
          message: res.message,
        });
      } else {
        setinvalidNickName({
          state: true,
          message: "",
        });
      }
    } catch (error) {
      if (nickname.trim().length === 0) {
        setinvalidNickName({
          state: false,
          message: "닉네임을 입력해주세요.",
        });
      } else {
        setinvalidNickName({
          state: false,
          message: "닉네임을 확인하는 도중 오류가 발생했습니다.",
        });
        throw error;
      }
    }
  };

  //아이디 중복확인
  const handleAvailableId = async ({ loginId }: { loginId: string }) => {
    try {
      const res = await fetchAvailabilityLogin({ loginId });
      if (res.isAvailable === false) {
        setInvalidId({
          state: res.isAvailable,
          message: res.message,
        });
      } else {
        setInvalidId({
          state: true,
          message: "",
        });
      }
    } catch (error) {
      if (loginId.trim().length === 0) {
        setInvalidId({
          state: false,
          message: "아이디를 입력해주세요.",
        });
      } else {
        setInvalidId({
          state: false,
          message: "아이디를 확인하는 도중 오류가 발생했습니다.",
        });
        throw error;
      }
    }
  };

  // 회원가입 요청
  const handleSubmit = async () => {
    try {
      await fetchSignUp({ loginId, nickname, password, preferredArea, email });
      router.push("/signup/interests");
    } catch (error) {
      console.error("회원가입 실패", error);
    }
  };

  //닉네임
  const handleNickName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNickName(e.target.value);

  //아이디
  const handleSignUpId = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLoginId(e.target.value);

  //비밀번호
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  //비밀번호 확인
  const handleCheckPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCheckPassword(e.target.value);

  //이메일
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  //지역
  const handlePreferredArea = (area: string) => setPreferredArea(area);

  return {
    nickname,
    loginId,
    password,
    checkPassword,
    email,
    preferredArea,
    invalidId,
    invalidNickName,
    invalidEmailMessage,
    invalidPWDMessage,
    notEqualPwdMessage,
    equalPwdMessage,
    isPasswordValid,
    isEmailValid,
    passwordIsMatch,
    disabledSignUp,
    handleNickName,
    handleSignUpId,
    handleAvailableId,
    handleAvailableNickName,
    handlePassword,
    handleCheckPassword,
    handleEmail,
    handlePreferredArea,
    handleSubmit,
  };
};
