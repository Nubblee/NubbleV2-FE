"use client";
import { useRouter } from "next/navigation";
import { cookierun } from "../fonts";

const ErrorPage = () => {
  const router = useRouter();
  return (
    <div className={`flex flex-col justify-center items-center h-screen `}>
      <span
        className={`text-base text-gray-light ${cookierun.variable} font-cookierun`}
      >
        NOT FOUND
      </span>
      <div
        className={`${cookierun.variable} font-cookierun text-9xl text-green-middle font-extrabold`}
      >
        404
      </div>

      <span className="font-bold text-lg">찾을 수 없는 페이지 입니다.</span>
      <span className="font-normal text-gray-dark text-lg">
        죄송합니다. 더 이상 존재하지 않는 페이지입니다.
      </span>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        홈으로
      </button>
    </div>
  );
};

export default ErrorPage;
