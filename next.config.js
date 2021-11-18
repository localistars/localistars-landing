const path = require('path');
// const withImages = require('next-images')
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/scss')],
    eslint: {
      // Warning: Dangerously allow production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true
    }
  },
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: 'https://localistars.com'
  }
};
if (process.env.NEXT_PUBLIC_BASE_PATH) {
  module.exports.basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  module.exports.assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH;
}
// module.exports = withImages({
//   webpack(config, options) {
//     return config
//   }
// })
