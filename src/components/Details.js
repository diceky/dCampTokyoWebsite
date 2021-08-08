import React from "react";
import * as Styles from "./Details.module.css";
import SectionTitle from "./SectionTitle";

const Details = ({ lang }) => {
  return (
    <div className={Styles.wrapper} id="details">
      <SectionTitle text={lang === "ja" ? "開催概要" : "Details"} />
      <div>This is Details</div>
    </div>
  );
};

export default Details;
