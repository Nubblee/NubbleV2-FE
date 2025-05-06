import Logo from "@/components/Logo";
import SignUpForm from "../_component/SignUpForm";

const SignUp = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10">
      <Logo width={200} />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
