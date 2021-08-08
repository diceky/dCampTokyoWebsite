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
        en: allContentfulAbout(filter: { node_locale: { eq: "en-US" } }) {
          nodes {
            title {
              raw
            }
            description {
              raw
            }
          }
        }
        ja: allContentfulAbout(filter: { node_locale: { eq: "ja" } }) {
          nodes {
            title {
              raw
            }
            description {
              raw
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
        <Feature
          title="世界で活躍するデザイナーから直接学ぶ。"
          description="IDEOは、世界的デザインファームでありながら、実は教育にとても熱い想いを持つ組織です。それは、IDEOの全員が、デザインが持つスーパーパワーを信じ、伝えたいと思っているから。"
          link="https://jp.ideo.com/blog/ideotokyo-dcamp-post"
          linkText="IDEOが中高生にデザインの力を伝えたい理由"
          image="feature1.png"
        />
        <Feature
          title="世界で活躍するデザイナーから直接学ぶ。"
          description="IDEOは、世界的デザインファームでありながら、実は教育にとても熱い想いを持つ組織です。それは、IDEOの全員が、デザインが持つスーパーパワーを信じ、伝えたいと思っているから。"
          link="https://jp.ideo.com/blog/ideotokyo-dcamp-post"
          linkText="IDEOが中高生にデザインの力を伝えたい理由"
          image="feature1.png"
          flipped
        />
        <StaticImage
          src="../images/stripeOrange.png"
          alt="orange stripe"
          className={Styles.stripeOrange}
          objectFit="contain"
          loading="eager"
          placeholder="blurred"
        />
        <Feature
          title="世界で活躍するデザイナーから直接学ぶ。"
          description="IDEOは、世界的デザインファームでありながら、実は教育にとても熱い想いを持つ組織です。それは、IDEOの全員が、デザインが持つスーパーパワーを信じ、伝えたいと思っているから。"
          link="https://jp.ideo.com/blog/ideotokyo-dcamp-post"
          linkText="IDEOが中高生にデザインの力を伝えたい理由"
          image="feature1.png"
        />
      </div>
      <Timetable />
    </div>
  );
};

export default About;
