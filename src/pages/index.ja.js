import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Details from "../components/Details";
import HowToJoin from "../components/HowToJoin";
import Loader from "../components/Loader";
import FAQ from "../components/FAQ";
import SEO from "../components/Seo";
import { useStaticQuery, graphql } from "gatsby";
import { useWindowDimensions } from "../misc/customHooks";

const Index = ({ location }) => {
  const data = useStaticQuery(graphql`
    {
      allContentfulApplicationForm(filter: { node_locale: { eq: "ja" } }) {
        nodes {
          text
          link
        }
      }
    }
  `);

  const { width } = useWindowDimensions();

  const changeHeaderThresh = 30;
  const addHighlightThresh = width >= 768 ? 800 : 500;

  const [isReady, setIsReady] = useState(false);
  const [changeHeader, setChangeHeader] = useState(false);
  const [addHighlight, setAddHighLight] = useState(false);

  const [windowTop, setWindowTop] = useState(0);
  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        setWindowTop(window.pageYOffset);
      };
    }
    setTimeout(() => {
      setIsReady(true);
    }, 2000);
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

  const [highlightFaq, setHighlightFaq] = useState(false);
  const handleCPlusPlus = () => setHighlightFaq(true);

  return (
    <>
      {isReady ? "" : <Loader />}
      <Layout
        lang="ja"
        location={location}
        changeColor={changeHeader}
        applicationForm={data.allContentfulApplicationForm.nodes[0]}
      >
        <SEO title="d.camp Tokyo hosted by IDEO" />
        <Hero setHeight={handleHeroHeight} />
        <About lang="ja" addHighlight={addHighlight} />
        <Details lang="ja" handleCPlusPlus={handleCPlusPlus} />
        <HowToJoin
          lang="ja"
          applicationForm={data.allContentfulApplicationForm.nodes[0]}
        />
        <FAQ lang="ja" highlightFaq={highlightFaq} />
      </Layout>
    </>
  );
};

export default Index;
