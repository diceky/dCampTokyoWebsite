import React from "react";
import * as Styles from "./HowToJoin.module.css";
import SectionTitle from "./SectionTitle";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";

const HowToJoin = ({ lang }) => {
  const data = useStaticQuery(graphql`
    {
      ja: allContentfulSectionHowToJoin(filter: { node_locale: { eq: "ja" } }) {
        nodes {
          steps {
            buttonLink
            buttonText
            hasButton
            text
          }
        }
      }
      en: allContentfulSectionHowToJoin(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        nodes {
          steps {
            buttonLink
            buttonText
            hasButton
            text
          }
        }
      }
    }
  `);

  return (
    <Row className={Styles.wrapper} id="howtojoin">
      <SectionTitle text={lang === "ja" ? "参加方法" : "How To Join"} />
      <Col
        xs={{ span: 10, offset: 1 }}
        sm={{ span: 10, offset: 1 }}
        md={{ span: 10, offset: 1 }}
        lg={{ span: 10, offset: 1 }}
        className={Styles.itemsWrapper}
      >
        {lang === "ja"
          ? data.ja.nodes[0].steps.map((item, index) => (
              <div className={Styles.item}>
                <p className={Styles.index}>{index + 1}</p>
                <p className={Styles.text}>{item.text}</p>
                {item.hasButton && (
                  <a
                    href={item.buttonLink}
                    target="_blank"
                    rel="noreferrer"
                    className={Styles.link}
                  >
                    {item.buttonText}
                  </a>
                )}
              </div>
            ))
          : data.en.nodes[0].steps.map((item, index) => (
              <div className={Styles.item}>
                <p className={Styles.index}>{index + 1}</p>
                <p className={Styles.text}>{item.text}</p>
                {item.hasButton && (
                  <a
                    href={item.buttonLink}
                    target="_blank"
                    rel="noreferrer"
                    className={Styles.link}
                  >
                    {item.buttonText}
                  </a>
                )}
              </div>
            ))}
      </Col>
    </Row>
  );
};

export default HowToJoin;
