"use client";
import { Input } from "@/components";
import Pagination from "@/components/Pagination";
import { Trash2 } from "lucide-react";
import { useState } from "react";

const Page = () => {
  const problems = [
    { date: "2024-09-20", title: "LV.2 줄 깎아기" },
    { date: "2024-09-20", title: "LV.2 줄 깎아기" },
    { date: "2024-09-20", title: "LV.2 줄 깎아기" },
    { date: "2024-09-20", title: "LV.2 줄 깎아기" },
    { date: "2024-09-20", title: "LV.2 줄 깎아기" },
    { date: "2024-09-21", title: "LV.2 줄 깎아기" },
    { date: "2024-09-21", title: "LV.2 줄 깎아기" },
  ];

  const problemsPerPage = 5; // 한 페이지에 표시할 문제 수

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(problems.length / problemsPerPage);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center w-full justify-center py-6  px-10 min-[1200px]:px-40">
        <h1 className="text-2xl font-bold mb-4">코딩테스트 문제 추가하기</h1>
        <div className="flex flex-col items-center w-full  bg-green-light py-8 rounded-lg">
          <div className="flex w-full max-w-lg items-center gap-2 mb-4">
            <label htmlFor="date" className="font-bold text-black w-26 ">
              날짜 입력
            </label>
            <Input
              id="date"
              type="date"
              className="py-1 border border-gray-light bg-white flex-1"
              placeholder="연도-월-일"
            />
          </div>
          <div className="flex w-full max-w-lg items-center gap-2 mb-4">
            <label htmlFor="title" className="font-bold text-black w-26 ">
              문제 제목
            </label>
            <Input
              id="title"
              className="py-1 border border-gray-light bg-white flex-1"
              placeholder="문제 제목을 입력하세요."
            />
          </div>
          <div className="flex w-full max-w-lg items-center gap-2 mb-4">
            <label htmlFor="link" className="font-bold text-black w-26 ">
              문제 링크
            </label>
            <Input
              id="link"
              className="py-1 border border-gray-light bg-white flex-1"
              placeholder="문제 링크를 입력하세요."
            />
          </div>
          <div className="flex w-full max-w-lg items-center gap-2 mb-4">
            <label htmlFor="tag" className="font-bold text-black w-26 ">
              태그
            </label>
            <Input
              id="tag"
              className="py-1 border border-gray-light bg-white flex-1"
              placeholder="문제 알고리즘 태그를 입력하세요."
            />
          </div>
        </div>
        {/* 문제 목록 테이블 */}
        <div className="flex flex-col w-full items-center mt-8">
          <table className="w-full text-left bg-white">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-3 px-4 font-semibold">날짜</th>
                <th className="py-3 px-4 font-semibold">문제 제목</th>
                <th className="py-3 px-4 w-12"></th>
              </tr>
            </thead>
            <tbody>
              {problems.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-4 px-4">{item.date}</td>
                  <td className="py-4 px-4">{item.title}</td>
                  <td className="py-4 px-4 text-center">
                    <button>
                      <Trash2 className="w-5 h-5 text-red-400 hover:text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-8">
          <Pagination
            page={currentPage}
            setPage={(p) => setCurrentPage(p)}
            totalPage={totalPages}
            limit={5}
          />
        </div>
      </div>
    </div>
  );
};
export default Page;
