import { templateStructure } from "@/config/template";
import { create } from "zustand";

interface TemplateStore {
  openedKeys: string[];
  openTemplate: (key: string) => void;
  closeTemplate: (key: string) => void;
  toggleTemplate: (key: string) => void;
  setAllOpened: () => void;
}

export const useTemplateStore = create<TemplateStore>((set) => ({
  //템플릿 키 저장
  openedKeys: [],

  //키값에 해당하는 템플릿 open
  openTemplate: (key) =>
    set((state) => ({
      openedKeys: [...state.openedKeys, key],
    })),

  //키값에 해당하는 템플릿 close
  closeTemplate: (key) =>
    set((state) => ({
      openedKeys: state.openedKeys.filter((k) => k !== key),
    })),

  //toggle
  toggleTemplate: (key) =>
    set((state) => ({
      openedKeys: state.openedKeys.includes(key)
        ? state.openedKeys.filter((k) => k !== key)
        : [...state.openedKeys, key],
    })),

  //모든 templateStructure 키 값에 대한 템플릿 open
  setAllOpened: () =>
    set(() => ({
      openedKeys: Object.keys(templateStructure),
    })),
}));
