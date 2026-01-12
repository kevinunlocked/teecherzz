import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Disable image optimization to prevent loading delays and flickering
    unoptimized: true,
    // Enable remote patterns if needed in the future
    remotePatterns: [],
  },
};

export default nextConfig;
