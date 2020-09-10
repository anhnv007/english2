import React, { useState } from "react";
import { Menu, Row, Col } from "antd";
import {
  HeaderWrapper,
  AvatarWrapper,
  SignInWrapper,
  SignInText,
  LineWrapper
} from "./styled";
import { UserOutlined } from "@ant-design/icons";
import { withUser } from "hocs";
const ComponentHeader = ({ history, user }) => {
  const onLogin = () => {
    history.push("/sign-in");
  };
  const onRegister = () => {
    history.push("/register");
  };
  return (
    <HeaderWrapper>
      <Row gutter={[16, 24]} justify="end">
        {user ? (
          <SignInWrapper>
            <SignInText>Xin chào, {user.email}</SignInText>
          </SignInWrapper>
        ) : (
          <SignInWrapper>
            <SignInText onClick={() => onLogin()}>Đăng nhập</SignInText>
            <LineWrapper>/</LineWrapper>
            <SignInText onClick={() => onRegister()}>Đăng ký</SignInText>
          </SignInWrapper>
        )}
      </Row>
    </HeaderWrapper>
  );
};
export default withUser(ComponentHeader);
