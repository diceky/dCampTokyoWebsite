import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as Styles from "./Layout.module.css";
import { useStaticQuery, graphql } from "gatsby";

import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n";
import { IntlProvider, addLocaleData } from "react-intl";
import "intl";

export const IEContext = React.createContext("");

const Layout = ({ children, lang, location }) => {
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

  let isIE = false;
  if (typeof window !== `undefined`) {
    isIE = !!window.MSInputMethodContext && !!document.documentMode;
  }

  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  //const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, "/");
  //const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  return (
    <IntlProvider locale={langKey}>
      <IEContext.Provider value={isIE}>
        <Container fluid className={Styles.wrapper}>
          <Header lang={langKey} url={url} />
          {children}
          <Footer lang={langKey} />
        </Container>
      </IEContext.Provider>
    </IntlProvider>
  );
};

export default Layout;
