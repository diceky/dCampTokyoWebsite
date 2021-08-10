import React from "react";
import * as Styles from "./Details.module.css";
import SectionTitle from "./SectionTitle";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

const Details = ({ lang }) => {
  const data = useStaticQuery(graphql`
    {
      ja: allContentfulSectionDetails(filter: { node_locale: { eq: "ja" } }) {
        nodes {
          details {
            title
            explanation
          }
        }
      }
      en: allContentfulSectionDetails(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        nodes {
          details {
            title
            explanation
          }
        }
      }
    }
  `);

  return (
    <Row className={Styles.wrapper} id="details">
      <SectionTitle text={lang === "ja" ? "開催概要" : "Details"} />
      <Col
        xs={{ span: 2, offset: 0 }}
        sm={{ span: 2, offset: 0 }}
        md={{ span: 2, offset: 0 }}
        lg={{ span: 2, offset: 0 }}
      >
        <StaticImage
          src="../images/backdropOrange.png"
          alt="orange backdrop"
          className={Styles.image}
          loading="eager"
          placeholder="blurred"
        />
      </Col>
      <Col
        xs={{ span: 10, offset: 0 }}
        sm={{ span: 10, offset: 0 }}
        md={{ span: 10, offset: 0 }}
        lg={{ span: 10, offset: 0 }}
      >
        {lang === "ja"
          ? data.ja.nodes[0].details.map(({ title, explanation }, index) => (
              <div className={Styles.item}>
                <p className={Styles.title}>{title}</p>
                <p className={Styles.explanation}>{explanation}</p>
              </div>
            ))
          : data.en.nodes[0].details.map(({ title, explanation }, index) => (
              <div className={Styles.item}>
                <p className={Styles.title}>{title}</p>
                <p className={Styles.explanation}>{explanation}</p>
              </div>
            ))}
      </Col>
      <StaticImage
        src="../images/woodblock.png"
        alt="wood block"
        className={Styles.woodblock}
        objectFit="contain"
        loading="eager"
        placeholder="blurred"
      />
    </Row>
  );
};

export default Details;
