import React, { useState, useEffect } from "react";
import { Form, Input, Button, Card, notification } from "antd";
import { Wrapper } from "./styled";
import { withCompose, withReducer, withUser } from "hocs";
import authenReducer from "../reducer";
import { Loading } from "components";
const Authen = ({ history, state, dispatch, action, user }) => {
  const onFinish = values => {
    action.loginRMA.OnLogin(
      {
        username: values.username,
        password: values.password
      },
      dispatch.loginRMA
    );
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const checkLogin = () => {
    if (user) return history.push("/");
  };

  useEffect(checkLogin, [user]);

  const onRegisterSuccess = () => {
    if (state.loginRMA.response) {
      const key = `open${Date.now()}`;
      notification.open({
        message: "Đăng Nhập thành công",
        type: "success",
        key
      });
      history.push("/");
    }
  };

  useEffect(onRegisterSuccess, [state.loginRMA]);

  return (
    <Wrapper>
      {/* <Loading /> */}
      {state.loginRMA.loading ? <Loading /> : null}
      <Card style={{ width: 500 }}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Đăng Nhập
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Wrapper>
  );
};

export default withCompose(
  withReducer({
    key: "loginRMA",
    ...authenReducer
  }),
  withUser
)(Authen);
