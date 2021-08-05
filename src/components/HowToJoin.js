import React from "react";
import * as Styles from "./HowToJoin.module.css";
import SectionTitle from "./SectionTitle";

const HowToJoin = ({ lang }) => {
  return (
    <div className={Styles.wrapper}>
      <SectionTitle text={lang === "ja" ? "参加方法" : "How To Join"} />
      <div>This is HowToJoin</div>
    </div>
  );
};

export default HowToJoin;
