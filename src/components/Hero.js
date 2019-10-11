import React from "react";
import Places from "../data/Start.json";

export default () => (
  <div className="row container-small pad-20-t pad-20-b">
    <div className="col-xs-12 col-md-6 pad-10-l">
      <h1 className="is-hero-menu margin-0 is-white">Watermelon</h1>
      <div className="border" />
      <h4 className="is-hero-sub-text">
        A
        {Places.map((item, index) => (
          <>
            <a
              href={item.url}
              target="_blank"
              className="link-reverse"
              rel="noopener noreferrer"
              key={item.label}
            >
              {`${index === 0 ? ` ` : ``}${item.label}`}
            </a>
            {Places.length !== index + 1 ? "/" : " "}
          </>
        ))}
        boilerplate.
      </h4>
    </div>
  </div>
);
