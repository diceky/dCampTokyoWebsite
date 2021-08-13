import React from "react";
import * as Styles from "./HowToJoin.module.css";
import SectionTitle from "./SectionTitle";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";

const HowToJoin = ({ lang, applicationForm }) => {
  const data = useStaticQuery(graphql`
    {
      ja: allContentfulSectionHowToJoin(filter: { node_locale: { eq: "ja" } }) {
        nodes {
          steps {
            hasApplyButton
            text
          }
        }
      }
      en: allContentfulSectionHowToJoin(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        nodes {
          steps {
            hasApplyButton
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
              <div className={Styles.item} key={index}>
                <p className={Styles.index}>{index + 1}</p>
                <p className={Styles.text}>{item.text}</p>
                {item.hasApplyButton && (
                  <a
                    href={applicationForm.link}
                    target="_blank"
                    rel="noreferrer"
                    className={Styles.link}
                  >
                    {applicationForm.text}
                  </a>
                )}
              </div>
            ))
          : data.en.nodes[0].steps.map((item, index) => (
              <div className={Styles.item} key={index}>
                <p className={Styles.index}>{index + 1}</p>
                <p className={Styles.text}>{item.text}</p>
                {item.hasApplyButton && (
                  <a
                    href={applicationForm.link}
                    target="_blank"
                    rel="noreferrer"
                    className={Styles.link}
                  >
                    {applicationForm.text}
                  </a>
                )}
              </div>
            ))}
      </Col>
    </Row>
  );
};

export default HowToJoin;
