/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  trailingSlash: true,
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/en/resume',
        destination: '/developer/',
        permanent: true,
      },
      {
        source: '/fr/resume',
        destination: '/fr/developer/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
