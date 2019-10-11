import React from "react";
import { Hero, GetThis } from "sld-component-library";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SocketExample from "../components/SocketExample";
import Places from "../data/Start.json";

export default function Start() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="is-grey is-pink-bg">
        <Hero places={Places} title="Watermelon" />
      </div>
      <div className="is-grey is-white-bg">
        <GetThis flag="watermelon" />
      </div>
      <div className="is-white is-light-grey-bg">
        <SocketExample />
      </div>
    </Layout>
  );
}
