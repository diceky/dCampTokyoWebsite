import React from "react";
import * as Styles from "./Footer.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Facebook, Instagram } from "react-feather";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Footer = ({ lang }) => {
  return (
    <Row className={Styles.wrapper}>
      <Row>
        <Col
          xs={{ span: 8, offset: 0 }}
          sm={{ span: 6, offset: 0 }}
          md={{ span: 6, offset: 0 }}
          lg={{ span: 6, offset: 0 }}
          className={Styles.links}
        >
          <AnchorLink
            to={lang === "ja" ? "/ja/" : "/en/"}
            className={Styles.link}
          >
            Top
          </AnchorLink>
          <a
            href="https://jp.ideo.com/"
            target="_blank"
            rel="noreferrer"
            className={Styles.link}
          >
            {lang === "ja" ? "IDEO Tokyoについて" : "About IDEO Tokyo"}
          </a>
          <a
            href="https://www.instagram.com/ideotokyo/"
            target="_blank"
            rel="noreferrer"
            className={Styles.icon}
          >
            <Instagram color="black" size={24} />
          </a>
          <a
            href="https://www.facebook.com/ideotokyo/"
            target="_blank"
            rel="noreferrer"
            className={Styles.icon}
          >
            <Facebook color="black" size={24} />
          </a>
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ span: 12, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 12, offset: 0 }}
          lg={{ span: 12, offset: 0 }}
          className={Styles.copyright}
        >
          <p>&copy; IDEO Tokyo</p>
        </Col>
      </Row>
    </Row>
  );
};

export default Footer;
