const path = require('path')
const withTM = require('next-transpile-modules')([ // only until next >=v11.1.2 can by used
  'remark-gfm',
  'micromark-extension-gfm',
  'micromark-util-combine-extensions',
  'micromark-util-symbol',
  'micromark-util-encode',
  'micromark-util-resolve-all',
  'mdast-util-gfm',
  'ccount',
  'mdast-util-find-and-replace',
  'mdast-util-to-markdown',
  'markdown-table',
  'rehype-slug',
  'hast-util-has-property',
  'hast-util-heading-rank',
  'hast-util-to-string',
  'rehype-code-titles',
  'rehype-autolink-headings',
  'hast-util-is-element',
  'rehype-prism-plus'
])
// const withImages = require('next-images')
module.exports = withTM({
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/scss')],
    eslint: {
      // Warning: Dangerously allow production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  },
  images: {
    loader: 'imgix',
    path: '',
  },
  trailingSlash: true
})
// module.exports = withImages({
//   webpack(config, options) {
//     return config
//   }
// })