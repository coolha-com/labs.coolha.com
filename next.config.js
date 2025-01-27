const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 启用静态导出
  basePath: "/labs.coolha.com", // 替换为仓库名称，例如 "/docs.coolha.com"
  images: {
    unoptimized: true, // 禁用服务端优化
  },
}

module.exports = withNextIntl(nextConfig)
