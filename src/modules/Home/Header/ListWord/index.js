import React, { useState, useEffect } from "react";
import { Card } from "../../private-components";
import { ReadOutlined } from "@ant-design/icons";
import {
  GirdContent,
  TextContent,
  GirdContentOption,
  TextOption
} from "./styled";

const ListWord = ({ listWord, handleViewAll }) => {
  var result = Object.keys(listWord).map(key => listWord[key]);

  return (
    <Card title="Danh sách từ vựng" icon={<ReadOutlined />}>
      <GirdContent hoverable={false} bordered={false}>
        <TextContent>{result.length}</TextContent>
      </GirdContent>
      <GirdContentOption>
        <TextOption onClick={() => handleViewAll()}>Xem tất cả</TextOption>
      </GirdContentOption>
    </Card>
  );
};

export default ListWord;
