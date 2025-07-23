"use client";
import React, { useState } from "react";
import Tiptap from "@/app/(default)/study/[title]/_component/Tiptap/Tiptap";
import { Input } from "@/components";
import Button from "@/components/Button";

const Page = () => {
  // 1. content 상태 선언
  const [content, setContent] = useState("");

  // 2. content 변경 핸들러 함수 선언
  const contentChangeHandler = (newContent: string) => {
    setContent(newContent);
  };

  return (
    <div className="flex flex-col items-center w-full h-screen min-h-0 pb-10">
      <h1 className="text-2xl font-bold mb-4">공지사항 작성</h1>
      <div className="flex flex-col flex-1 px-8 pb-20 w-[80%] min-h-0">
        {/* 제목 입력 */}
        <Input
          variant="underline"
          placeholder="제목을 입력하세요"
          className="text-2xl  border-gray-light p-2"
        />

        {/* Tiptap 에디터 */}
        <Tiptap content={content} onChange={contentChangeHandler} />

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
