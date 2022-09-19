/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.giphy.com", "picsum.photos", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
