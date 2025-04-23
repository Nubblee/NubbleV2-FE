import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nubble",
  description: "새롭게 태어난 너블~",
  icons: {
    icon: "/nubble.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
