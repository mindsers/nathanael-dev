import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  trailingSlash: true,
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
};

export default withNextIntl(nextConfig);
