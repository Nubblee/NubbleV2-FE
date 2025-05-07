import { useToastStore } from "@/stores/useToastStore";

export const toast = {
  success: (message: string, duration = 3000) =>
    useToastStore.getState().addToast({ message, type: "success", duration }),
  error: (message: string, duration = 3000) =>
    useToastStore.getState().addToast({ message, type: "error", duration }),
  info: (message: string, duration = 3000) =>
    useToastStore.getState().addToast({ message, type: "info", duration }),
};
