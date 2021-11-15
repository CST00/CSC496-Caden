module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "CSC 496 Website",
  },
  plugins: [],
};
module.exports = {
  plugins: []
};
module.exports = {
  plugins: []
};
module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },

  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    'gatsby-plugin-styled-components',
    'react-darkmode-toggler',
    'framer-motion',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
      resolve: 'gatsby-source-wordpress',
      options: {
      url: 'https://csc496wordpress.tldr.dev/graphql',
      protocol: 'https',
      hostingWPCOM: 'false',
      useACF: 'false',
      },
    }
  ]
};