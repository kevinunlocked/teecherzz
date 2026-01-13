import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enable image optimization for better performance
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Optimize production builds
  compress: true,
  poweredByHeader: false,
  // Reduce JavaScript bundle size
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
