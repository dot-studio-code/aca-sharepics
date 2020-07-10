import React from "react";
import Div100vh from "react-div-100vh";

const Layout = ({ children }) => (
  <Div100vh>
    <div className="wrapper">{children}</div>
  </Div100vh>
);

export default Layout;
