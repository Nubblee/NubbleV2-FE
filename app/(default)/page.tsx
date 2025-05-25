"use client";

import { toast } from "@/utils/toast";

export default function Home() {
  return (
    <div className="space-y-4">
      <button
        onClick={() => toast.success("저장에 성공했습니다!", 5000)}
        className="bg-green-middle text-white px-4 py-2 rounded"
      >
        성공 토스트
      </button>

      <button
        onClick={() => toast.error("오류가 발생했습니다.")}
        className="bg-red text-white px-4 py-2 rounded"
      >
        에러 토스트
      </button>

      <button
        onClick={() => toast.info("이건 참고용 메시지예요.")}
        className="bg-gray-dark text-white px-4 py-2 rounded"
      >
        정보 토스트
      </button>
    </div>
  );
}
