import React, { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
import { withUser } from "hocs";
import { firebaseApp } from "app/firebaseConfig";
import { Loading } from "components";
const Chat = ({ user }) => {
  const [listMessage, setListMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const onGetAllMessage = () => {
    if (user) {
      setLoading(true);
      firebaseApp
        .database()
        .ref("chats/")
        .on("value", function(snapshot) {
          if (snapshot.val()) {
            setListMessage(snapshot.val());
            return setLoading(false);
          }
          setListMessage([]);
          return setLoading(false);
        });
    }
  };
  console.log(user);
  useEffect(onGetAllMessage, [user]);
  return (
    <div>
      {loading ? <Loading /> : null}
      <List user={user} listMessage={listMessage} />
      <Form user={user} />
    </div>
  );
};
export default withUser(Chat);
