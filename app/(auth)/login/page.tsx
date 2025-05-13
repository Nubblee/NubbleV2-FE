import LoginForm from "../_component/LoginForm";
import AuthLink from "../_component/AuthLink";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <LoginForm />
      <div className="flex gap-2 my-3 text-gray-light text-md font-light">
        <AuthLink href="/signup">회원가입</AuthLink>
        <span>|</span>
        <AuthLink href={"/forgot-password"}>비밀번호 찾기</AuthLink>
      </div>
    </div>
  );
};

export default page;
