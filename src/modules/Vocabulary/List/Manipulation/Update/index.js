import React, { useState, useEffect } from "react";
import { Form } from "../../../private-components";
import { withReducer, withCompose } from "hocs";
import vocabularyReducer from "../../../reducer";
import { orNull, orBoolean } from "utils/Selector";
import { notification } from "antd";
const Update = ({
  visible,
  onVisible,
  state,
  dispatch,
  action,
  user,
  selectItem,
  listWord
}) => {
  const [keyItem, setKeyItem] = useState(null);
  const findKey = () => {
    if (selectItem) {
      var result = Object.keys(listWord).map(key => [key, listWord[key]]);
      const itemSelect = result.find(
        item => item[1].eng_word === selectItem.eng_word
      );
      setKeyItem(itemSelect[0]);
    }
  };
  function onSubmit(values) {
    const userLean = orNull("uid", user);
    action.vocabularyR.OnUpdateWord(
      {
        isUser: userLean,
        key: keyItem,
        word: values.word,
        mean: values.mean,
        is_important: orBoolean("isImportant", values)
      },
      dispatch.vocabularyR
    );
  }
  const onNewSuccess = () => {
    if (state.vocabularyR.response && !state.vocabularyR.loading) {
      const key = `open${Date.now()}`;
      notification.open({
        message: "Cập nhật thành công",
        type: "success",
        key
      });
      onVisible(false, false, false);
    }
  };

  useEffect(onNewSuccess, [state.vocabularyR]);
  function onCancel() {
    onVisible(false, false, false);
  }
  useEffect(findKey, [selectItem]);
  return (
    <Form
      title={"Cập Nhật Thông Báo"}
      open={visible.isUpdate}
      onSubmit={onSubmit}
      onCancel={onCancel}
      item={selectItem}
    />
  );
};

export default withReducer({
  key: "vocabularyR",
  ...vocabularyReducer
})(Update);
