import React, { useState } from "react";
import { withUser } from "hocs";

import Header from "./Header";
import Body from "./Body";

const Home = ({ history, user }) => {
  const handleViewAll = () => {
    history.push("/vocabulary");
  };

  return (
    <div>
      <Header handleViewAll={handleViewAll} user={user} />
      <Body user={user} />
    </div>
  );
};

export default withUser(Home);
