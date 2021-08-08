import React from "react";
import * as Styles from "./Header.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = ({ lang, url }) => {
  return (
    <Row className={Styles.wrapper}>
      <Col
        xs={{ span: 2, offset: 0 }}
        sm={{ span: 2, offset: 0 }}
        md={{ span: 2, offset: 0 }}
        lg={{ span: 2, offset: 0 }}
        className={Styles.langSelector}
      >
        <div>
          {lang === "ja" ? (
            <>
              <span className={Styles.currentLang}>JP</span>
              <span> / </span>
              <Link to="/en/" className={Styles.selectLang}>
                EN
              </Link>
            </>
          ) : (
            <>
              <Link to="/ja/" className={Styles.selectLang}>
                JP
              </Link>
              <span> / </span>
              <span className={Styles.currentLang}>EN</span>
            </>
          )}
        </div>
      </Col>
      <Col
        xs={{ span: 8, offset: 2 }}
        sm={{ span: 8, offset: 2 }}
        md={{ span: 8, offset: 2 }}
        lg={{ span: 8, offset: 2 }}
        className={Styles.menu}
      >
        <AnchorLink
          to={lang === "ja" ? "/ja/#about" : "/en/#about"}
          className={Styles.item}
        >
          {lang === "ja" ? "d.campとは？" : "About d.camp"}
        </AnchorLink>
        <AnchorLink
          to={lang === "ja" ? "/ja/#details" : "/en/#details"}
          className={Styles.item}
        >
          {lang === "ja" ? "開催概要" : "Details"}
        </AnchorLink>
        <AnchorLink
          to={lang === "ja" ? "/ja/#howtojoin" : "/en/#howtojoin"}
          className={Styles.item}
        >
          {lang === "ja" ? "参加方法" : "How To Join"}
        </AnchorLink>
        <AnchorLink
          to={lang === "ja" ? "/ja/#faq" : "/en/#faq"}
          className={Styles.item}
        >
          {lang === "ja" ? "よくある質問" : "FAQ"}
        </AnchorLink>
        <p className={Styles.button}>{lang === "ja" ? "応募する" : "Apply"}</p>
      </Col>
    </Row>
  );
};

export default Header;
