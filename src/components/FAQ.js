import React from "react";
import * as Styles from "./FAQ.module.css";
import SectionTitle from "./SectionTitle";

const FAQ = ({ lang }) => {
  return (
    <div className={Styles.wrapper} id="faq">
      <SectionTitle text={lang === "ja" ? "よくある質問" : "FAQ"} />
      <div>This is FAQ</div>
    </div>
  );
};

export default FAQ;
