/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    output: "standalone",
    reactStrictMode: false,
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;
