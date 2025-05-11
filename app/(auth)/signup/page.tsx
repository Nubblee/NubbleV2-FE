import SignUpForm from "../_component/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm my-5 mb-10"> * 는 필수 입력값 입니다.</span>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
