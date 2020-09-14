import React from "react";
import { Row, Avatar, Dropdown, Menu } from "antd";
import {
  HeaderWrapper,
  SignInWrapper,
  SignInText,
  LineWrapper
} from "./styled";
import { withUser } from "hocs";
import { orPath, orEmpty } from "utils/Selector";
const ComponentHeader = ({ history, user }) => {
  const onLogin = () => {
    history.push("/sign-in");
  };

  const onRegister = () => {
    history.push("/register");
  };

  const onUpdateProfile = () => {
    history.push("/update-profile");
  };

  const provider_user = orPath(null, ["providerData", 0], user);

  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={() => onUpdateProfile()}>
        Cập nhật thông tin
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderWrapper>
      <Row gutter={[16, 24]} justify="end">
        {user ? (
          <SignInWrapper>
            <Dropdown overlay={menu} trigger={["click"]}>
              <Avatar src={orEmpty("photoURL", provider_user)} />
            </Dropdown>
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
