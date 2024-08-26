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
        API_KEY: process.env.NEXT_PUBLIC_API_KEY,
        BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
      }
};

export default nextConfig;
