import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images from the public folder with spaces in folder names
    unoptimized: false,
    // Enable remote patterns if needed in the future
    remotePatterns: [],
  },
};

export default nextConfig;
