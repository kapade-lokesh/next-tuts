/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL("https://avatars.githubusercontent.com/u/109072389?v=4"),
    ],
  },
};

export default nextConfig;
