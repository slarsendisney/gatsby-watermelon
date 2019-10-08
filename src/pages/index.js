import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Watermelon from "../images/watermelon.svg";
export default function Start() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="is-grey is-light-grey-bg">
        <div className="row container-small pad-20-t pad-20-b">
          <div className="col-xs-12 col-md-6 pad-10-l">
            <h1 className="is-hero-menu margin-0">🍉 Watermelon</h1>
            <div className="line margin-10-t margin-10-b" />
            <div className="border" />
            <h4 className="is-hero-sub-text">
              A gatsby/node/socket.io boilerplate
            </h4>
          </div>
        </div>
      </div>
    </Layout>
  );
}
