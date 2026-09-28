import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/_a/:path*",
        destination: "https://collect.trysapience.com/api/collect/:path*",
      },
    ];
  },
};

export default nextConfig;
