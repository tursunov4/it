import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http", // yoki "https" bo‘lishi mumkin
        hostname: "185.4.65.234",
      },
    ],
  },
};

export default nextConfig;
