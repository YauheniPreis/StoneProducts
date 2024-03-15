/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    emotion: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
