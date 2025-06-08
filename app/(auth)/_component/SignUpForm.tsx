"use client";
import Button from "@/components/Button";
import Input from "@/components/Input/input";
import Select from "@/components/Select";
import TagButton from "@/components/TagGroup/TagButton";
import { addressOptions, emailOptions } from "@/config/signup";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/signup/interests");
  };

  return (
    <div className="flex flex-col w-[350px] gap-5 items-center">
      <Input
        label="닉네임 *"
        className="py-3 border-gray-light"
        placeholder="닉네임을 입력하세요."
      />
      <div className="w-full h-[76px] relative">
        <Input
          label="아이디 *"
          className="py-3 absolute left-0 bottom-0 border-gray-light"
          placeholder="아이디를 입력하세요."
        />
        <TagButton className="absolute w-[83px] bottom-2.5 right-2 cursor-pointer z-10">
          중복확인
        </TagButton>
      </div>
      <Input
        className="py-3 border-gray-light"
        type="password"
        label="비밀번호 *"
        placeholder="비밀번호를 입력하세요."
      />
      <Input
        className="py-3 border-gray-light"
        type="password"
        label="비밀번호 확인 *"
        placeholder="비밀번호를 입력하세요."
      />
      <div className="flex gap-1 w-full">
        <Input
          label="이메일 *"
          placeholder="이메일을 입력하세요."
          type="email"
          className="py-2 border-gray-light flex-grow"
        />
        <div className="w-full mt-6.5">
          {/* {selectItem === " " && (
            <Input
              className="py-2 border-gray-light flex-1"
              placeholder="도메인을 입력하세요"
            />
          )} */}
          <Select options={emailOptions} />
        </div>
      </div>
      <div className="w-full">
        <label className="flex text-sm text-gray-dark mb-1" htmlFor="address">
          지역
        </label>
        <Select options={addressOptions} />
      </div>
      <Button className="w-full py-3t" onClick={handleSubmit}>
        가입하기
      </Button>
    </div>
  );
};

export default SignUpForm;
