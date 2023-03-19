/** @type {import('next').NextConfig} */

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["photos.google.com", "photos.app.goo.gl", "i.ibb.co"],
  },
  env: {
    // get date on compilation
    BUILD_DATE: `${year}-${month}-${day} ${hour}:${minute}:${second}`,
  },
};

module.exports = nextConfig;
