import { create } from "zustand";
export interface Toast {}

interface ToastState {}

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
}));
