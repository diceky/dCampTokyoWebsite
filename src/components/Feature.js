import React from "react";
import * as Styles from "./Feature.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-feather";
import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { useWindowDimensions } from "../misc/customHooks";

import Reveal, { Bounce } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0) rotate(0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotate(0);
  }
`;

const Feature = ({
  index,
  lang,
  title,
  description,
  link,
  linkText,
  image,
  flipped,
}) => {
  const { width, height } = useWindowDimensions();

  const Text = ({ children }) => children;
  const InlineLink = ({ link, children }) => (
    <a
      href={link}
      className={Styles.inlineLink}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [INLINES.HYPERLINK]: ({ data }, children) => (
        <InlineLink link={data.uri}>{children}</InlineLink>
      ),
    },
  };

  const featureImage = (
    <>
      <Reveal keyframes={customAnimation} triggerOnce delay={600}>
        <StaticImage
          src="../images/backdropBlue.png"
          alt="blue backdrop"
          className={Styles.backdrop}
          style={{ position: "absolute" }}
          objectFit="cover"
        />
      </Reveal>
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className={Styles.image}
        style={
          width <= 576 ? { position: "relative" } : { position: "absolute" }
        }
        objectFit="cover"
        objectPosition="left 50%"
      />
    </>
  );

  const featureText = (
    <>
      <p className={Styles.title}>{title}</p>
      <p className={Styles.description}>
        {renderRichText(description, options)}
      </p>
      {link.includes("#") ? (
        <AnchorLink
          to={lang === "ja" ? `/ja/${link}` : `/en/${link}`}
          className={Styles.link}
        >
          {linkText}
        </AnchorLink>
      ) : (
        <a href={link} className={Styles.link} target="_blank" rel="noreferrer">
          {linkText}
          <ArrowRightCircle color="white" size={24} className={Styles.icon} />
        </a>
      )}
    </>
  );

  return (
    <Row className={Styles.wrapper}>
      <Col
        xs={{ span: 10, offset: 1 }}
        sm={{ span: 5, offset: 1 }}
        md={{ span: 5, offset: 1 }}
        lg={{ span: 5, offset: 1 }}
        className={Styles.leftWrapper}
      >
        {index % 2 !== 0 && width >= 576 ? featureImage : featureText}
      </Col>
      <Col
        xs={{ span: 10, offset: 1 }}
        sm={{ span: 5, offset: 0 }}
        md={{ span: 5, offset: 0 }}
        lg={{ span: 5, offset: 0 }}
        className={Styles.rightWrapper}
      >
        {index % 2 !== 0 && width >= 576 ? featureText : featureImage}
      </Col>
    </Row>
  );
};

export default Feature;
