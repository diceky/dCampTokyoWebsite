import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as Styles from "./404.module.css";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.titleWrapper}>
        <p className={Styles.title}>404</p>
        <p className={Styles.description}>
          It's not that this page doesn't exist.
        </p>
        <p className={Styles.description}>
          It just doesn't exist <span className={Styles.italic}>yet</span>.
        </p>
        <Link to="/" className={Styles.link}>
          Back to top
        </Link>
      </div>
      <StaticImage
        src="../images/foamBlue.png"
        alt="blue foam"
        className={Styles.foamBlue}
        loading="eager"
        placeholder="blurred"
        objectFit="cover"
      />
      <StaticImage
        src="../images/foamWhite.png"
        alt="white foam"
        className={Styles.foamWhite}
        loading="eager"
        placeholder="blurred"
        objectFit="cover"
      />
      <StaticImage
        src="../images/blob.png"
        alt="orange blob"
        className={Styles.blob}
        loading="eager"
        placeholder="blurred"
        objectFit="cover"
      />
      <StaticImage
        src="../images/foamGrey.png"
        alt="grey foam"
        className={Styles.foamGrey}
        loading="eager"
        placeholder="blurred"
        objectFit="cover"
      />
      <StaticImage
        src="../images/squares.png"
        alt="blue squares"
        className={Styles.squares}
        loading="eager"
        placeholder="blurred"
        objectFit="cover"
      />
      <StaticImage
        src="../images/stripeBlue.png"
        alt="blue stripe"
        className={Styles.stripeBlue}
        loading="eager"
        placeholder="blurred"
        objectFit="cover"
      />
      <StaticImage
        src="../images/stripeOrange.png"
        alt="orange stripe"
        className={Styles.stripeOrange}
        loading="eager"
        placeholder="blurred"
        objectFit="cover"
      />
      <StaticImage
        src="../images/wiggle.png"
        alt="wiggle"
        className={Styles.wiggle}
        loading="eager"
        placeholder="blurred"
        objectFit="cover"
      />
      <StaticImage
        src="../images/woodblock.png"
        alt="wooden block"
        className={Styles.woodblock}
        loading="eager"
        placeholder="blurred"
        objectFit="cover"
      />
    </div>
  );
};

export default NotFoundPage;
