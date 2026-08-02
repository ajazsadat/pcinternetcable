import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use Vercel's native Next.js runtime (no static `out/` export).
  // Static export can 404 on Vercel when Output Directory / Framework Preset
  // are misaligned in project settings.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
