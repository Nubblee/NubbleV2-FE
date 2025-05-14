import StudyRegisterTag from "@/app/(default)/studyRegister/_component/studyRegisterTag";
import Input from "@/components/Input/input";
import Button from "@/components/Button";

const studyRegister = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-10">
      {/* 제목 */}
      <div className="mb-6 w-full max-w-[600px]">
        <Input
          id="title"
          placeholder="스터디 제목을 입력해주세요"
          className="py-3 text-xl font-semibold border-gray-light"
        />
      </div>

      {/* 태그 및 설정 */}
      <StudyRegisterTag />

      {/* 스터디 소개 */}
      <div className="mt-10 w-full max-w-[600px]">
        <label
          htmlFor="introduction"
          className="font-bold text-black block mb-2"
        >
          스터디 소개 <span className="text-red">*</span>
        </label>
        <textarea
          id="introduction"
          placeholder="스터디를 간략하게 소개해주세요"
          className="w-full h-[200px] p-3 border border-gray-light rounded-md resize-none"
        />
      </div>

      {/* 스터디 신청 양식 */}
      <div className="mt-10 w-full max-w-[600px]">
        <label
          htmlFor="applicationForm"
          className="font-bold text-black block mb-2"
        >
          스터디 신청 양식 <span className="text-red">*</span>
        </label>
        <textarea
          id="applicationForm"
          placeholder={`코딩스터디 언어:\n코딩스터디 레벨:\n선호하는 코딩테스트 사이트:\n가능한 스터디 시간:\n원하는 스터디 요일:\n이 스터디에 가입하고 싶은 이유:\n깃허브 아이디:\n사는 지역:`}
          className="w-full h-[240px] p-3 border border-gray-light rounded-md resize-none"
        />
      </div>

      {/* 버튼 영역 */}
      <div className="mt-10 flex gap-4">
        <Button variant="outlined" className="px-6 py-2">
          임시저장
        </Button>
        <Button className="px-6 py-2">생성하기</Button>
      </div>
    </div>
  );
};

export default studyRegister;
