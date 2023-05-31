// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     loader: 'imgix', // Use a loader that supports static exports
//     path: '', // Set the image path as per your project configuration
//   },
// }

// module.exports = nextConfig


const nextConfig = {
    experimental: {
      appDir: true,
    },
    distDir: "out",
    output: "export",
    // other config options...
};