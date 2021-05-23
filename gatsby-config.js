module.exports = {
  siteMetadata: {
    title: 'OpenEEW',
    description: 'A Gatsby theme for the carbon design system',
    keywords: 'openeew, earthquake, early-warning',
  },
  flags: { PRESERVE_WEBPACK_CACHE: true, FAST_DEV: true },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        icon: 'src/images/favicon.svg',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        navigationStyle: 'header',
      },
    },
  ],
};
