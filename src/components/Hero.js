import React, { useContext } from "react";
import * as Styles from "./Hero.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { IEContext } from "./Layout";
import HeroImage from "../images/hero.png";

const Hero = () => {
  const isIE = useContext(IEContext);

  return (
    <div className={Styles.wrapper}>
      {isIE ? (
        <>
          <img src={HeroImage} alt="hero.png" className={Styles.image} />
        </>
      ) : (
        <>
          <StaticImage
            src="../images/hero.png"
            alt="hero image"
            className={Styles.image}
            loading="eager"
            placeholder="blurred"
            objectFit="cover"
            objectPosition="50% bottom"
          />
          <div className={Styles.logoWrapper}>
            <StaticImage
              src="../images/logo.png"
              alt="d.camp Tokyo logo"
              className={Styles.logo}
              loading="eager"
              placeholder="blurred"
            />
            <p className={Styles.subtitle}>hosted by IDEO Tokyo</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
