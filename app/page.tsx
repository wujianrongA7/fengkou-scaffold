"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { tool, payment, ui } from "@/lib/config";

export default function HomePage() {
  const router = useRouter();
  const [codeInput, setCodeInput] = useState("");
  const [error, setError] = useState("");

  const handleActivate = () => {
    const trimmed = codeInput.trim();
    if (!trimmed) {
      setError("请输入激活码");
      return;
    }
    if (payment.activationCodes.includes(trimmed)) {
      router.push(`/use?code=${encodeURIComponent(trimmed)}`);
    } else {
      setError("激活码无效，请检查后重试");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-md w-full space-y-10">
        {/* Hero */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {tool.name}
          </h1>
          <p className="text-xl text-gray-600">{tool.tagline}</p>
          <div className="space-y-2 text-gray-500 text-sm leading-relaxed">
            {tool.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* 微信收款码 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4 text-center">
          <div className="w-48 h-48 mx-auto rounded-lg border bg-gray-100 flex items-center justify-center overflow-hidden">
            {payment.qrcodeImage ? (
              <img
                src={payment.qrcodeImage}
                alt="微信收款码"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                }}
              />
            ) : null}
            <span className="text-xs text-gray-400 text-center px-2 hidden">
              将微信收款码保存为
              <br />
              public/qrcode.png
            </span>
          </div>
          <p className="text-2xl font-bold text-green-600">
            ¥{tool.price}
          </p>
          <div className="space-y-1 text-sm text-gray-500">
            {payment.instructions.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>

        {/* 激活码输入 */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700 text-center">
            输入激活码，开始使用
          </label>
          <input
            type="text"
            value={codeInput}
            onChange={(e) => {
              setCodeInput(e.target.value);
              setError("");
            }}
            onKeyDown={(e) => e.key === "Enter" && handleActivate()}
            placeholder="例如：FENG2024-ABCD"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-center text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {error && (
            <p className="text-red-500 text-xs text-center">{error}</p>
          )}
          <button
            onClick={handleActivate}
            disabled={!codeInput.trim()}
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            开始使用
          </button>
        </div>
      </div>

      <footer className="mt-16 text-xs text-gray-400">{ui.footer}</footer>
    </main>
  );
}
