/**
 * Static export config so this site can be hosted directly on GitHub Pages.
 *
 * If you deploy to a PROJECT page (e.g. https://username.github.io/portfolio),
 * GitHub serves it from a subpath, so set NEXT_PUBLIC_BASE_PATH to "/portfolio"
 * (see .github/workflows/deploy.yml — it's already wired up to do this for you
 * using your repo name). If you deploy to a USER/ORG page
 * (a repo literally named username.github.io), leave it empty.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
