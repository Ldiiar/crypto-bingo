/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "**"
            }
        ]
    },
    env: {
        API_KEY: process.env.API_KEY,
        BASE_URL: process.env.BASE_URL
      }
};

export default nextConfig;
