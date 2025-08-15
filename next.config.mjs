/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export', // Required for static export
  basePath: isProd ? '/wall-e-doc' : '',
  assetPrefix: isProd ? '/wall-e-doc/' : '',
};

export default nextConfig;
