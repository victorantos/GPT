/** @type {import('next').NextConfig} */
//const withImages = require('next-images')
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  images: {
    unoptimized: true, // disable static image optimization
    
  }
};

module.exports = nextConfig;
