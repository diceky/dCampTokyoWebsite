import React, { useContext } from "react";
import * as Styles from "./SectionTitle.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { IEContext } from "./Layout";
import SectionTitleImage from "../images/sectionTitle.png";

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
        </>
      ) : (
        <StaticImage
          src="../images/sectionTitle.png"
          alt="section title"
          className={Styles.image}
          loading="eager"
          placeholder="blurred"
        />
      )}
      <span>{text}</span>
    </div>
  );
};

export default SectionTitle;
