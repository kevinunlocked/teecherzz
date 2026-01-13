import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export configuration - generates fully static HTML/CSS/JS
  output: "export",
  
  images: {
    // Disable image optimization for static export (images must be unoptimized)
    unoptimized: true,
  },
  
  // Optimize production builds
  compress: true,
  poweredByHeader: false,
  
  // Disable features that require server
  trailingSlash: true,
  
  // Vercel Edge Region Hint - Optimize for Africa
  // Use European edge regions closest to Africa for faster delivery
  // lhr1 (London) and fra1 (Frankfurt) are closest major edge regions to Africa
  regions: ["lhr1", "fra1"],
  
  // Reduce JavaScript bundle size
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
