import React from "react";
import * as Styles from "./Feature.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { ArrowRightCircle } from "react-feather";
import { GatsbyImage } from "gatsby-plugin-image";

const Feature = ({
  lang,
  title,
  description,
  link,
  linkText,
  image,
  flipped,
}) => {
  const featureImage = (
    <div style={{ position: "relative", height: "100%" }}>
      <StaticImage
        src="../images/backdrop.png"
        alt="Inudstrial Design module"
        className={Styles.backdrop}
        style={{ position: "absolute" }}
        loading="eager"
        placeholder="blurred"
        objectFit="cover"
      />
      <StaticImage
        src="../images/feature1.png"
        alt="Inudstrial Design module"
        className={Styles.image}
        style={{ position: "absolute" }}
        loading="eager"
        placeholder="blurred"
        objectFit="cover"
      />
    </div>
  );

  const featureText = (
    <div>
      <p className={Styles.title}>{title}</p>
      <p className={Styles.description}>{description}</p>
      <a href={link} className={Styles.link} target="_blank" rel="noreferrer">
        {linkText}
        <ArrowRightCircle color="white" size={24} className={Styles.icon} />
      </a>
    </div>
  );

  return (
    <Row className={Styles.wrapper}>
      <Col
        xs={{ span: 5, offset: 1 }}
        sm={{ span: 5, offset: 1 }}
        md={{ span: 5, offset: 1 }}
        lg={{ span: 5, offset: 1 }}
        className={Styles.leftWrapper}
      >
        {flipped ? featureImage : featureText}
      </Col>

      <Col
        xs={{ span: 5, offset: 0 }}
        sm={{ span: 5, offset: 0 }}
        md={{ span: 5, offset: 0 }}
        lg={{ span: 5, offset: 0 }}
        className={Styles.leftWrapper}
      >
        {flipped ? featureText : featureImage}
      </Col>
    </Row>
  );
};

export default Feature;
