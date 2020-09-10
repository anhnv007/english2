import React from "react";
import { Comment, Tooltip, Avatar } from "antd";
import { Wrapper } from "./styled";
const Node = ({ content, username, datetime }) => {
  return <Wrapper author={username} content={content} datetime={datetime} />;
};
export default Node;
