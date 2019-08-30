const remarkImages = require('./remark-images')
const remarkResponsiveIframe = require('./remark-responsive-iframe')
const remarkTwitter = require('./remark-twitter')

module.exports = {
  resolve: 'gatsby-mdx',
  options: {
    extensions: ['.md', '.mdx'],
    gatsbyRemarkPlugins: [
      'gatsby-remark-autolink-headers',
      'gatsby-remark-copy-linked-files',
      'gatsby-remark-embed-video',
      'gatsby-remark-external-links',
      'gatsby-remark-smartypants',
      remarkImages,
      remarkResponsiveIframe,
      remarkTwitter,
    ],
  },
}
