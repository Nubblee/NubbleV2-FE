"use client";

import { useToastStore } from "@/stores/useToastStore";
import { AnimatePresence, motion } from "framer-motion";

const ToastContainer = () => {
  const { toasts, removeToast } = useToastStore();
  return (
    <div className="fixed top-4 right-4 z-[1000] space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`px-4 py-2 rounded shadow text-white ${
              toast.type === "success"
                ? "bg-green-middle"
                : toast.type === "error"
                ? "bg-red"
                : "bg-blue"
            }`}
          >
            {toast.message}
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-2 text-sm underline"
            >
              닫기
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;
