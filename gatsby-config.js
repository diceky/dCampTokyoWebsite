module.exports = {
  siteMetadata: {
    title: "d.camp Tokyo",
    description: "Official website for d.camp Tokyo.",
    author: "Daisuke Yukita",
    siteUrl: "https://www.yourdomain.tld",
    languages: {
      langs: ["en", "ja"],
      defaultLangKey: "ja",
    },
  },
  pathPrefix: `/dcamp`,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "bootstrap",
    "react",
    "react-bootstrap",
    "react-dom",
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "0bE8q7Pu1w0Yr9ahipdh3XxvKDpbg3ktCFS-0v3NJHs",
        spaceId: "9n0o3q297f2r",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-ZC409R81PC",
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "ja",
        langKeyForNull: "any",
        prefixDefault: true,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`crimson pro\:300,300i,400,700`, `work sans\:300,400,500,700`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 200,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `d.camp Tokyo`,
        short_name: `d.camp`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FF8E00`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
