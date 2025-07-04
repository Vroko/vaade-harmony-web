/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export to enable server-side rendering for dynamic meta tags
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    esmExternals: false,
  },
}

module.exports = nextConfig 