import React, { useState, useEffect } from "react";
import { Table, Radio, Divider } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import Search from "./Search";
import { withUser } from "hocs";
import { firebaseApp } from "app/firebaseConfig";
import { orNull } from "utils/Selector";
import { Loading } from "components";
import { ImportantIcon, DeleteIcon, EditIcon } from "./styled";
import { New, Delete, Update } from "./Manipulation";

const columns = [
  {
    title: <StarOutlined />,
    dataIndex: "important"
  },
  {
    title: "English",
    dataIndex: "en_word"
  },
  {
    title: "Vietnamese",
    dataIndex: "vn_mean"
  },
  {
    title: "",
    dataIndex: "manipulation"
  }
];

const Vocabulary = ({ user }) => {
  const [listWord, setListWord] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [visible, setVisible] = useState({
    isNew: false,
    isDelete: false,
    isUpdate: false
  });
  const [selectItem, setSelectItem] = useState(null);

  const onVisible = (isNew, isDelete, isUpdate) => {
    setVisible({ isNew, isDelete, isUpdate });
  };

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

  const renderImportant = node => {
    return <div>{node ? <ImportantIcon /> : <StarOutlined />}</div>;
  };
  const renderManipulation = item => {
    return (
      <div>
        <DeleteIcon onClick={() => onDeleteItem(item)} />
        <EditIcon onClick={() => onUpdateItem(item)} />
      </div>
    );
  };

  const onDeleteItem = item => {
    onVisible(false, true, false);
    setSelectItem(item);
  };

  const onUpdateItem = item => {
    onVisible(false, false, true);
    setSelectItem(item);
  };

  function onUpdateData() {
    if (listWord) {
      var result = Object.keys(listWord).map(key => listWord[key]);
      const r = [];
      result.forEach((item, index) => {
        r.push({
          key: index,
          important: renderImportant(item.isImportant),
          en_word: item.eng_word,
          vn_mean: item.vn_mean,
          manipulation: renderManipulation(item)
        });
      });
      setRows(r);
    }
  }
  useEffect(onGetAllWord, [user]);
  useEffect(onUpdateData, [listWord]);

  return (
    <div>
      {loading ? <Loading /> : null}
      <Search user={user} onVisible={onVisible} />
      <Divider />
      <Table
        scroll={{ x: "calc(500px + 50%)" }}
        columns={columns}
        dataSource={rows}
      />
      <New user={user} visible={visible} onVisible={onVisible} />

      {visible.isDelete ? (
        <Delete
          listWord={listWord}
          selectItem={selectItem}
          user={user}
          visible={visible}
          onVisible={onVisible}
        />
      ) : null}
      {visible.isUpdate ? (
        <Update
          listWord={listWord}
          selectItem={selectItem}
          user={user}
          visible={visible}
          onVisible={onVisible}
        />
      ) : null}
    </div>
  );
};

export default withUser(Vocabulary);
