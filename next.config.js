/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  experimental: {
    serverActions: true,
  },
  compiler: {
    removeConsole: true,
  },
};

module.exports = nextConfig;
