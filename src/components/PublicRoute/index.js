import React from "react";
import { Route } from "react-router-dom";
import Layout from "./Layout";
import Permission from "./Permission";
const PublicRoute = props => {
  return (
    <Route
      {...props}
      component={() => (
        <Layout {...props}>
          <Permission {...props} />
        </Layout>
      )}
    />
  );
};
export default PublicRoute;
