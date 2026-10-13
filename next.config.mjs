/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  experimental: { optimizePackageImports: [] }
};
export default nextConfig;
