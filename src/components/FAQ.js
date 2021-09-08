import React, { useContext } from "react";
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

import { IEContext } from "./Layout";
import blobImage from "../images/blob.png";
import squaresImage from "../images/squares.png";

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

const FAQ = ({ lang, highlightFaq }) => {
  const data = useStaticQuery(graphql`
    {
      ja: allContentfulSectionFaq(filter: { node_locale: { eq: "ja" } }) {
        nodes {
          faq {
            answer {
              raw
            }
            question
            anchorLinkId
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
            anchorLinkId
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

  const isIE = useContext(IEContext);

  return (
    <Row className={Styles.wrapper} id="faq">
      <SectionTitle text={lang === "ja" ? "よくある質問" : "FAQ"} />
      {isIE ? (
        <>
          <img src={blobImage} alt="orange blob" className={Styles.blob} />
          <img
            src={squaresImage}
            alt="blue squares"
            className={Styles.square}
          />
        </>
      ) : (
        <>
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
              alt="blue squares"
              style={{ position: "absolute" }}
              objectFit="contain"
            />
          </Reveal>
        </>
      )}
      <Col
        xs={{ span: 10, offset: 1 }}
        sm={{ span: 10, offset: 1 }}
        md={{ span: 10, offset: 1 }}
        lg={{ span: 10, offset: 1 }}
        xxl={{ span: 8, offset: 2 }}
        className={Styles.itemsWrapper}
      >
        {lang === "ja"
          ? data.ja.nodes[0].faq.map(
              ({ answer, question, anchorLinkId }, index) => (
                <div
                  className={Styles.item}
                  key={index}
                  id={anchorLinkId ? anchorLinkId : ""}
                >
                  <p
                    className={`${Styles.question} ${
                      anchorLinkId && highlightFaq ? Styles.highlight : ""
                    }`}
                  >
                    {question}
                  </p>
                  <p className={Styles.answer}>
                    {renderRichText(answer, options)}
                  </p>
                </div>
              )
            )
          : data.en.nodes[0].faq.map(
              ({ answer, question, anchorLinkId }, index) => (
                <div
                  className={Styles.item}
                  key={index}
                  id={anchorLinkId ? anchorLinkId : ""}
                >
                  <p
                    className={`${Styles.question} ${
                      anchorLinkId && highlightFaq ? Styles.highlight : ""
                    }`}
                  >
                    {question}
                  </p>
                  <p className={Styles.answer}>
                    {renderRichText(answer, options)}
                  </p>
                </div>
              )
            )}
      </Col>
    </Row>
  );
};

export default FAQ;
