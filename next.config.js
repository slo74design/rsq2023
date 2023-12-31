/** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     images: {
//         domains: ["res.cloudinary.com"],
//     },
// };
// module.exports = nextConfig;
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["res.cloudinary.com"],
    },
    async rewrites() {
        return [
            {
                source: "/sitemap.xml",
                destination: "/api/sitemap",
            },
        ];
    },
};

