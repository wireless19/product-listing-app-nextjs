/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.dummyjson.com',
                // port: '',
                // pathname: '/media/catalog/product/**',
            },

        ],
    },
    // images: {
    //     domains: ['cdn.dummyjson.com'], // Replace with your image host domain
    // },
};

export default nextConfig;
