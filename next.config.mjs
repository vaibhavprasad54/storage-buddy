/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },
    images: {
        domains: ['storage-buddy.s3.eu-north-1.amazonaws.com', 'img.clerk.com'],
      },
};

export default nextConfig;
