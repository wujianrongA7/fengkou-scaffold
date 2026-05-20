import { tool, payment, ui } from "@/lib/config";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      {/* Hero */}
      <div className="max-w-xl w-full text-center space-y-8">
        {/* 工具名称 */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {tool.name}
        </h1>

        {/* 一句话描述 */}
        <p className="text-xl text-gray-600">{tool.tagline}</p>

        {/* 详细描述 */}
        <div className="space-y-3 text-gray-500 text-sm leading-relaxed">
          {tool.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* 价格 + 支付按钮 */}
        <div className="pt-4 space-y-4">
          <p className="text-3xl font-bold text-green-600">
            ¥{tool.price}
            <span className="text-sm text-gray-400 font-normal"> / 永久使用</span>
          </p>

          <a
            href={payment.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto px-10 py-4 bg-green-600 text-white text-lg font-semibold rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
          >
            {payment.buttonText}
          </a>

          <p className="text-xs text-gray-400">
            付款后自动跳转到使用页面
          </p>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="mt-16 text-xs text-gray-400">{ui.footer}</footer>
    </main>
  );
}
