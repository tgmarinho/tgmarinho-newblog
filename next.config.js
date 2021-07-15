const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  layoutPath: 'src/layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  usesSrc: true,
})({
  target: 'serverless',
  webpack5: false, // for dev envoriment
  cleanDistDir: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
})
