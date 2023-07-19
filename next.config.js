/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        // pathname: '/account123/**',
      },
    ],
    domains: ['images.ctfassets.net'], // Add your Contentful asset host domain(s) here
  }
}

module.exports = nextConfig
