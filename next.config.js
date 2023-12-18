/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path/:filename*',
        destination: '/api/sina', // The :filename parameter isn't used here so will be automatically passed in the query
      },
    ]
  },
}

module.exports = nextConfig