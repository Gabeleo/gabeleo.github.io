import type { NextConfig } from "next";

// This deploys as the gabeleo.github.io user site, which GitHub Pages always
// serves from the domain root (unlike project-repo pages, which live under
// /<repo-name>/) — so no basePath is needed here.
const nextConfig: NextConfig = {
  // Fully static, pre-rendered output — deploy the `out/` directory anywhere.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
