import { Input } from "@/components";
import Button from "@/components/Button";
import { ImagePlus } from "lucide-react";

const Page = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <h1 className="text-2xl font-bold mb-4">공지사항 작성</h1>
      <div className="flex flex-col flex-1  px-8 pb-20 w-[80%]">
        {/* 제목 입력 */}
        <Input
          variant="underline"
          placeholder="제목을 입력하세요"
          className="text-2xl mb-4"
        />

        {/*이미지 업로드  및 설정*/}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <button
              className="flex items-center gap-2 text-gray-middle hover:text-gray-dark"
              // onClick={handleUploadFile}
            >
              <ImagePlus size={24} />
            </button>
          </div>
        </div>
        {/* 내용 입력 */}
        <textarea
          className="w-full text-base bg-inherit border-none outline-none text-white placeholder-gray-500 p-3 resize-none h-[calc(100vh-300px)] mb-4"
          placeholder="내용을 입력하세요."
        />
        {/* 하단 버튼 */}
        <div className="flex justify-center gap-4">
          <Button variant="outlined">취소</Button>
          <Button variant="secondary">등록</Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
