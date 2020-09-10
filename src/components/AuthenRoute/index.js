import React from "react";
import { Route } from "react-router-dom";
import Layout from "./Layout";

const AuthenRoute = ({ component, ...props }) => {
  return (
    <Route
      {...props}
      component={() => <Layout {...props} component={component} />}
    />
  );
};

export default AuthenRoute;
