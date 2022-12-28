// eslint-disable-next-line @typescript-eslint/no-var-requires
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@acme/ui', 'lodash-es'],
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '3001',
        pathname: '/uploads/**'
      }
    ]
  },
  experimental: {
    appDir: true
  }
}
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  swcMinify: true,
  skipTrailingSlashRedirect: true,
  experimental: {
    forceSwcTransforms: true
    // urlImports: ['https://cdn.skypack.dev']
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})

module.exports = nextConfig
