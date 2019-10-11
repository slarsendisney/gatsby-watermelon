import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function lost() {
  return (
    <Layout>
      <SEO title="404" />
      <div className="is-grey is-light-grey-bg">
        <div className="row container-small pad-20-t pad-20-b">
          <div className="col-xs-12 col-md-6 pad-10-l">
            <h1 className="is-hero-menu margin-0">Oops!</h1>
            <h4 className="is-hero-sub-text">No watermelons here...</h4>
            <Link>
              <button className="btn margin-3-t">Take me home</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
