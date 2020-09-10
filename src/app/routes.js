import React, { lazy, Suspense, useState } from "react";
import { Switch } from "react-router-dom";
import { AuthenRoute, PublicRoute } from "components";

const AsyncLogin = lazy(() => import("modules/Authen/Login"));
const AsyncRegister = lazy(() => import("modules/Authen/Register"));

const AsyncHome = lazy(() => import("modules/Home"));
const AsyncVocabulary = lazy(() => import("modules/Vocabulary/List"));
const AsyncChat = lazy(() => import("modules/Chat"));

const Routes = props => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Switch>
        <AuthenRoute
          path={"/sign-in"}
          exact
          component={AsyncLogin}
          {...props}
        />
        <AuthenRoute
          path={"/register"}
          exact
          component={AsyncRegister}
          {...props}
        />
        <PublicRoute path={"/"} exact component={AsyncHome} {...props} />
        <PublicRoute
          path={"/vocabulary"}
          exact
          component={AsyncVocabulary}
          {...props}
        />
        <PublicRoute path={"/chat"} exact component={AsyncChat} {...props} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
