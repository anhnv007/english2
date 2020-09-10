import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Wrapper } from "./styled";
const Search = ({ onVisible, user }) => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log("Finish:", values);
  };

  const onCreateWord = () => {
    if (user) {
      onVisible(true, false, false);
      return;
    }
    const key = `open${Date.now()}`;
    notification.open({
      message: "Bạn cần đăng nhập để thực hiện chức năng này",
      type: "warning",
      key
    });
  };

  return (
    <Wrapper>
      <Form
        form={form}
        name="horizontal_login"
        layout="inline"
        onFinish={onFinish}
      >
        <Form.Item name="search">
          <Input prefix={<SearchOutlined />} placeholder="Tìm kiếm" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Tìm kiếm
          </Button>
        </Form.Item>
        <Form.Item name="isImportant" valuePropName="checked">
          <Checkbox>Từ quan trọng</Checkbox>
        </Form.Item>
      </Form>
      <Button type="primary" onClick={() => onCreateWord()}>
        Thêm mới
      </Button>
    </Wrapper>
  );
};

export default Search;
