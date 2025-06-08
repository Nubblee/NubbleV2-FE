import { useState } from "react";
import { fetchSignUp } from "@/api/auth/signup";
import { useRouter } from "next/navigation";

export const useSignUp = () => {
const router = useRouter()
  const [nickname, setNickName] = useState<string>('');
  const [loginId, setLoginId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checkPassword, setCheckPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [preferredArea, setPreferredArea] = useState<string>('');

  const invalidIdMessage = loginId.trim().length !== 0 ? '아이디는 4글자 이상이어야 합니다.' : '';
  const invalidPWDMessage = password.trim().length !== 0 ? "비밀번호는 8글자 이상이어야 하고 특수문자와 숫자를 포함해야 합니다." : ''
  let notEqualPwdMessage = checkPassword.trim().length !== 0 ? '비밀번호가 일치하지 않습니다.' : '';
  const equalPwdMessage = checkPassword.trim().length !== 0 ? '비밀번호가 일치합니다.' : '';


  // 비밀번호 유효성 검사 정규식
  const passwordRegex = /^[A-Za-z0-9@$!%*?&]+$/;
  const isPasswordValid = passwordRegex.test(password) && password.length >= 8;

  // 회원가입 API 호출
  const handleSubmit = async () => {
    try {
      await fetchSignUp({ loginId, nickname, password, preferredArea, email });
      router.push("/signup/interests");
    } catch (error) {
      console.error('회원가입 실패', error);
    }
  };

  // 비밀번호와 비밀번호 확인 입력값 일치 여부 체크
  const passwordIsMatch = password === checkPassword;

  //닉네임
  const handleNickName = (e: React.ChangeEvent<HTMLInputElement>) => setNickName(e.target.value);

  //아이디
  const handleSignUpId = (e: React.ChangeEvent<HTMLInputElement>) => setLoginId(e.target.value);

  //비밀번호
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  //비밀번호 확인
  const handleCheckPassword = (e: React.ChangeEvent<HTMLInputElement>) => setCheckPassword(e.target.value);

  //이메일
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  //지역
  const handlePreferredArea = (area: string) => setPreferredArea(area);

  return {
    nickname,
    loginId,
    password,
    checkPassword,
    email,
    preferredArea,
    invalidIdMessage,
    invalidPWDMessage,
    notEqualPwdMessage,
    equalPwdMessage,
    isPasswordValid, 
    passwordIsMatch, 
    handleNickName,
    handleSignUpId,
    handlePassword,
    handleCheckPassword,
    handleEmail,
    handlePreferredArea,
    handleSubmit
  };
};
