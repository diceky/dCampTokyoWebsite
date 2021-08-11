import React from "react";
import * as Styles from "./About.module.css";
import SectionTitle from "./SectionTitle";
import Feature from "./Feature";
import Timetable from "./Timetable";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { MARKS, BLOCKS, INLINES } from "@contentful/rich-text-types";
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

const About = ({ lang, addHighlight }) => {
  const data = useStaticQuery(
    graphql`
      {
        ja: allContentfulSectionAbout(filter: { node_locale: { eq: "ja" } }) {
          nodes {
            description {
              raw
            }
            timetable {
              time
              event {
                raw
              }
            }
            features {
              buttonLink
              buttonText
              image {
                title
                description
                gatsbyImageData
              }
              title
              description {
                raw
              }
            }
          }
        }
        en: allContentfulSectionAbout(
          filter: { node_locale: { eq: "en-US" } }
        ) {
          nodes {
            description {
              raw
            }
            timetable {
              time
              event {
                raw
              }
            }
            features {
              buttonLink
              buttonText
              image {
                title
                description
                gatsbyImageData
              }
              title
              description {
                raw
              }
            }
          }
        }
      }
    `
  );

  const Blue = ({ children }) => (
    <span className={Styles.highlightBlue}>{children}</span>
  );
  const Orange = ({ children }) => (
    <span className={Styles.highlightOrange}>{children}</span>
  );
  const Text = ({ children }) => children;
  const InlineLink = ({ link, children }) => (
    <a href={link} className="class-link" target="_blank" rel="noreferrer">
      {children}
    </a>
  );

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Blue>{text}</Blue>,
      [MARKS.ITALIC]: (text) => <Orange>{text}</Orange>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [INLINES.HYPERLINK]: ({ data }, children) => (
        <InlineLink link={data.uri}>{children}</InlineLink>
      ),
    },
    renderText: (text) =>
      text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
  };

  console.log("About is rendered");

  return (
    <div className={Styles.wrapper} id="about">
      <SectionTitle text={lang === "ja" ? "d.campとは？" : "About d.camp"} />
      <Row className={Styles.titleWrapper}>
        <Reveal keyframes={customAnimation} triggerOnce delay={600}>
          <StaticImage
            src="../images/foamBlue.png"
            alt="blue foam"
            className={Styles.foamBlue}
            style={{ position: "absolute" }}
            objectFit="contain"
          />
        </Reveal>
        <Col xs={2} sm={2} md={2} lg={2}>
          <Reveal keyframes={customAnimation} triggerOnce delay={600}>
            <StaticImage
              src="../images/stripeBlue.png"
              alt="blue stripe"
              className={Styles.stripe}
              objectFit="contain"
            />
          </Reveal>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} style={{ zIndex: 1 }}>
          <h1 className={Styles.title}>
            {lang === "ja" ? (
              <>
                <span
                  className={`${Styles.highlightBlue} ${
                    addHighlight ? Styles.active : ""
                  }`}
                >
                  ヘンテコ
                </span>
                で
                <span
                  className={`${Styles.highlightBlue} ${
                    addHighlight ? Styles.active : ""
                  }`}
                >
                  愉快
                </span>
                な
                <span
                  className={`${Styles.highlightOrange} ${
                    addHighlight ? Styles.active : ""
                  }`}
                >
                  クリエイティビティ
                </span>
                の世界へようこそ。
              </>
            ) : (
              <>
                Welcome to the{" "}
                <span
                  className={`${Styles.highlightBlue} ${
                    addHighlight ? Styles.active : ""
                  }`}
                >
                  weird
                </span>{" "}
                and{" "}
                <span
                  className={`${Styles.highlightBlue} ${
                    addHighlight ? Styles.active : ""
                  }`}
                >
                  wonderful
                </span>{" "}
                world of{" "}
                <span
                  className={`${Styles.highlightOrange} ${
                    addHighlight ? Styles.active : ""
                  }`}
                >
                  creativity
                </span>
                .
              </>
            )}
          </h1>
          <p className={Styles.description}>
            {lang === "ja"
              ? renderRichText(data.ja.nodes[0].description, options)
              : renderRichText(data.en.nodes[0].description, options)}
          </p>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} style={{ textAlign: "right" }}>
          <Reveal keyframes={customAnimation} triggerOnce delay={600}>
            <StaticImage
              src="../images/stripeBlue.png"
              alt="blue stripe"
              className={Styles.stripeFlipped}
              objectFit="contain"
            />
          </Reveal>
        </Col>
        <Reveal keyframes={customAnimation} triggerOnce delay={600}>
          <StaticImage
            src="../images/foamWhite.png"
            alt="white foam"
            className={Styles.foamWhite}
            style={{ position: "absolute" }}
            objectFit="contain"
          />
        </Reveal>
      </Row>
      <div className={Styles.featureWrapper}>
        <Reveal
          keyframes={customAnimation}
          triggerOnce
          delay={600}
          className={Styles.wiggle}
        >
          <StaticImage
            src="../images/wiggle.png"
            alt="wiggle"
            style={{ position: "absolute" }}
            objectFit="contain"
          />
        </Reveal>
        {lang === "ja"
          ? data.ja.nodes[0].features.map(
              (
                { title, description, buttonText, buttonLink, image },
                index
              ) => (
                <Feature
                  key={index}
                  index={index}
                  title={title}
                  description={description}
                  linkText={buttonText}
                  link={buttonLink}
                  image={image}
                  lang={lang}
                />
              )
            )
          : data.en.nodes[0].features.map(
              (
                { title, description, buttonText, buttonLink, image },
                index
              ) => (
                <Feature
                  key={index}
                  index={index}
                  title={title}
                  description={description}
                  linkText={buttonText}
                  link={buttonLink}
                  image={image}
                  lang={lang}
                />
              )
            )}
        <Reveal
          keyframes={customAnimation}
          triggerOnce
          delay={600}
          className={Styles.stripeOrange}
        >
          <StaticImage
            src="../images/stripeOrange.png"
            alt="orange stripe"
            style={{ position: "absolute" }}
            objectFit="contain"
          />
        </Reveal>
      </div>
      <Timetable
        data={
          lang === "ja"
            ? data.ja.nodes[0].timetable
            : data.en.nodes[0].timetable
        }
      />
    </div>
  );
};

export default React.memo(About);
