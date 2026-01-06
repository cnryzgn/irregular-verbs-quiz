import type { NextConfig } from "next";
/** @type {import('next').Next} */
const nextConfig: NextConfig = {
  output: 'export', // Statik site oluşturmayı sağlar
  basePath: process.env.BASE_PATH || '',
  assetPrefix: process.env.BASE_PATH || '',
  images: {
    unoptimized: true, // GitHub Pages standart görsel optimizasyonunu desteklemez
  },
};

export default nextConfig;
