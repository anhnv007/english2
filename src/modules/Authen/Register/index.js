import React, { useEffect } from "react";
import { Form, Input, Button, Card, notification } from "antd";
import { Wrapper } from "./styled";
import { withReducer } from "hocs";
import authenReducer from "../reducer";
import { Loading } from "components";
const Authen = ({ history, state, dispatch, action }) => {
  const onFinish = values => {
    action.loginRMA.OnRegisterUser(
      {
        username: values.username,
        email: values.email,
        password: values.password
      },
      dispatch.loginRMA
    );
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const onRegisterSuccess = () => {
    if (state.loginRMA.response) {
      const key = `open${Date.now()}`;
      notification.open({
        message: "Đăng ký thành công",
        type: "success",
        key
      });
      history.push("/sign-in");
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
          layout={"vertical"}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="username"
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng điền đầy đủ thông tin để đăng ký!"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="email"
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng điền đầy đủ thông tin để đăng ký!"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng điền đầy đủ thông tin để đăng ký!"
              }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Wrapper>
  );
};

export default withReducer({
  key: "loginRMA",
  ...authenReducer
})(Authen);
