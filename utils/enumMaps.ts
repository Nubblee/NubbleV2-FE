export const LANGUAGE_MAP = {
  Java: "JAVA",
  Python: "PYTHON",
  Javascript: "JAVASCRIPT",
  C: "C",
  "C++": "CPP",
  Kotlin: "KOTLIN",
  Rust: "RUST",
  Swift: "SWIFT",
  Go: "GO",
} as const;

export type LanguageKey = keyof typeof LANGUAGE_MAP;

export const LEVEL_MAP = {
  LV1: "LV1",
  LV2: "LV2",
  LV3: "LV3",
  LV4: "LV4",
  LV0: "LV0",
} as const;

export type LevelKey = keyof typeof LEVEL_MAP;

export const PROBLEM_MAP = {
  프로그래머스: "PROGRAMMERS",
  백준: "BAEKJOON",
  리트코드: "LEET_CODE",
  codetree: "CODE_TREE",
} as const;

export type ProblemKey = keyof typeof PROBLEM_MAP;

export const MEETING_TYPE_MAP = {
  온라인: "ONLINE",
  오프라인: "OFFLINE",
  하이브리드: "HYBRID",
} as const;

export type MeetingTypeKey = keyof typeof MEETING_TYPE_MAP;

export const DAY_MAP = {
  월: "MON",
  화: "TUE",
  수: "WED",
  목: "THU",
  금: "FRI",
  토: "SAT",
  일: "SUN",
} as const;

export type DayKey = keyof typeof DAY_MAP;
