import React from "react";
import * as Styles from "./About.module.css";
import SectionTitle from "./SectionTitle";
import Feature from "./Feature";
import Timetable from "./Timetable";

const About = ({ lang }) => {
  return (
    <div className={Styles.wrapper}>
      <SectionTitle text={lang === "ja" ? "d.campについて" : "About d.camp"} />
      <div>This is About</div>
      <Feature
        title="title"
        description="description"
        link="https://jp.ideo.com/blog/ideotokyo-dcamp-post"
        linkText="linkText"
        image="imageName"
      />
      <Timetable />
    </div>
  );
};

export default About;
