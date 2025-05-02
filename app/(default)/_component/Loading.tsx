import { cookierun } from "@/app/fonts";
import React from "react";

const Loading = () => {
  return (
    <div className="flex h-[calc(100vh-45px)] justify-center items-center">
      <div className="relative w-[350px] h-[350px] overflow-visible">
        <svg
          viewBox="-60 -250 550 550"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full"
        >
          <path
            d=" M0,0 
                Q260,10 100,80 
                Q0,140 80,140 
                Q425,200 100,270 
                Q0,300 180,380"
            stroke="#CCFBF1"
            strokeWidth="100"
            strokeLinecap="round"
            fill="none"
            className="animate-draw"
            style={{ transform: "rotate(-50deg)", transformOrigin: "top left" }}
          />
        </svg>
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-1 text-5xl font-bold text-green-dark ${cookierun.variable} font-cookierun`}
        >
          {["N", "u", "b", "b", "l", "e"].map((char, i) => (
            <span
              key={i}
              className="opacity-0 animate-pop-once"
              style={{ animationDelay: `${1 + i * 0.2}s` }}
            >
              {char}
            </span>
          ))}
        </div>
        <div
          className={`absolute top-52 left-35 ${cookierun.variable} font-cookierun text-gray-light`}
        >
          Loading ...
        </div>
        <style>
          {`
              @keyframes draw {
                0% { stroke-dashoffset: 1000; opacity: 0; }
                10% { opacity: 1; }
                50% { stroke-dashoffset: 100; }
                90% { opacity: 1; }
                100% { stroke-dashoffset: 1000; opacity: 0; }
              }
  
              @keyframes pop {
                0% {
                  transform: scale(0.3);
                  opacity: 0;
                }
                30% {
                  transform: scale(1.2);
                  opacity: 1;
                }
                50%{
                  transform: scale(0.95);
                }
                70% {
                  transform: scale(1.05);
                }
                100% {
                  transform: scale(0.3);
                  opacity: 0;
                }
              }
  
              .animate-draw {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation: draw 4s ease-in-out infinite;
              }
  
              .animate-pop-once {
                animation: pop 2.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
                display: inline-block;
              }
            `}
        </style>
      </div>
    </div>
  );
};

export default Loading;
