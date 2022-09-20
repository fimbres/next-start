/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com']
  }
}

require("@babel/core").transformSync("code", {
  plugins: ["@babel/plugin-syntax-jsx"],
});

module.exports = nextConfig
