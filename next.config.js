/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true
      }
    ];
  },
  transpilePackages: [
    "rc-util",
    "@ant-design/icons-svg",
    "rc-pagination",
    "rc-picker",
    "rc-input"
  ],
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: false
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve("components")
    };
    return config;
  }
};

module.exports = nextConfig;
