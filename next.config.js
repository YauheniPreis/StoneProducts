/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
