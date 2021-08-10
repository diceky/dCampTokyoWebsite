import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Details from "../components/Details";
import HowToJoin from "../components/HowToJoin";
import FAQ from "../components/FAQ";

const changeHeaderThresh = 30;

const Index = ({ location }) => {
  const [changeHeader, setChangeHeader] = useState(false);

  const [windowTop, setWindowTop] = useState(0);
  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        setWindowTop(window.pageYOffset);
      };
    }
  }, []);

  const [heroHeight, setHeroHeight] = useState();
  const handleHeroHeight = (height) => {
    setHeroHeight(height);
  };

  if (heroHeight - windowTop < changeHeaderThresh && changeHeader === false)
    setChangeHeader(true);
  else if (heroHeight - windowTop > changeHeaderThresh && changeHeader === true)
    setChangeHeader(false);

  return (
    <Layout lang="en" location={location} changeColor={changeHeader}>
      <Hero setHeight={handleHeroHeight} />
      <About lang="en" />
      <Details lang="en" />
      <HowToJoin lang="en" />
      <FAQ lang="en" />
    </Layout>
  );
};

export default Index;
