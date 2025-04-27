import localFont from "next/font/local";

export const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  variable: "--font-CSS변수명",
  display: "swap",
  preload: true,
});
