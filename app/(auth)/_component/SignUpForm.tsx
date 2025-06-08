"use client";
import Button from "@/components/Button";
import Input from "@/components/Input/input";
import Select from "@/components/Select";
import TagButton from "@/components/TagGroup/TagButton";
import { addressOptions } from "@/config/signup";
import { useSignUp } from "@/hooks/useSignUp";

const SignUpForm = () => {
  const {
     nickname,
    loginId,
    password,
    checkPassword,
    email,
    preferredArea,
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
  } = useSignUp()
 

  return (
    <div className="flex flex-col w-[350px] gap-5 items-center caret-green-middle">
      <Input
        value={nickname}
        onChange={handleNickName}
        size={20}
        label="닉네임 *"
        className="py-2 border-gray-light"
        placeholder="닉네임을 입력하세요."
      />

      <div className="w-full h-[67px] relative">
        <Input
          value={loginId}
          onChange={handleSignUpId}
          isInvalid={loginId.length < 4}
          size={20}
          label="아이디 *"
          className="py-2 absolute left-0 bottom-0 border-gray-light caret-green-middle"
          placeholder="아이디를 입력하세요."
        />
        <TagButton className="absolute w-[83px] bottom-1.5 right-2 cursor-pointer z-10">
          중복확인
        </TagButton>
      </div>

      <Input
        value={password}
        onChange={handlePassword}
        isInvalid={!isPasswordValid}
        invalidMessage={invalidPWDMessage}
        className="py-2 border-gray-light caret-green-middle"
        type="password"
        label="비밀번호 *"
        placeholder="비밀번호를 입력하세요."
      />
      <Input
        value={checkPassword}
        onChange={handleCheckPassword}
        isInvalid={!passwordIsMatch}
        validMessage={equalPwdMessage}
        invalidMessage={notEqualPwdMessage}
        className="py-2 border-gray-light caret-green-middle"
        type="password"
        label="비밀번호 확인 *"
        placeholder="비밀번호를 입력하세요."
      />

      <div className="flex gap-1 w-full">
        <Input
        value={email}
        onChange={handleEmail}
          label="이메일 *"
          placeholder="이메일을 입력하세요."
          type="email"
          className="py-2 border-gray-light flex-grow caret-green-middle"
        />
      </div>

      <div className="w-full">
        <label className="flex text-sm text-gray-dark mb-1" htmlFor="address">
          지역
        </label>
        <Select options={addressOptions} value={preferredArea} onChange={handlePreferredArea} />
      </div>
      <Button className="w-full py-3"  disabled={!loginId || !email || !password || !checkPassword || !preferredArea || password !== checkPassword} onClick={handleSubmit}>
        가입하기
      </Button>
    </div>
  );
};

export default SignUpForm;
