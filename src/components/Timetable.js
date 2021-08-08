import React from "react";
import * as Styles from "./Timetable.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const Timetable = ({ lang }) => {
  return (
    <Row className={Styles.wrapper}>
      <Col
        xs={{ span: 3, offset: 1 }}
        sm={{ span: 3, offset: 1 }}
        md={{ span: 3, offset: 1 }}
        lg={{ span: 3, offset: 1 }}
      >
        <p className={Styles.title}>A day at d.camp</p>
      </Col>
      <Col
        xs={{ span: 7, offset: 1 }}
        sm={{ span: 7, offset: 1 }}
        md={{ span: 7, offset: 1 }}
        lg={{ span: 7, offset: 1 }}
      >
        <div className={Styles.timeWrapper}>
          <span className={Styles.time}>09:00 - 09:50 </span>
          <span className={Styles.content}>
            Fireside chat with David Kelley
          </span>
        </div>
        <div className={Styles.timeWrapper}>
          <span className={Styles.time}>09:00 - 09:50 </span>
          <span className={Styles.content}>
            Fireside chat with David Kelley
          </span>
        </div>
        <div className={Styles.timeWrapper}>
          <span className={Styles.time}>09:00 - 09:50 </span>
          <span className={Styles.content}>
            Fireside chat with David Kelley
          </span>
        </div>
        <div className={Styles.timeWrapper}>
          <span className={Styles.time}>09:00 - 09:50 </span>
          <span className={Styles.content}>
            Fireside chat with David Kelley
          </span>
        </div>
      </Col>
    </Row>
  );
};

export default Timetable;
