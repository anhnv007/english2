import React, { useState, useEffect } from "react";
import { Wrapper, MessageWrapper } from "./styled";
import Node from "./Node";
const List = ({ listMessage, user }) => {
  const [listItem, setListItem] = useState([]);

  const convertArr = () => {
    if (listMessage) {
      var result = Object.keys(listMessage).map(key => listMessage[key]);
      setListItem(result);
    }
  };
  useEffect(convertArr, [listMessage]);
  console.log(user);
  return (
    <Wrapper>
      {listItem.length > 0
        ? listItem.map((item, key) => {
            return (
              <Node
                key={key}
                content={item.message}
                username={item.username}
                datetime={item.datetime}
              />
            );
          })
        : null}
      {!user ? (
        <MessageWrapper>
          Bạn hãy đăng nhập để cùng trò chuyện cùng mọi người nhé!!!
        </MessageWrapper>
      ) : null}
    </Wrapper>
  );
};
export default List;
