/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US',
  },
}

module.exports = nextConfig
