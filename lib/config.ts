/**
 * 🎯 风口套利基础栈 —— 唯一配置文件
 *
 * 风口来了只改这一个文件：
 * 1. 改 tool 对象里的工具信息
 * 2. 改 activationCodes 加一批新激活码
 * 3. 部署上线
 *
 * 其他代码一行都不用动。
 */

export const tool = {
  /** 工具名称（会显示在页面标题和介绍里） */
  name: "示例工具",

  /** 一句话描述（首页大字） */
  tagline: "一个很厉害的 AI 工具，打开就能用",

  /** 详细描述（首页正文，支持多段） */
  description: [
    "这个工具能帮你做 XX 事情。不需要安装、不需要配置，打开网页就能用。",
    "原版需要配环境、装依赖、改配置，至少折腾半小时。这里你只需要输入内容，点一下按钮。",
  ],

  /** 价格（人民币，显示在首页） */
  price: "9.9",

  /** 使用页的输入框提示文字 */
  inputPlaceholder: "在这里输入你想处理的内容…",

  /** 使用页的按钮文字 */
  buttonText: "开始处理",

  /** 使用页处理中的等待文字 */
  loadingText: "AI 正在处理，请稍候…",
};

export const payment = {
  /** 微信收款码图片路径（放在 public/ 目录下） */
  qrcodeImage: "/qrcode.png",

  /** 支付说明 */
  instructions: [
    "微信扫码支付 ¥9.9",
    "付款后截图发微信，获取激活码",
    "输入激活码即可使用",
  ],

  /** 手动生成的激活码列表。用户付款后，从这里取一个发给他。 */
  activationCodes: [
    "FENG2024-ABCD",
    "FENG2024-EFGH",
    "FENG2024-IJKL",
    "FENG2024-MNOP",
    "FENG2024-QRST",
    "FENG2024-UVWX",
    "FENG2024-YZ01",
    "FENG2024-2345",
  ],
};

export const ui = {
  /** 页脚文字 */
  footer: "由 AI 驱动 · 数据不存储 · 用完即走",
};
