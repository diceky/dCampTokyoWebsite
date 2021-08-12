import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as Styles from "./Layout.module.css";
import { useStaticQuery, graphql } from "gatsby";

import { getCurrentLangKey } from "ptz-i18n";
import { IntlProvider } from "react-intl";
import "intl";

export const IEContext = React.createContext("");

const Layout = ({ children, lang, location, changeColor }) => {
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
  const urlWithoutPrefix = url.replace(`/dcamp`, ``);
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, urlWithoutPrefix);

  // console.log(`url:${url}`);
  // console.log(`url without /dcamp:${}`);
  // console.log(`langKey:${langKey}`);

  console.log(`isIE at Layout:${isIE}`);

  return (
    <IEContext.Provider value={isIE}>
      <IntlProvider locale={langKey}>
        <Container fluid className={Styles.wrapper}>
          <Header lang={langKey} changeColor={changeColor} />
          {children}
          <Footer lang={langKey} />
        </Container>
      </IntlProvider>
    </IEContext.Provider>
  );
};

export default Layout;
