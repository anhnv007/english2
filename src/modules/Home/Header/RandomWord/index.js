import React, { useState, useEffect } from "react";
import { Card } from "../../private-components";
import { SyncOutlined } from "@ant-design/icons";
import {
  GirdContent,
  TextContent,
  GirdContentOption,
  TextOption
} from "./styled";
var randomWords = require("random-english-words");

const RandomWord = () => {
  const [word, setWord] = useState("");

  const onGetRandomWord = () => {
    setWord(randomWords());
  };

  const onSetupWord = () => {
    if (word) setWord(word);
  };

  const onRandomWord = () => {
    const nWord = randomWords();
    setWord(nWord);
  };

  useEffect(onGetRandomWord, []);
  useEffect(onSetupWord, [word]);

  return (
    <Card title="Từ vựng ngẫu nhiên" icon={<SyncOutlined />}>
      <GirdContent hoverable={false} bordered={false}>
        <TextContent>{word}</TextContent>
      </GirdContent>
      <GirdContentOption>
        <TextOption onClick={() => onRandomWord()}> Xem ngẫu nhiên</TextOption>
      </GirdContentOption>
    </Card>
  );
};

export default RandomWord;
