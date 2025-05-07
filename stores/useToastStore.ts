import { create } from "zustand";
export interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
  duration?: number;
}

interface ToastState {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastState>((set, get) => ({
  toasts: [],
  addToast: (toast) => {
    const id = Date.now().toString();
    const currentToasts = get().toasts;

    //3개 이상시 최신순으로 3개만 유지
    const updatedToasts =
      currentToasts.length >= 3
        ? [...currentToasts.slice(1), { ...toast, id }]
        : [...currentToasts, { ...toast, id }];

    set({ toasts: updatedToasts });

    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }));
    }, toast.duration ?? 3000);
  },
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}));
