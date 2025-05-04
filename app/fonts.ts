import localFont from "next/font/local";

export const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  preload: true,
});

export const cookierun = localFont({
  src: "../public/fonts/CookieRun-Bold.woff",
  variable: "--font-cookierun",
  display: "swap",
  preload: true,
});
