import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages alt klasör yapısı için repo adını ekledik
  basePath: '/irregular_verb_quiz',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;