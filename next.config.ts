import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Désactiver ESLint et TypeScript pendant le build pour vercel
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "racim-zenati.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
  },

  compress: true,

  experimental: {
    optimizeCss: true,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "X-Robots-Tag",
            value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
        ],
      },
      {
        source: "/docs/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Content-Type",
            value: "application/pdf",
          },
          {
            key: "Content-Disposition",
            value: "inline",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/email",
        destination: "mailto:racimzenati.pro@gmail.com",
        permanent: true,
      },
      {
        source: "/directresume",
        destination: "/docs/Racim_Zenati_CV.pdf",
        permanent: true,
      },
      {
        source: "/direct-resume",
        destination: "/docs/Racim_Zenati_CV.pdf",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://www.github.com/racimzz",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;