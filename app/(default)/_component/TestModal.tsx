"use client";
import ModalContainer from "@/app/(default)/_component/Modal/ModalContainer";
import { useRouter } from "next/navigation";

const TestModal = () => {
  const router = useRouter();
  return (
    <ModalContainer title="테스트 모달">
      <div className="flex flex-col p-2 w-[200px] m-auto">
        {" "}
        테스트 모달임 인터셉트 라우팅 타서 모달 뜨는지 확인하기 위한 모 모모모모
        모달
        <button
          className="m-auto w-[80px] bg-red-300 cursor-pointer"
          onClick={() => router.back()}
        >
          닫기
        </button>
      </div>
    </ModalContainer>
  );
};

export default TestModal;
