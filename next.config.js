const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  layoutPath: 'src/layouts',
  defaultLayout: true,
  usesSrc: true,
})({
  target: 'serverless',
  webpack5: false,
})
