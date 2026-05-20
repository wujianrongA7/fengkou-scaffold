"use client";

import { useState } from "react";
import { tool, ui } from "@/lib/config";

/**
 * 使用页 —— 风口来了只需要改 handleSubmit 里的 API 调用逻辑
 */
export default function UsePage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setError("");
    setResult("");

    try {
      // ========================================
      // 🔧 风口来了只改这一段 —— 调用具体工具的 API
      // ========================================
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_AI_API_BASE || "https://api.openai.com/v1"}/chat/completions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AI_API_KEY}`,
          },
          body: JSON.stringify({
            model: process.env.NEXT_PUBLIC_AI_MODEL || "gpt-4o-mini",
            messages: [
              {
                role: "system",
                content: `你是 ${tool.name}。请处理用户输入的内容。`,
              },
              { role: "user", content: input },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API 返回错误：${response.status}`);
      }

      const data = await response.json();
      setResult(data.choices?.[0]?.message?.content || "（无返回内容）");
      // ========================================
      // 🔧 改到这里
      // ========================================
    } catch (e: any) {
      setError(e.message || "处理失败，请稍后重试");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full space-y-6">
        {/* 标题 */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">{tool.name}</h1>
          <p className="text-sm text-gray-500 mt-1">{tool.tagline}</p>
        </div>

        {/* 输入区 */}
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={tool.inputPlaceholder}
          rows={5}
          className="w-full p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
        />

        {/* 按钮 */}
        <button
          onClick={handleSubmit}
          disabled={loading || !input.trim()}
          className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? tool.loadingText : tool.buttonText}
        </button>

        {/* 加载动画 */}
        {loading && (
          <div className="flex justify-center">
            <div className="w-6 h-6 border-2 border-green-600 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* 错误 */}
        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm">
            {error}
          </div>
        )}

        {/* 结果 */}
        {result && (
          <div className="p-4 bg-white border border-gray-200 rounded-xl text-sm whitespace-pre-wrap leading-relaxed">
            {result}
          </div>
        )}
      </div>

      {/* 页脚 */}
      <footer className="mt-16 text-xs text-gray-400">{ui.footer}</footer>
    </main>
  );
}
