import React from "react";
import { connect } from "react-redux";

const SocketExample = ({ message, sayHello }) => (
  <div className="row container-small pad-20-t pad-20-b is-grey pad-10-l">
    <div className="col-xs-12">
      <h1 className="is-hero-sub-menu margin-0">Socket Example</h1>
    </div>
    <div className="col-xs-12">
      <h4>
        Find this component in{" "}
        <code className="is-pink">src/components/SocketExample.js</code>
      </h4>
      <h4>This is our dispatch action:</h4>
      <code className="pad-3 is-grey-bg is-white border-radius">
        {`sayHello: () => dispatch({ type: "server/hello", data: "Hello!" })`}
      </code>
      <h4>
        Because it is of type "server/*", it emits to the server via the socket.
        Trigger it by hitting the button below.
      </h4>
      <button className="btn" onClick={() => sayHello()}>
        Dispatch the action
      </button>
    </div>
    <div className="col-xs-12 ">
      {message && (
        <>
          <h1>-</h1>
          <h4>Woah that was fast and we have a response:</h4>
          <code className="pad-3 is-grey-bg is-white border-radius">
            {message}
          </code>
          <h4>
            What just happened? Well the server has recognised that action and
            responded with the appropriate message.
          </h4>
          <h4>
            Find server logic in{" "}
            <code className="is-pink">server/index.js</code>
          </h4>
        </>
      )}
    </div>
  </div>
);

const mapStateToProps = ({ message }) => {
  return { message };
};

const mapDispatchToProps = dispatch => {
  return {
    sayHello: () => dispatch({ type: "server/hello", data: "Hello!" })
  };
};

const ConnectedSocketExample = connect(
  mapStateToProps,
  mapDispatchToProps
)(SocketExample);

export default ConnectedSocketExample;
