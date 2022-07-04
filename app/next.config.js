/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/admin/sign-in',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
