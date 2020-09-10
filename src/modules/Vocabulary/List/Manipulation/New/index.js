import React, { useEffect } from "react";
import { Form } from "../../../private-components";
import { withReducer, withCompose } from "hocs";
import vocabularyReducer from "../../../reducer";
import { orNull, orBoolean } from "utils/Selector";
import { notification } from "antd";
const New = ({ visible, onVisible, state, dispatch, action, user }) => {
  function onSubmit(values) {
    if (user) {
      const userLean = orNull("uid", user);
      action.vocabularyR.OnAddWord(
        {
          isUser: userLean,
          word: values.word,
          mean: values.mean,
          is_important: orBoolean("isImportant", values)
        },
        dispatch.vocabularyR
      );
      onVisible(false, false, false);
      return;
    }
  }

  const onNewSuccess = () => {
    if (state.vocabularyR.response && !state.vocabularyR.loading) {
      const key = `open${Date.now()}`;
      notification.open({
        message: "Thêm mới thành công",
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
  return (
    <Form
      title={"Thêm Từ Mới"}
      open={visible.isNew}
      item={null}
      onSubmit={onSubmit}
      onCancel={onCancel}
    />
  );
};

export default withReducer({
  key: "vocabularyR",
  ...vocabularyReducer
})(New);
