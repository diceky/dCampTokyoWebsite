import React, { useContext } from "react";
import * as Styles from "./Details.module.css";
import SectionTitle from "./SectionTitle";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { IEContext } from "./Layout";
import backdropOrangeImage from "../images/backdropOrange.png";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100px, 0, 0) rotate(0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotate(0);
  }
`;

const Details = ({ lang, handleCPlusPlus }) => {
  const data = useStaticQuery(graphql`
    {
      ja: allContentfulSectionDetails(filter: { node_locale: { eq: "ja" } }) {
        nodes {
          details {
            title
            content
          }
        }
      }
      en: allContentfulSectionDetails(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        nodes {
          details {
            title
            content
          }
        }
      }
    }
  `);

  const isIE = useContext(IEContext);

  return (
    <Row className={Styles.wrapper} id="details">
      <SectionTitle text={lang === "ja" ? "開催概要" : "Details"} />
      <Col
        xs={{ span: 2, offset: 0 }}
        sm={{ span: 2, offset: 0 }}
        md={{ span: 2, offset: 0 }}
        lg={{ span: 2, offset: 0 }}
      >
        {isIE ? (
          <img
            src={backdropOrangeImage}
            alt="orange backdrop"
            className={isIE ? Styles.imageIE : Styles.image}
          />
        ) : (
          <Reveal
            keyframes={customAnimation}
            triggerOnce
            delay={600}
            className={Styles.image}
          >
            <StaticImage
              src="../images/backdropOrange.png"
              alt="orange backdrop"
              className={Styles.image}
              placeholder="blurred"
            />
          </Reveal>
        )}
      </Col>
      <Col
        xs={{ span: 10, offset: 0 }}
        sm={{ span: 10, offset: 0 }}
        md={{ span: 10, offset: 0 }}
        lg={{ span: 10, offset: 0 }}
      >
        {lang === "ja"
          ? data.ja.nodes[0].details.map(({ title, content }, index) => (
              <div className={Styles.item} key={index}>
                <p className={Styles.title}>{title}</p>
                {content.includes("C++") ? (
                  <p className={Styles.content}>
                    {content.replace("C++", "")}
                    <span>
                      <AnchorLink
                        to={lang === "ja" ? "/ja/#cplusplus" : "/en/#cplusplus"}
                        className={Styles.anchorlink}
                        onAnchorLinkClick={handleCPlusPlus}
                      >
                        C++
                      </AnchorLink>
                    </span>
                  </p>
                ) : (
                  <p className={Styles.content}>{content}</p>
                )}
              </div>
            ))
          : data.en.nodes[0].details.map(({ title, content }, index) => (
              <div className={Styles.item} key={index}>
                <p className={Styles.title}>{title}</p>
                {content.includes("C++") ? (
                  <p className={Styles.content}>
                    {content.replace("C++", "")}
                    <span>
                      <AnchorLink
                        to={lang === "ja" ? "/ja/#cplusplus" : "/en/#cplusplus"}
                        className={Styles.anchorlink}
                        onAnchorLinkClick={handleCPlusPlus}
                      >
                        C++
                      </AnchorLink>
                    </span>
                  </p>
                ) : (
                  <p className={Styles.content}>{content}</p>
                )}
              </div>
            ))}
      </Col>
      <Reveal
        keyframes={customAnimation}
        triggerOnce
        delay={200}
        className={Styles.woodblock}
      >
        <StaticImage
          src="../images/woodblock.png"
          alt="wood block"
          style={{ position: "absolute" }}
          objectFit="contain"
          placeholder="blurred"
        />
      </Reveal>
    </Row>
  );
};

export default Details;
