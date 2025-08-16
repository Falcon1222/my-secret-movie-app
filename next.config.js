/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/kino',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig