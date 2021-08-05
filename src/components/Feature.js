import React from "react";
import * as Styles from "./Feature.module.css";

const Feature = ({ lang, title, description, link, linkText, image }) => {
  return (
    <div className={Styles.wrapper}>
      <p>{title}</p>
      <p>{description}</p>
      <a href={link}>{linkText}</a>
      <p>{image}</p>
    </div>
  );
};

export default Feature;
