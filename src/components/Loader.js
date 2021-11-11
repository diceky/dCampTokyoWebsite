import React, { useContext } from "react";
import * as Styles from "./Loader.module.css";
import { IEContext } from "./Layout";
import Icon from "../images/favicon-black.png";

const Loader = () => {
  const isIE = useContext(IEContext);

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.imageWrapper}>
        <img src={Icon} alt="icon" className={Styles.image} />
      </div>
    </div>
  );
};

export default Loader;
