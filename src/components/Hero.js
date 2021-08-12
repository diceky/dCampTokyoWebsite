import React, { useContext, useEffect, useRef } from "react";
import * as Styles from "./Hero.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { IEContext } from "./Layout";
import HeroImage from "../images/hero.png";
import LogoImage from "../images/logo.png";
import { navigate } from "gatsby";

const Hero = ({ setHeight }) => {
  const isIE = useContext(IEContext);

  const wrapperRef = useRef();
  useEffect(() => {
    if (wrapperRef.current) {
      setHeight(wrapperRef.current.getBoundingClientRect().height);
    }
    window.addEventListener("resize", () => {
      if (wrapperRef.current) {
        setHeight(wrapperRef.current.getBoundingClientRect().height);
      }
    });
  }, [setHeight]);

  useEffect(() => {
    const gatsbyElement = wrapperRef.current;
    const gatsbyImageElement = gatsbyElement.getElementsByClassName(
      "gatsby-image-wrapper"
    );
    if (isIE && gatsbyImageElement) {
      setTimeout(() => {
        navigate("/");
        console.log("found Gatsby element so will refresh once...");
      }, 2000);
    }
  }, []);

  return (
    <div className={Styles.wrapper} ref={wrapperRef}>
      {isIE ? (
        <>
          <img
            src={HeroImage}
            alt="hero"
            className={isIE ? Styles.imageIE : Styles.image}
          />
          <div className={Styles.logoWrapper}>
            <img
              src={LogoImage}
              alt="d.camp Tokyo logo"
              className={Styles.logo}
            />
            <p className={Styles.subtitle}>hosted by IDEO Tokyo</p>
          </div>
        </>
      ) : (
        <>
          <StaticImage
            src="../images/hero.png"
            alt="hero"
            className={Styles.image}
            style={{ position: "absolute" }}
            loading="eager"
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
