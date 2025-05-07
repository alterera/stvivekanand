import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.stvivekanandschool.com',
          },
        ],
        destination: 'https://stvivekanandschool.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
