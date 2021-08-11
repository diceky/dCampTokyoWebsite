import React from "react";
import * as Styles from "./FAQ.module.css";
import SectionTitle from "./SectionTitle";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const FAQ = ({ lang }) => {
  const data = useStaticQuery(graphql`
    {
      ja: allContentfulSectionFaq(filter: { node_locale: { eq: "ja" } }) {
        nodes {
          faq {
            answer {
              raw
            }
            question
          }
        }
      }
      en: allContentfulSectionFaq(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          faq {
            answer {
              raw
            }
            question
          }
        }
      }
    }
  `);

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

  return (
    <Row className={Styles.wrapper} id="faq">
      <SectionTitle text={lang === "ja" ? "よくある質問" : "FAQ"} />
      <StaticImage
        src="../images/blob.png"
        alt="orange blob"
        className={Styles.blob}
        style={{ position: "absolute" }}
        objectFit="contain"
        loading="eager"
        placeholder="blurred"
      />
      <StaticImage
        src="../images/squares.png"
        alt="blue square"
        className={Styles.square}
        style={{ position: "absolute" }}
        objectFit="contain"
        loading="eager"
        placeholder="blurred"
      />
      <Col
        xs={{ span: 10, offset: 1 }}
        sm={{ span: 10, offset: 1 }}
        md={{ span: 10, offset: 1 }}
        lg={{ span: 10, offset: 1 }}
        className={Styles.itemsWrapper}
      >
        {lang === "ja"
          ? data.ja.nodes[0].faq.map(({ answer, question }, index) => (
              <div className={Styles.item}>
                <p className={Styles.question}>{question}</p>
                <p className={Styles.answer}>
                  {renderRichText(answer, options)}
                </p>
              </div>
            ))
          : data.en.nodes[0].faq.map(({ answer, question }, index) => (
              <div className={Styles.item}>
                <p className={Styles.question}>{question}</p>
                <p className={Styles.answer}>
                  {renderRichText(answer, options)}
                </p>
              </div>
            ))}
      </Col>
    </Row>
  );
};

export default FAQ;
