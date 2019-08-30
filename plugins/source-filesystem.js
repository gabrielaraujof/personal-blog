module.exports = function configSources(name, path) {
  return {
    resolve: 'gatsby-source-filesystem',
    options: { name, path: path || `./src/${name}` },
  }
}
