import React from "react";
import PropTypes from "prop-types";
import { Header, Footer } from "sld-component-library";
import Logo from "../images/watermelon.png";

const Layout = ({ children }) => {
  return (
    <>
      <Header logo={Logo} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
