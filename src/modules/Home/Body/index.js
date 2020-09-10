import React, { useState, useEffect } from "react";
import { Form, Input, Button, Card, notification, Checkbox } from "antd";
import { Wrapper } from "./styled";
import { withReducer, withCompose } from "hocs";
import wordReducer from "../reducer";
import { Loading } from "components";
import { orNull, orBoolean } from "utils/Selector";

const Body = ({ state, dispatch, action, user }) => {
  const [form] = Form.useForm();
  const onFinish = values => {
    if (user) {
      const userLean = orNull("uid", user);
      action.wordR.OnAddWord(
        {
          isUser: userLean,
          word: values.word,
          mean: values.mean,
          is_important: orBoolean("isImportant", values)
        },
        dispatch.wordR
      );
      return;
    }
    const key = `open${Date.now()}`;
    notification.open({
      message: "Bạn cần đăng nhập để thực hiện chức năng này",
      type: "warning",
      key
    });
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const onRegisterSuccess = () => {
    if (state.wordR.response && !state.wordR.loading) {
      const key = `open${Date.now()}`;
      notification.open({
        message: "Thêm mới thành công",
        type: "success",
        key
      });
      form.resetFields();
    }
  };

  useEffect(onRegisterSuccess, [state.wordR]);

  return (
    <Wrapper>
      {state.wordR.loading ? <Loading /> : null}
      <Card>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout={"vertical"}
          form={form}
        >
          <Form.Item
            label="Từ Tiếng Anh"
            name="word"
            rules={[
              { required: true, message: "Rất tiếc, không được để trống!" }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Nghĩa Tiếng Việt"
            name="mean"
            rules={[
              { required: true, message: "Rất tiếc, không được để trống!" }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="isImportant" valuePropName="checked">
            <Checkbox>Từ quan trọng</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Thêm từ mới vào danh sách
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Wrapper>
  );
};

export default withCompose(
  withReducer({
    key: "wordR",
    ...wordReducer
  })
)(Body);
