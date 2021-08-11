import React from "react";
import * as Styles from "./Timetable.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import { useWindowDimensions } from "../misc/customHooks";

const Timetable = ({ lang, data }) => {
  const { width } = useWindowDimensions();

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
    <Row className={Styles.wrapper} id="timetable">
      <Col
        xs={{ span: 11, offset: 1 }}
        sm={{ span: 11, offset: 1 }}
        md={{ span: 11, offset: 1 }}
        lg={{ span: 3, offset: 1 }}
      >
        <p className={Styles.title}>A day at d.camp</p>
      </Col>

      <Col
        xs={{ span: 11, offset: 1 }}
        sm={{ span: 11, offset: 1 }}
        md={{ span: 11, offset: 1 }}
        lg={{ span: 8, offset: 0 }}
        className={Styles.timetableWrapper}
      >
        {width >= 576 ? (
          <>
            <div className={Styles.timeWrapper}>
              {data.map(({ time }, index) => (
                <p className={Styles.time} key={index}>
                  {time}
                </p>
              ))}
            </div>
            <div className={Styles.eventWrapper}>
              {data.map(({ event }, index) => (
                <p className={Styles.event} key={index}>
                  {renderRichText(event, options)}
                </p>
              ))}
            </div>
          </>
        ) : (
          <>
            {data.map(({ time, event }, index) => (
              <div className={Styles.timeWrapper} key={index}>
                <p className={Styles.time}>{time}</p>
                <p className={Styles.event}>{renderRichText(event, options)}</p>
              </div>
            ))}
          </>
        )}
      </Col>
    </Row>
  );
};

export default Timetable;
