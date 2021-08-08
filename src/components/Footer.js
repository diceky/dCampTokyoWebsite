import React from "react";
import * as Styles from "./Footer.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Facebook, Instagram } from "react-feather";

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
          <p>Top</p>
          <p>{lang === "ja" ? "IDEO Tokyoについて" : "About IDEO Tokyo"}</p>
          <Facebook color="black" size={24} className={Styles.icon} />
          <Instagram color="black" size={24} className={Styles.icon} />
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
