import React from "react";
import * as Styles from "./Menu.module.css";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 200px, 0) rotate(0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotate(0);
  }
`;

const Menu = ({ lang, isOpen, toggleMenu }) => {
  return (
    <div className={isOpen ? Styles.wrapper : Styles.wrapperClosed}>
      <AnchorLink
        to={lang === "ja" ? "/ja/#about" : "/en/#about"}
        className={Styles.item}
        onAnchorLinkClick={toggleMenu}
      >
        {lang === "ja" ? "d.campとは？" : "About d.camp"}
      </AnchorLink>
      <AnchorLink
        to={lang === "ja" ? "/ja/#details" : "/en/#details"}
        className={Styles.item}
        onAnchorLinkClick={toggleMenu}
      >
        {lang === "ja" ? "開催概要" : "Details"}
      </AnchorLink>
      <AnchorLink
        to={lang === "ja" ? "/ja/#howtojoin" : "/en/#howtojoin"}
        className={Styles.item}
        onAnchorLinkClick={toggleMenu}
      >
        {lang === "ja" ? "参加方法" : "How To Join"}
      </AnchorLink>
      <AnchorLink
        to={lang === "ja" ? "/ja/#faq" : "/en/#faq"}
        className={Styles.item}
        onAnchorLinkClick={toggleMenu}
      >
        {lang === "ja" ? "よくある質問" : "FAQ"}
      </AnchorLink>
      {lang === "ja" ? (
        <div className={Styles.langWrapper}>
          <span className={Styles.currentLang}>JP</span>
          <span> / </span>
          <Link to="/en/" className={Styles.selectLang}>
            EN
          </Link>
        </div>
      ) : (
        <div className={Styles.langWrapper}>
          <Link to="/ja/" className={Styles.selectLang}>
            JP
          </Link>
          <span> / </span>
          <span className={Styles.currentLang}>EN</span>
        </div>
      )}
      <Reveal keyframes={customAnimation} triggerOnce className={Styles.image}>
        <StaticImage
          src="../images/foamGrey.png"
          alt="grey foam"
          style={{ position: "absolute" }}
        />
      </Reveal>
    </div>
  );
};

export default Menu;
