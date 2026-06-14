import type { NextConfig } from "next";

// Static export is enabled only for the GitHub Pages deploy (NEXT_OUTPUT=export).
// Local dev and standard builds keep full server capability (API routes, LLM calls).
const isExport = process.env.NEXT_OUTPUT === "export";
const basePath = process.env.NEXT_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(isExport
    ? { output: "export", images: { unoptimized: true }, basePath, assetPrefix: basePath || undefined }
    : {}),
};

export default nextConfig;
