import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Details from "../components/Details";
import HowToJoin from "../components/HowToJoin";
import FAQ from "../components/FAQ";

const Index = ({ location }) => {
  return (
    <Layout lang="en" location={location}>
      <Hero />
      <About lang="en" />
      <Details lang="en" />
      <HowToJoin lang="en" />
      <FAQ lang="en" />
    </Layout>
  );
};

export default Index;
