// next.config.js
const withFonts = require('next-fonts')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
}

module.exports = withFonts(nextConfig)
