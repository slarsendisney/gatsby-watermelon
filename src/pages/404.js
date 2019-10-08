import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function lost() {
  return (
    <Layout>
      <SEO title="404" />
      <div className="is-grey is-light-grey-bg">
        <div className="row container-small pad-20-t">
          <div className="col-xs-12 col-md-6 pad-10-l">
            <h1 className="is-hero-menu margin-0">Oops!</h1>
            <div className="line margin-10-t margin-10-b" />
            <div className="border" />
            <h4 className="is-hero-sub-text">No watermelons here...</h4>
          </div>
        </div>
      </div>
    </Layout>
  );
}
