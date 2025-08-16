/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Энэ хэсэг нь i.ibb.co-г зөвшөөрч байгаа юм
  images: {
    domains: ['i.ibb.co'],
  },

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