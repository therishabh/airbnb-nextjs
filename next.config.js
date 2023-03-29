/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a0.muscache.com',
        port: '',
        pathname: '/im/pictures/**',
      },
    ],
    domains : ["links.papareact.com"]
  }
}

module.exports = nextConfig
