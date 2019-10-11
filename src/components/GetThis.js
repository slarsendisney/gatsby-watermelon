import React from "react";

export default ({ flag }) => (
  <div className="row container-small pad-10-t pad-10-b pad-10-l is-grey">
    <div className="col-xs-12">
      <h1 className="is-hero-sub-menu margin-0">Get this boilerplate</h1>
      <h4>
        You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your
        local development machine .
      </h4>
      <h4>If you've got that, great! Simply open a terminal and enter:</h4>
      <code className="pad-3 is-grey-bg is-white border-radius">
        {`npx -p yo -p generator-sld -- yo sld:${flag}`}
      </code>
      <h4>
        Not the boilerplate for you?{" "}
        <a
          href="https://boilerplates.sld.codes"
          target="_blank"
          className="link"
        >
          Click here to see my other boilerplates.
        </a>
      </h4>
    </div>
  </div>
);
