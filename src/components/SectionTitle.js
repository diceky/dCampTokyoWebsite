import React, { useContext } from "react";
import * as Styles from "./SectionTitle.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { IEContext } from "./Layout";
import SectionTitleImage from "../images/sectionTitle.png";

import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const SectionTitle = ({ text }) => {
  const isIE = useContext(IEContext);

  return (
    <div className={Styles.wrapper}>
      {isIE ? (
        <>
          <img
            src={SectionTitleImage}
            alt="section title"
            className={Styles.image}
          />
          <span className={Styles.text}>{text}</span>
        </>
      ) : (
        <Reveal keyframes={customAnimation} triggerOnce duration={500}>
          <StaticImage
            src="../images/sectionTitle.png"
            alt="section title"
            className={Styles.image}
            objectFit="contain"
          />
          <span className={Styles.text}>{text}</span>
        </Reveal>
      )}
    </div>
  );
};

export default SectionTitle;
