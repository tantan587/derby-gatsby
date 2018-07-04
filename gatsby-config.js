module.exports = {
  siteMetadata: {
    title: 'Derby Blog',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: "markdown-pages",
      },
    },
    'gatsby-transformer-remark',
  ],
}
