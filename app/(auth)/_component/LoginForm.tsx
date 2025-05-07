import Button from "@/components/Button";
import Input from "@/components/Input/input";

const LoginForm = () => {
  return (
    <div className="flex flex-col mt-10 w-[350px] gap-3">
      <Input
        label="이메일"
        placeholder="이메일을 입력해주세요."
        className="border-gray-light py-2 px-3"
      />
      <Input
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        className="border-gray-light py-2 px-3"
      />
      <Button className="w-[350px] mt-[16px]">로그인</Button>
    </div>
  );
};

export default LoginForm;
