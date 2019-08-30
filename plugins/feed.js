const query = `
{
  allMdx(
    filter: { fields: { published: { eq: true } } }
    limit: 1000,
    sort: {
      order: DESC,
      fields: [frontmatter___date]
    }
  ) {
    edges {
      node {
        frontmatter {
          title
          description
          date
        }
        fields {
          slug
        }
        html
      }
    }
  }
}
`

function serialize({ query: { site, allMdx } }) {
  return allMdx.edges.map(edge => {
    return {
      ...edge.node.frontmatter,
      url: site.siteMetadata.siteUrl + edge.node.fields.slug,
      guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
      custom_elements: [{ 'content:encoded': edge.node.html }],
    }
  })
}

module.exports = {
  resolve: `gatsby-plugin-feed`,
  options: {
    feeds: [
      {
        serialize,
        query,
        output: 'rss.xml',
      },
    ],
  },
}
