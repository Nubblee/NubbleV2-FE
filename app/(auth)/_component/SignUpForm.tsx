import Button from "@/components/Button";
import Input from "@/components/Input/input";
import Select from "@/components/Select";
import TagButton from "@/components/TagGroup/TagButton";

const SignUpForm = () => {
  const emailOptions = [
    { label: "직접입력", value: " " },
    { label: "naver.com", value: "naver.com" },
    { label: "gmail.com", value: "gmail.com" },
    { label: "hanmail.com", value: "hanmail.com" },
    { label: "kakao.com", value: "kakao.com" },
  ];

  return (
    <div className="flex flex-col w-[350px] gap-5 items-center">
      <Input
        label="닉네임"
        className="border-gray-light"
        variant="underline"
        placeholder="닉네임을 입력하세요."
      />
      <div className="w-full h-[54px] relative">
        <TagButton className="absolute w-[83px] bottom-1 right-0 cursor-pointer hover:bg-green-dark">
          중복확인
        </TagButton>
        <Input
          label="아이디"
          className="absolute left-0 bottom-0 border-gray-light"
          placeholder="아이디를 입력하세요."
          variant="underline"
        />
      </div>
      <Input
        className="py-3 border-gray-light"
        label="비밀번호"
        placeholder="비밀번호를 입력하세요."
      />
      <Input
        className="py-3 border-gray-light"
        label="비밀번호 확인"
        placeholder="비밀번호를 입력하세요."
      />
      <div className="flex items-center gap-1 w-full">
        <Input
          label="이메일"
          type="email"
          className="py-2 border-gray-light flex-grow"
        />
        <span className="mt-6">@</span>
        <div className="w-full mt-6 flex gap-2">
          {/* {selectItem === " " && (
            <Input
              className="py-2 border-gray-light flex-1"
              placeholder="도메인을 입력하세요"
            />
          )} */}
          <Select options={emailOptions} />
        </div>
      </div>
      <Input label="주소" className="py-3 border-gray-light" />
      <Button className="w-full py-3">회원가입</Button>
    </div>
  );
};

export default SignUpForm;
