/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <-- esto permite usar `next export`
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;