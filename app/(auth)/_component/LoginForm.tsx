"use client";

import Button from "@/components/Button";
import Input from "@/components/Input/input";
import { useLogin } from "@/hooks/useLogin";

const LoginForm = () => {
  const {
    loginId,
    password,
    errorMessage,
    handleLoginId,
    handleLoginPWD,
    handleSubmitLogin,
  } = useLogin();
  return (
    <div className="flex flex-col mt-8 w-[350px] gap-3">
      <Input
        value={loginId}
        onChange={handleLoginId}
        label="아이디"
        placeholder="아이디를 입력해주세요."
        className="border-gray-light py-3 px-3"
      />
      <Input
        type="password"
        value={password}
        onChange={handleLoginPWD}
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        className="border-gray-light py-3 px-3"
      />
      <Button className="w-[350px] mt-[16px] py-3" onClick={handleSubmitLogin}>
        로그인
      </Button>
      {errorMessage ?? <span className="text-red">{errorMessage}</span>}
    </div>
  );
};

export default LoginForm;
