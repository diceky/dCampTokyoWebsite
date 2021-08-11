import React from "react";
import * as Styles from "./FAQ.module.css";
import SectionTitle from "./SectionTitle";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import Reveal from "react-awesome-reveal";
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
      <Reveal
        keyframes={customAnimation}
        triggerOnce
        delay={600}
        className={Styles.blob}
      >
        <StaticImage
          src="../images/blob.png"
          alt="orange blob"
          style={{ position: "absolute" }}
          objectFit="contain"
        />
      </Reveal>
      <Reveal
        keyframes={customAnimation}
        triggerOnce
        delay={600}
        className={Styles.square}
      >
        <StaticImage
          src="../images/squares.png"
          alt="blue square"
          style={{ position: "absolute" }}
          objectFit="contain"
        />
      </Reveal>
      <Col
        xs={{ span: 10, offset: 1 }}
        sm={{ span: 10, offset: 1 }}
        md={{ span: 10, offset: 1 }}
        lg={{ span: 10, offset: 1 }}
        className={Styles.itemsWrapper}
      >
        {lang === "ja"
          ? data.ja.nodes[0].faq.map(({ answer, question }, index) => (
              <div className={Styles.item} key={index}>
                <p className={Styles.question}>{question}</p>
                <p className={Styles.answer}>
                  {renderRichText(answer, options)}
                </p>
              </div>
            ))
          : data.en.nodes[0].faq.map(({ answer, question }, index) => (
              <div className={Styles.item} key={index}>
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
