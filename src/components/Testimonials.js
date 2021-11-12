import React from "react";
import * as Styles from "./Testimonials.module.css";
import SectionTitle from "./SectionTitle";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { useStaticQuery, graphql } from "gatsby";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const Testimonials = ({ lang }) => {
  const data = useStaticQuery(graphql`
    {
      ja: allContentfulSectionTestimonials(
        filter: { node_locale: { eq: "ja" } }
      ) {
        nodes {
          testimonial {
            content
          }
        }
      }
      en: allContentfulSectionTestimonials(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        nodes {
          testimonial {
            content
          }
        }
      }
    }
  `);

  var settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Row className={Styles.wrapper} id="testimonials">
      <SectionTitle
        text={lang === "ja" ? "参加者の声" : "What our campers say"}
      />
      <Col
        xs={{ span: 10, offset: 1 }}
        sm={{ span: 10, offset: 1 }}
        md={{ span: 10, offset: 1 }}
        lg={{ span: 8, offset: 2 }}
      >
        <div className={Styles.testimonialWrapper}>
          <span className={`${Styles.quotation} ${Styles.alignTop}`}>
            &ldquo;
          </span>
          <Slider
            {...settings}
            className={Styles.testimonial}
            dotsClass={Styles.dots}
          >
            {lang === "ja"
              ? data.ja.nodes[0].testimonial.map(({ content }, index) => (
                  <div className={Styles.text}>{content}</div>
                ))
              : data.en.nodes[0].testimonial.map(({ content }, index) => (
                  <div className={Styles.text}>{content}</div>
                ))}
          </Slider>
          <span className={`${Styles.quotation} ${Styles.alignBottom}`}>
            &rdquo;
          </span>
        </div>
        <Reveal
          keyframes={customAnimation}
          triggerOnce
          delay={200}
          className={Styles.woodCylinder}
        >
          <StaticImage
            src="../images/woodCylinder.jpg"
            alt="wood cylinder"
            style={{ position: "absolute" }}
            objectFit="contain"
            placeholder="blurred"
          />
        </Reveal>
      </Col>
    </Row>
  );
};

export default Testimonials;
