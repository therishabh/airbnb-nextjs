/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  tls: { 
    rejectUnauthorized: false 
},
  images : {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a0.muscache.com',
        port: '',
        pathname: '/im/pictures/**',
      },{
        protocol: 'https',
        hostname: 'www.jsonkeeper.com',
        port: '',
      },
    ],
    domains : ["links.papareact.com","www.jsonkeeper.com"]
  }
}

module.exports = nextConfig
