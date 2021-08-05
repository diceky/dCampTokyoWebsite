import React from "react";
import { useStaticQuery, graphql, navigate, withPrefix } from "gatsby";
import { getUserLangKey } from "ptz-i18n";

const RedirectIndex = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            languages {
              defaultLangKey
              langs
            }
          }
        }
      }
    `
  );

  // Skip build, Browsers only
  if (typeof window !== "undefined") {
    const { langs, defaultLangKey } = data.site.siteMetadata.languages;
    const langKey = getUserLangKey(langs, defaultLangKey);
    const homeUrl = withPrefix(`/${langKey}/`);

    navigate(homeUrl);
  }

  return <div />;
};

export default RedirectIndex;
