import React, { useEffect, useState } from "react";
import { DatePicker, Typography, Row, Col } from "antd";
import { Card } from "../private-components";
import { StarOutlined } from "@ant-design/icons";
import RandomWord from "./RandomWord";
import ListWord from "./ListWord";
import ImportantWord from "./ImportantWord";
import { firebaseApp } from "app/firebaseConfig";
import { Loading } from "components";
import { orNull } from "utils/Selector";
const Header = ({ handleViewAll, user }) => {
  const [listWord, setListWord] = useState([]);
  const [loading, setLoading] = useState(false);
  const onGetAllWord = () => {
    if (user) {
      setLoading(true);
      firebaseApp
        .database()
        .ref("word/")
        .child(`${orNull("uid", user)}`)
        .on("value", function(snapshot) {
          if (snapshot.val()) {
            setListWord(snapshot.val());
            return setLoading(false);
          }
          setListWord([]);
          return setLoading(false);
        });
    }
  };

  useEffect(onGetAllWord, [user]);

  return (
    <Row gutter={[16, 24]}>
      {loading ? <Loading /> : null}
      <Col xs={24} sm={12} md={8} lg={8} xl={8}>
        <ListWord listWord={listWord} handleViewAll={handleViewAll} />
      </Col>
      <Col xs={24} sm={12} md={8} lg={8} xl={8}>
        <RandomWord />
      </Col>
      <Col xs={24} sm={12} md={8} lg={8} xl={8}>
        <ImportantWord listWord={listWord} />
      </Col>
    </Row>
  );
};

export default Header;
