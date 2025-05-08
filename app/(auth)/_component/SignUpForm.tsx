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

  const addressOptions = [
    { label: "서울특별시", value: "seoul" },
    { label: "부산광역시", value: "busan" },
    { label: "대구광역시", value: "daegu" },
    { label: "인천광역시", value: "incheon" },
    { label: "광주광역시", value: "gwangju" },
    { label: "대전광역시", value: "daejeon" },
    { label: "울산광역시", value: "ulsan" },
    { label: "세종특별자치시", value: "sejong" },
    { label: "경기도", value: "gyeonggi" },
    { label: "강원도", value: "gangwon" },
    { label: "충청북도", value: "chungbuk" },
    { label: "충청남도", value: "chungnam" },
    { label: "전라북도", value: "jeonbuk" },
    { label: "전라남도", value: "jeonnam" },
    { label: "경상북도", value: "gyeongbuk" },
    { label: "경상남도", value: "gyeongnam" },
    { label: "제주특별자치도", value: "jeju" },
  ];

  return (
    <div className="flex flex-col w-[350px] gap-5 items-center">
      <Input
        label="닉네임 *"
        className="border-gray-light"
        variant="underline"
        placeholder="닉네임을 입력하세요."
      />
      <div className="w-full h-[54px] relative">
        <TagButton className="absolute w-[83px] bottom-1 right-0 cursor-pointer hover:bg-green-dark">
          중복확인
        </TagButton>
        <Input
          label="아이디 *"
          className="absolute left-0 bottom-0 border-gray-light"
          placeholder="아이디를 입력하세요."
          variant="underline"
        />
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
      <div className="flex items-center gap-1 w-full">
        <Input
          label="이메일 *"
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
      <div className="w-full">
        <label className="text-sm text-gray-dark" htmlFor="address">
          주소
        </label>
        <Select options={addressOptions} />
      </div>
      <Button className="w-full py-3">가입하기</Button>
    </div>
  );
};

export default SignUpForm;
