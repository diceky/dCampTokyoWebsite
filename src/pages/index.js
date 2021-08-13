import React from "react";
import { useStaticQuery, graphql, navigate, withPrefix } from "gatsby";
import { getUserLangKey } from "ptz-i18n";
import SEO from "../components/Seo";

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

    const homeUrlWithoutPrefix = homeUrl.replace(`/dcamp`, ``);

    navigate(homeUrlWithoutPrefix);
  }

  return <SEO title="d.camp Tokyo hosted by IDEO" />;
};

export default RedirectIndex;
