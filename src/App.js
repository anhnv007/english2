import React from "react";
import "antd/dist/antd.css";
import Routes from "app/routes";
import StoreProvider from "app/store";
import { withRouter } from "react-router";
import { withCompose, withReducer } from "hocs";
import globalReducer from "app/reducer";
const App = props => {
  return (
    <StoreProvider>
      <Routes {...props} />
    </StoreProvider>
  );
};

export default withCompose(
  withReducer({
    key: "global",
    ...globalReducer
  }),
  withRouter
)(App);
