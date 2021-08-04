module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "d.camp Tokyo",
  },
  plugins: [
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
  ],
};
