import React from "react";

const Layout = props => {
  const { component: Component } = props;

  return <Component {...props} />;
};

export default Layout;
