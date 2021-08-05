import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Details from "../components/Details";
import HowToJoin from "../components/HowToJoin";
import FAQ from "../components/FAQ";

const Index = ({ location }) => {
  return (
    <Layout lang="ja" location={location}>
      <Hero />
      <About lang="ja" />
      <Details lang="ja" />
      <HowToJoin lang="ja" />
      <FAQ lang="ja" />
    </Layout>
  );
};

export default Index;
