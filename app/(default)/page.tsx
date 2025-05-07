"use client";

import { useToastStore } from "@/stores/useToastStore";

export default function Home() {
  const { addToast } = useToastStore();
  return (
    <div className="flex justify-center">
      <button
        onClick={() =>
          addToast({
            message: "성공적으로 저장되었습니다!",
            type: "success",
            duration: 5000,
          })
        }
        className="px-4 py-2 bg-gray-dark text-white rounded"
      >
        토스트 띄우기
      </button>
    </div>
  );
}
