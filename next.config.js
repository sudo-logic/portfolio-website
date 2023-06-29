/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'github-readme-streak-stats.herokuapp.com', 'img.shields.io'],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
