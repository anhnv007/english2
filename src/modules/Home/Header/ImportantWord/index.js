import React, { useState, useEffect } from "react";
import { Card } from "../../private-components";
import { StarOutlined } from "@ant-design/icons";
import {
  GirdContent,
  TextContent,
  GirdContentOption,
  TextOption
} from "./styled";

const ImportantWord = ({ listWord }) => {
  var result = Object.keys(listWord).map(key => listWord[key]);
  const listImportantWord = result.filter(item => item.isImportant === true);
  return (
    <Card title="Danh sách từ vựng quan trọng" icon={<StarOutlined />}>
      <GirdContent hoverable={false} bordered={false}>
        <TextContent>{listImportantWord.length}</TextContent>
      </GirdContent>
      <GirdContentOption>
        <TextOption>Xem tất cả</TextOption>
      </GirdContentOption>
    </Card>
  );
};

export default ImportantWord;
