/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'],
    images: {
        domains: ['i.ytimg.com'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
