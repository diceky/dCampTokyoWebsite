import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Details from "../components/Details";
import HowToJoin from "../components/HowToJoin";
import FAQ from "../components/FAQ";
import SEO from "../components/Seo";

const changeHeaderThresh = 30;
const addHighlightThresh = 700;

const Index = ({ location }) => {
  const [changeHeader, setChangeHeader] = useState(false);
  const [addHighlight, setAddHighLight] = useState(false);

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

  //console.log(heroHeight - windowTop);

  if (heroHeight - windowTop < changeHeaderThresh && changeHeader === false)
    setChangeHeader(true);
  else if (heroHeight - windowTop > changeHeaderThresh && changeHeader === true)
    setChangeHeader(false);

  if (heroHeight - windowTop < addHighlightThresh && addHighlight === false)
    setAddHighLight(true);

  return (
    <Layout lang="ja" location={location} changeColor={changeHeader}>
      <SEO title="Top" />
      <Hero setHeight={handleHeroHeight} />
      <About lang="ja" addHighlight={addHighlight} />
      <Details lang="ja" />
      <HowToJoin lang="ja" />
      <FAQ lang="ja" />
    </Layout>
  );
};

export default Index;
