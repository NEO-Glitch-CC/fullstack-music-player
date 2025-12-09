import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://r2.theaudiodb.com/images/media/artist/thumb/**')]
  }
};

export default nextConfig;
