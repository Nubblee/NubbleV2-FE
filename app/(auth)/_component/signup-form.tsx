"use client";
import Button from "@/components/Button";
import Input from "@/components/Input/input";
import Select from "@/components/Select";
import { addressOptions } from "@/config/signup";
import { useSignUp } from "@/hooks/useSignUp";
import {
  invalidEmailMessage,
  invalidPWDMessage,
  isEqualPwdMessage,
  isPasswordMatch,
  isValidEmail,
  isValidPassword,
} from "@/utils/validAuth";
import { useEffect, useRef, useState } from "react";

const SignUpForm = () => {
  const {
    nickname,
    loginId,
    password,
    checkPassword,
    email,
    preferredArea,
    invalidId,
    invalidNickName,
    disabledSignUp,
    handleNickName,
    handleSignUpId,
    handleAvailableNickName,
    handleAvailableId,
    handlePassword,
    handleCheckPassword,
    handleEmail,
    handlePreferredArea,
    handleSubmit,
  } = useSignUp();

  const { validCheckPwdMessage, invalidCheckPwdMessage } = isEqualPwdMessage(
    password,
    checkPassword
  );

  const nicknameRef = useRef<HTMLInputElement>(null);
  const loginIdRef = useRef<HTMLInputElement>(null);

  const [isNickFocused, setIsNickFocused] = useState(false);
  const [isIdFocused, setIsIdFocused] = useState(false);

  //닉네임, 아이디 인풋 창 밖으로 커서 클릭시 유효성 검사 진행
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isNickFocused &&
        nicknameRef.current &&
        !nicknameRef.current.contains(e.target as Node)
      ) {
        handleAvailableNickName({ nickname });
        setIsNickFocused(false);
      }

      if (
        isIdFocused &&
        loginIdRef.current &&
        !loginIdRef.current.contains(e.target as Node)
      ) {
        handleAvailableId({ loginId });
        setIsIdFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [nickname, loginId, isNickFocused, isIdFocused]);

  return (
    <div className="flex flex-col w-[350px] gap-5 items-center caret-green-middle">
      <Input
        ref={nicknameRef}
        onFocus={() => setIsNickFocused(true)}
        value={nickname}
        onChange={handleNickName}
        isInvalid={!invalidNickName.state}
        invalidMessage={invalidNickName.message}
        size={20}
        label="닉네임 *"
        className="py-3 border-gray-light"
        placeholder="닉네임을 입력하세요."
      />

      <Input
        ref={loginIdRef}
        onFocus={() => setIsIdFocused(true)}
        value={loginId}
        onChange={handleSignUpId}
        isInvalid={!invalidId.state}
        invalidMessage={invalidId.message}
        size={20}
        label="아이디 *"
        className="py-3 border-gray-light caret-green-middle"
        placeholder="아이디를 입력하세요."
      />

      <Input
        value={password}
        onChange={handlePassword}
        isInvalid={!isValidPassword(password)}
        invalidMessage={invalidPWDMessage(password)}
        size={15}
        className="py-3 border-gray-light caret-green-middle"
        type="password"
        label="비밀번호 *"
        placeholder="비밀번호를 입력하세요."
      />
      <Input
        value={checkPassword}
        onChange={handleCheckPassword}
        isInvalid={!isPasswordMatch(password, checkPassword)}
        validMessage={validCheckPwdMessage}
        invalidMessage={invalidCheckPwdMessage}
        className="py-3 border-gray-light caret-green-middle"
        type="password"
        label="비밀번호 확인 *"
        placeholder="비밀번호를 입력하세요."
      />

      <div className="flex gap-1 w-full">
        <Input
          value={email}
          isInvalid={!isValidEmail(email)}
          invalidMessage={invalidEmailMessage(email)}
          onChange={handleEmail}
          label="이메일 *"
          placeholder="이메일을 입력하세요."
          type="email"
          className="py-3 border-gray-light flex-grow caret-green-middle"
        />
      </div>

      <div className="w-full">
        <label className="flex text-sm text-gray-dark mb-1" htmlFor="address">
          지역
        </label>
        <Select
          className="py-3"
          options={addressOptions}
          value={preferredArea}
          onChange={handlePreferredArea}
        />
      </div>
      <Button
        className="w-full py-3"
        disabled={disabledSignUp}
        onClick={handleSubmit}
      >
        가입하기
      </Button>
    </div>
  );
};

export default SignUpForm;
