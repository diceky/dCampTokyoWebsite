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

const About = ({ lang }) => {
  const data = useStaticQuery(
    graphql`
      {
        ja: allContentfulSectionAbout(filter: { node_locale: { eq: "ja" } }) {
          nodes {
            title {
              raw
            }
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
            title {
              raw
            }
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

  return (
    <div className={Styles.wrapper} id="about">
      <SectionTitle text={lang === "ja" ? "d.campとは？" : "About d.camp"} />
      <Row className={Styles.titleWrapper}>
        <StaticImage
          src="../images/foamBlue.png"
          alt="blue foam"
          className={Styles.foamBlue}
          objectFit="contain"
          loading="eager"
          placeholder="blurred"
        />
        <Col xs={2} sm={2} md={2} lg={2}>
          <StaticImage
            src="../images/stripeBlue.png"
            alt="blue stripe"
            className={Styles.stripe}
            objectFit="contain"
            loading="eager"
            placeholder="blurred"
          />
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} style={{ zIndex: 1 }}>
          <h1 className={Styles.title}>
            {lang === "ja"
              ? renderRichText(data.ja.nodes[0].title, options)
              : renderRichText(data.en.nodes[0].title, options)}
          </h1>
          <p className={Styles.description}>
            {lang === "ja"
              ? renderRichText(data.ja.nodes[0].description, options)
              : renderRichText(data.en.nodes[0].description, options)}
          </p>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} style={{ textAlign: "right" }}>
          <StaticImage
            src="../images/stripeBlue.png"
            alt="blue stripe"
            className={Styles.stripeFlipped}
            objectFit="contain"
            loading="eager"
            placeholder="blurred"
          />
        </Col>
        <StaticImage
          src="../images/foamWhite.png"
          alt="white foam"
          className={Styles.foamWhite}
          objectFit="contain"
          loading="eager"
          placeholder="blurred"
        />
      </Row>
      <div className={Styles.featureWrapper}>
        <StaticImage
          src="../images/wiggle.png"
          alt="wiggle"
          className={Styles.wiggle}
          objectFit="contain"
          loading="eager"
          placeholder="blurred"
        />
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
                />
              )
            )}
        <StaticImage
          src="../images/stripeOrange.png"
          alt="orange stripe"
          className={Styles.stripeOrange}
          objectFit="contain"
          loading="eager"
          placeholder="blurred"
        />
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

export default About;
