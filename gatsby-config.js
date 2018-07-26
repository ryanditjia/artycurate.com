module.exports = {
  siteMetadata: {
    siteUrl: 'https://artycurate.com',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    // temporarily disabled due to bug
    // 'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#f2363a', // artycurate red
        showSpinner: false,
        trickle: false,
        minimum: 0.4,
      },
    },
    'gatsby-plugin-sitemap',
    // TODO: add offline and manifest plugins
    'gatsby-plugin-netlify',
  ],
}
