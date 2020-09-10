import React, { useEffect, useState } from "react";
import { Storage } from "utils";

const useUser = Component => props => {
  const { history } = props;
  const [user, setUser] = useState(null);

  async function onAuthorizeUser() {
    const tk = await Storage.get("english.user");
    setUser(tk);
  }

  useEffect(() => {
    onAuthorizeUser();
  }, [history]);

  return <Component {...props} user={user} />;
};

export default useUser;
