import React, { useState, useEffect } from "react";
import { Modal, Loading } from "components";
import { withReducer, withCompose } from "hocs";
import vocabularyReducer from "../../../reducer";
import { orNull } from "utils/Selector";
import { notification } from "antd";
function Delete(props) {
  const [keyItem, setKeyItem] = useState(null);
  const {
    state,
    dispatch,
    action,
    visible,
    onVisible,
    selectItem,
    listWord,
    user
  } = props;

  function onCancel() {
    onVisible(false, false, false);
  }
  const findKey = () => {
    if (selectItem) {
      var result = Object.keys(listWord).map(key => [key, listWord[key]]);
      const itemSelect = result.find(
        item => item[1].eng_word === selectItem.eng_word
      );
      setKeyItem(itemSelect[0]);
    }
  };

  function onSubmit() {
    const userLean = orNull("uid", user);
    action.vocabularyR.OnRemoveWord(
      {
        isUser: userLean,
        key: keyItem
      },
      dispatch.vocabularyR
    );
    // onVisible(false, false, false);
  }

  const onRemoveSuccess = () => {
    if (state.vocabularyR.response && !state.vocabularyR.loading) {
      const key = `open${Date.now()}`;
      notification.open({
        message: "Xóa thành công",
        type: "success",
        key
      });
      onVisible(false, false, false);
    }
  };

  useEffect(onRemoveSuccess, [state.vocabularyR]);

  useEffect(findKey, [selectItem]);
  return (
    <Modal
      title={"Xóa Thông báo"}
      open={visible.isDelete}
      onCancel={onCancel}
      onSubmit={onSubmit}
    >
      Thông báo bị xoá sẽ không thể khôi phục lại, bạn chắc chắn muốn xóa!
    </Modal>
  );
}

export default withReducer({
  key: "vocabularyR",
  ...vocabularyReducer
})(Delete);
