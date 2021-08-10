import React, { useState } from "react";
import * as Styles from "./Header.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Menu from "./Menu";

import { useWindowDimensions } from "../misc/customHooks";

const Header = ({ lang, url }) => {
  const { width, height } = useWindowDimensions();

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Row className={Styles.wrapper}>
      {width >= 768 ? (
        <>
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
            xs={{ span: 10, offset: 0 }}
            sm={{ span: 10, offset: 0 }}
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
            <a
              href="https://forms.gle/paijHYLXnSu4mSTbA"
              className={Styles.button}
              target="_blank"
              rel="noreferrer"
            >
              {lang === "ja" ? "応募する" : "Apply"}
            </a>
          </Col>
        </>
      ) : (
        <>
          <Menu isOpen={isOpen} lang={lang} />
          <Col
            xs={{ span: 2, offset: 10 }}
            sm={{ span: 2, offset: 10 }}
            md={{ span: 2, offset: 10 }}
            lg={{ span: 2, offset: 10 }}
            style={{ zIndex: 2 }}
          >
            <button className={Styles.menuBtn} onClick={toggleMenu}>
              <svg
                width="38"
                height="22"
                viewBox="0 0 38 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={
                    isOpen ? Styles.menuBtnTopClose : Styles.menuBtnTopOpen
                  }
                  d="M-3.02763e-07 6.92641L-4.69281e-08 1.07359C-2.11933e-08 0.484844 0.464622 -1.64072e-06 1.02881 -1.61606e-06L36.9712 -4.49711e-08C37.5354 -2.03094e-08 38 0.484846 38 1.07359L38 6.92641C38 7.51516 37.5354 8 36.9712 8L0.995632 8C0.431442 8 -3.28498e-07 7.51515 -3.02763e-07 6.92641Z"
                  fill="white"
                />
                <path
                  className={
                    isOpen
                      ? Styles.menuBtnBottomClose
                      : Styles.menuBtnBottomOpen
                  }
                  d="M-3.02763e-07 20.9264L-4.69281e-08 15.0736C-2.11933e-08 14.4848 0.464622 14 1.02881 14L36.9712 14C37.5354 14 38 14.4848 38 15.0736L38 20.9264C38 21.5152 37.5354 22 36.9712 22L0.995632 22C0.431442 22 -3.28498e-07 21.5152 -3.02763e-07 20.9264Z"
                  fill="white"
                />
              </svg>
            </button>
          </Col>
          <a
            href="https://forms.gle/paijHYLXnSu4mSTbA"
            className={Styles.cta}
            target="_blank"
            rel="noreferrer"
          >
            {lang === "ja" ? "応募する" : "Apply"}
          </a>
        </>
      )}
    </Row>
  );
};

export default Header;