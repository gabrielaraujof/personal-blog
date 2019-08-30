const feed = require('./feed')
const manifest = require('./manifest')
const mdx = require('./mdx')
const sources = require('./source-filesystem')

module.exports = [
  'gatsby-plugin-netlify',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  feed,
  manifest,
  mdx,
  sources('blog', './content'),
  sources('images'),
]
