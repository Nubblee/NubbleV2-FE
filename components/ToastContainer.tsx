"use client";

import { useToastStore } from "@/stores/useToastStore";
import { useEffect } from "react";
import { X } from "lucide-react";

const ToastContainer = () => {
  const { toasts, removeToast } = useToastStore();

  useEffect(() => {
    const timers = toasts.map((toast) => {
      const timeoutId = setTimeout(() => {
        removeToast(toast.id);
      }, toast.duration ?? 3000);
      return () => clearTimeout(timeoutId);
    });

    return () => {
      timers.forEach((cancel) => cancel());
    };
  }, [toasts, removeToast]);

  return (
    <div className="fixed top-4 right-4 z-[1000] space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`relative px-4 py-2 rounded shadow text-black overflow-hidden min-w-[240px] border-l-4
            ${
              toast.type === "success"
                ? "border-green-middle"
                : toast.type === "error"
                ? "border-red"
                : "border-gray-600"
            }`}
        >
          <div className="flex justify-between">
            {toast.message}
            <button onClick={() => removeToast(toast.id)} className="ml-2">
              <X size={16} className="text-gray-dark" />
            </button>
          </div>

          {/* 프로그레스 바 */}
          <div
            className={`absolute bottom-0 left-0 h-1 animate-progress ${
              toast.type === "success"
                ? "bg-green-light"
                : toast.type === "error"
                ? "bg-red-300"
                : "bg-gray-light"
            }`}
            style={{ animationDuration: `${toast.duration ?? 3000}ms` }}
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes progressShrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
        .animate-progress {
          animation-name: progressShrink;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default ToastContainer;
