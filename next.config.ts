import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repo = "Portfolio"; // nom EXACT du repo GitHub

const nextConfig: NextConfig = {
  // 1) Export statique -> génère un dossier /out après `next build`
  output: "export", // requis pour GitHub Pages [page:0]

  // 2) GitHub Pages sert ton site sous /Portfolio/
  ...(isGitHubPages
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),

  // 3) Image optimization par défaut nécessite un serveur -> désactiver
  images: {
    unoptimized: true, // sinon ça casse sur GitHub Pages [page:0]
  },

  // Optionnel : tu peux garder compress/experimental si tu veux
  compress: true,
  experimental: {
    optimizeCss: true,
  },

  // 4) À SUPPRIMER pour GitHub Pages static export :
  // headers() et redirects() ne sont pas supportés [page:0]
  // async headers() { ... }
  // async redirects() { ... }

  // 5) Tu peux laisser ces flags (mais idéalement corriger tes erreurs plutôt que les ignorer)
  eslint: { ignoreDuringBuilds: true }, // présent chez toi [file:64]
  typescript: { ignoreBuildErrors: true }, // présent chez toi [file:64]
};

export default nextConfig;
