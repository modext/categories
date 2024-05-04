/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ise-insights.up.railway.app',

          },
        ],
      },
};

export default nextConfig;
