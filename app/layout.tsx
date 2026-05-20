import type { Metadata } from "next";
import { tool } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  title: `${tool.name} —— 打开就能用`,
  description: tool.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
