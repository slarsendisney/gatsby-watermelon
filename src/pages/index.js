import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Places from "../data/Start.json";

export default function Start() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="is-grey is-light-grey-bg">
        <div className="row container-small pad-20-t pad-20-b">
          <div className="col-xs-12 col-md-6 pad-10-l">
            <h1 className="is-hero-menu margin-0">
              <span role="img" aria-label="watermelon logo">
                🍉
              </span>
              Watermelon
            </h1>
            <div className="border" />
            <h4 className="is-hero-sub-text">
              A
              {Places.map((item, index) => (
                <a
                  href={item.url}
                  target="_blank"
                  className="link"
                  rel="noopener noreferrer"
                >
                  {`${index === 0 ? ` ` : ``}${item.label}${
                    Places.length !== index + 1 ? " / " : " "
                  }`}
                </a>
              ))}
              boilerplate.
            </h4>
          </div>
        </div>
      </div>
    </Layout>
  );
}
