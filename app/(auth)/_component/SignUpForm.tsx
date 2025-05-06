import Input from "@/components/Input/input";
import Logo from "@/components/Logo";

const SignUpForm = () => {
  return (
    <div className="flex flex-col w-[350px] gap-5 items-center">
      <Logo />
      <span className="text-center">가입정보를 입력해주세요.</span>
      <Input label="닉네임" variant="underline" />
      <Input type="email" label="이메일 주소" variant="underline" />
      <Input label="아이디" variant="underline" />
      <Input label="비밀번호" variant="underline" />
      <Input label="비밀번호 확인" variant="underline" />
      <Input label="주소" variant="underline" />
    </div>
  );
};

export default SignUpForm;
